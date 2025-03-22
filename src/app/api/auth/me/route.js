import { NextResponse } from "next/server";
import { verifyUser } from "@/lib/auth/verifyUser";

export async function GET() {
  try {
    const { isAuthenticated, user, role } = await verifyUser();

    if (!isAuthenticated) {
      return new NextResponse(
        JSON.stringify({ message: "Not authenticated" }),
        { status: 401 }
      );
    }

    return new NextResponse(
      JSON.stringify({ user, role }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return new NextResponse(
      JSON.stringify({ message: "An error occurred" }),
      { status: 500 }
    );
  }
}
