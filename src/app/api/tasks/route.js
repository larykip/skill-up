import connectDB from "@/lib/mongodb";
import Task from "@/models/taskModel";
import { NextResponse } from "next/server";

export async function POST(req, res){
    try {
        await connectDB()

        const { title, description, pay, deadline, language } = await req.json()

        if (!title || !description || !pay || !deadline || !language) {
            return new NextResponse(JSON.stringify({ message: 'All fields are required' }), { status: 400 })
        }

        await Task.create({ title, description, pay, deadline, language })

        return new NextResponse(JSON.stringify({message: 'Task added successfully!'}))

    } catch(err){
        return new NextResponse(JSON.stringify({message: 'noma noma!'}))
    }
}

export async function GET(req, res) {
    try {
        await connectDB()

        const data = await Task.find()

        return new NextResponse(JSON.stringify({message: data}))
    }
    catch(err){
        return new NextResponse(JSON.stringify({message: 'noma noma!'}))
    }
}
