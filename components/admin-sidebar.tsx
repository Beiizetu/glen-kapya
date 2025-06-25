"use client"

import Link from "next/link"
import { MessageSquare, Users, Mail, LayoutDashboard, Rss } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"

export function AdminSidebar() {
  const pathname = usePathname()

  const handleLogout = async () => {
    try {
      console.log("Attempting logout...")
      await signOut(auth)
      console.log("Logout successful")
      // Redirect to login page after logout
      window.location.href = "/"
    } catch (error) {
      console.error("Error signing out:", error)
      alert("Failed to logout. Please try again.")
    }
  }

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              href="/admin/dashboard"
              className={`flex items-center p-2 rounded ${pathname === '/admin/dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            >
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/blog"
              className={`flex items-center p-2 rounded ${pathname === '/admin/blog' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            >
              <Rss className="w-4 h-4 mr-2" />
              Blog Posts
            </Link>
          </li>
          <li>
            <Link
              href="/admin/contact-submissions"
              className={`flex items-center p-2 rounded ${pathname === '/admin/contact-submissions' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Contact Submissions
            </Link>
          </li>
          <li>
            <Link
              href="/admin/volunteers"
              className={`flex items-center p-2 rounded ${pathname === '/admin/volunteers' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            >
              <Users className="w-4 h-4 mr-2" />
              Volunteers
            </Link>
          </li>
          <li>
            <Link
              href="/admin/newsletters"
              className={`flex items-center p-2 rounded ${pathname === '/admin/newsletters' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            >
              <Mail className="w-4 h-4 mr-2" />
              Newsletter Subscribers
            </Link>
          </li>
        </ul>
      </nav>
      <Button 
        variant="destructive" 
        onClick={handleLogout}
        className="mt-auto"
      >
        Logout
      </Button>
    </div>
  )
}