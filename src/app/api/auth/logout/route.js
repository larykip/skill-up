import { NextResponse } from "next/server";
import { serialize } from "cookie"; // Import serialize

export async function GET() {
  try {
    const userCookie = serialize("user", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0, // Clears immediately
    });

    const roleCookie = serialize("role", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 0, // Clears immediately
    });

    return new NextResponse(
      JSON.stringify({ message: "Logged out successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": [userCookie, roleCookie], // Send both in an array
        },
      }
    );
  } catch (error) {
    console.error("Logout error:", error);
    return new NextResponse(
      JSON.stringify({ message: "An error occurred during logout." }),
      { status: 500 }
    );
  }
}
