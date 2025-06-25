"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"

export function AdminSidebar() {
  const pathname = usePathname()

  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.error("Error signing out:", error)
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
              className={`block p-2 rounded ${pathname === '/admin/dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              href="/admin/blog" 
              className={`block p-2 rounded ${pathname === '/admin/blog' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            >
              Blog Posts
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