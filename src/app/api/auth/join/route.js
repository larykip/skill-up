import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server';

export async function POST (req, res) {
    try {
        const { email, password, confirmPassword  } = await req.json();
        if (!email || !password || !confirmPassword) {
            return new NextResponse(JSON.stringify({ message: 'Email, password and password confirmation are required' }), { status: 400 })
        }
        if (password !== confirmPassword) {
            return new NextResponse(JSON.stringify({ message: 'Password and password confirmation do not match' }), { status: 400 })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        return new NextResponse(JSON.stringify({ message: 'Success', email, password, hashedPassword }), { status: 200 })
    } catch(err){}
}