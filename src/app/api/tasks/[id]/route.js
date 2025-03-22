import connectDB from "@/lib/mongodb";
import Task from "@/models/taskModel";
import { NextResponse } from "next/server";

export async function PATCH(req, {params}) {
    try {
      await connectDB();
  
      const { id } = await params;
      const { title, description, pay, deadline, language } = await req.json();
  
      if (!title || !description || !pay || !deadline || !language) {
        return new NextResponse(JSON.stringify({ message: 'All fields are required' }), { status: 400 });
      }
  
      const editTask = await Task.findByIdAndUpdate(id, { title, description, pay, deadline, language }, { new: true });
  
      if (!editTask) {
        return new NextResponse(JSON.stringify({ message: 'Task not found' }), { status: 404 });
      }
  
      return new NextResponse(JSON.stringify({ message: 'Task updated successfully!' }), { status: 200 });
    } catch (err) {
      console.error(err);
      return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
  }

export async function DELETE(req, {params}){
    try{
        await connectDB()

        // Get the id from the params
        const { id } = await params

        const deleteTask = await Task.findByIdAndDelete(id)

        if(!deleteTask){
            return new NextResponse(JSON.stringify({message: 'Task not found'}), {status: 404})
        }

        return new NextResponse(JSON.stringify({message: 'Task deleted successfully!'}), {status: 200})
    }catch(err){
        console.error(err);
        return new NextResponse(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}