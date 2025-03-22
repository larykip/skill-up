import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/userModel";

export async function verifyUser() {
  try {
    await connectDB();
    
    // Get cookies
    const cookieStore = await cookies();
    const userId = cookieStore.get("user")?.value;
    const role = cookieStore.get("role")?.value;

    if (!userId) {
      return { isAuthenticated: false, user: null, role: null };
    }

    // Find the user in the database
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return { isAuthenticated: false, user: null, role: null };
    }

    return { isAuthenticated: true, user, role };
  } catch (error) {
    console.error("Error verifying user:", error);
    return { isAuthenticated: false, user: null, role: null };
  }
}
