import connectDB from '@/lib/mongodb';
import User from '@/models/userModel';
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server';

export async function POST (req, res) {
    try {
        // Connect to MongoDB
        await connectDB()

        // Get email, password and confirmPassword from request body
        const { email, password, confirmPassword  } = await req.json();

        // Check if email, password and confirmPassword are provided
        if (!email || !password || !confirmPassword) {
            return new NextResponse(JSON.stringify({ message: 'Email, password and password confirmation are required' }), { status: 400 })
        }

        // Check if user already exists
        const user = await User.findOne({ email })
        if (user) {
            return new NextResponse(JSON.stringify({ message: 'User already exists' }), { status: 400 })
        }

        if (password.length < 6) {
            return new NextResponse(JSON.stringify({ message: 'Password must be at least 6 characters' }), { status: 400 })
        }

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return new NextResponse(JSON.stringify({ message: 'Password and password confirmation do not match' }), { status: 400 })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)
        
        // Create user
        await User.create({ email, password: hashedPassword })

        // Return success message
        return new NextResponse(JSON.stringify({ message: 'Sign up was successful. Thank you!' }), { status: 200, headers: { 'Content-Type': 'application/json' } })
    } catch(err){
        return new NextResponse(JSON.stringify({ message: 'An error occurred during registration.' }), { status: 500 })
    }
}