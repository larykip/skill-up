import { parse } from "cookie";
import { NextResponse } from "next/server";

export function middleware(request) {
    // Parse cookies from the request headers
    const cookies = request.headers.get("cookie") ? parse(request.headers.get("cookie")) : {};
    const userId = cookies.user;
    const role = cookies.role;

    const { pathname } = request.nextUrl;

    // If no role (user is not logged in), redirect to login page
    if (!role) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // Redirect users based on their role
    if (role === "admin" && pathname.startsWith("/user")) {
        return NextResponse.redirect(new URL("/admin", request.url)); // Admins should not access user pages
    }

    if (role === "user" && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/user", request.url)); // Users should not access admin pages
    }

    return NextResponse.next(); // Allow access if role matches the intended page
}

export const config = {
    matcher: ["/admin/:path*", "/user/:path*"], // Apply to key routes
};
