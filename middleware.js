import { NextResponse } from 'next/server'

export async function middleware(request) {
    const isAdmin = request.cookies.get("admin")
    const pathName = request.nextUrl.pathname

    if (pathName === "/admin/welcome" && isAdmin !== "true") {
        return NextResponse.redirect(new URL("/notauthorised", request.nextUrl))
    }

    return NextResponse.next()
}