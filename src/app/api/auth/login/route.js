import connectDB from "@/lib/mongodb";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server"

export async function POST (req, res) {
  try {
    // Connect to MongoDB
    await connectDB()
    
    // Get email and password from request body
    const { email, password } = await req.json();

    // Check if email and password are provided
    if (!email || !password) {
      return new NextResponse(JSON.stringify({ message: 'Email and password are required' }), { status: 400 })
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return new NextResponse(JSON.stringify({ message: 'User does not exist' }), { status: 400 })
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new NextResponse(JSON.stringify({ message: 'Invalid credentials' }), { status: 400 })
    }

    // Return success message
    return new NextResponse(JSON.stringify({ message: 'Success', email, password }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  } catch(err){
    return new NextResponse(JSON.stringify({ message: 'An error occurred during login.' }), { status: 500 })
  }
}