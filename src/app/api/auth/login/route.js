import connectDB from "@/lib/mongodb";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import { serialize } from "cookie";
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";

export async function POST (req, res) {
  try {
    // Connect to MongoDB
    await connectDB();

    // Get email and password from request body
    const { email, password } = await req.json();

    // Basic input validation
    if (!email || !password) {
      return new NextResponse(JSON.stringify({ message: 'Email and password are required' }), { status: 400 });
    }

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists
    if (!user) {
      return new NextResponse(JSON.stringify({ message: 'User not found' }), { status: 401 }); // Unauthorized
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new NextResponse(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 }); // Unauthorized
    }



    const userId = user._id.toString();
    const role = user.role;

    const userCookie = serialize('user', userId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 
    });

    const roleCookie = serialize('role', role, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24
    });

  const response = new NextResponse(JSON.stringify({ message: 'Login successful', role }), {
    status: 200,
    headers: { 'Content-Type': 'application/json', 'Set-Cookie': [userCookie, roleCookie] }, // Set both cookies
  });

  return response;

  } catch (error) {
    console.error('Login error:', error); // Log the error for debugging
    return new NextResponse(JSON.stringify({ message: 'An error occurred during login.' }), { status: 500 });
  }
}