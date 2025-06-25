"use client"

import { AdminSidebar } from "@/components/admin-sidebar"

export default function AdminBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-auto p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Blog Management</h1>
          {children}
        </div>
      </main>
    </div>
  )
}