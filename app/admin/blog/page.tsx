"use client"

import { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { BlogEditor } from "@/components/blog-editor"
import { BlogList } from "@/components/blog-list"

export default function BlogAdminPage() {
  const [activeTab, setActiveTab] = useState<"create" | "manage">("create")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handlePublish = async (data: {
    title: string
    excerpt: string
    content: string
    imageUrl: string
    category: string
    readTime: string
    publishDate: Date
  }) => {
    setLoading(true)
    try {
      await addDoc(collection(db, "blogPosts"), {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        published: true
      })
      setSuccess(true)
      setTimeout(() => setSuccess(false), 3000)
    } catch (error) {
      console.error("Error adding document: ", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("create")}
            className={`px-4 py-2 rounded-lg font-medium ${activeTab === "create" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            Create New
          </button>
          <button
            onClick={() => setActiveTab("manage")}
            className={`px-4 py-2 rounded-lg font-medium ${activeTab === "manage" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            Manage Posts
          </button>
        </div>
      </div>

      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
          Blog post published successfully!
        </div>
      )}

      {activeTab === "create" ? (
        <BlogEditor
          onPublish={handlePublish}
          loading={loading}
        />
      ) : (
        <BlogList />
      )}
    </div>
  )
}