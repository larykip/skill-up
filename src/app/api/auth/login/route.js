import { NextResponse } from "next/server"

export async function POST (req, res) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return new NextResponse(JSON.stringify({ message: 'Email and password are required' }), { status: 400 })
    }
    return new NextResponse(JSON.stringify({ message: 'Success', email, password }), { status: 200 })
  } catch(err){
    return new NextResponse(JSON.stringify({ message: 'An error occurred during login.' }), { status: 500 })
  }
}