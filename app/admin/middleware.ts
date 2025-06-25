import { NextResponse } from "next/server"
import { auth } from "@/lib/firebase"
import { getAuth } from "firebase/auth"

export async function middleware(request: Request) {
  const auth = getAuth()
  const user = auth.currentUser

  if (!user && !request.url.includes("/admin/login") && !request.url.includes("/admin/signup")) {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}