"use client"

import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { BlogEditor } from "@/components/blog-editor"

export default function BlogPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handlePublish = async (data: {
    title: string
    content: string
    imageUrl?: string
  }) => {
    setLoading(true)
    try {
      await addDoc(collection(db, "blogPosts"), {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      setSuccess(true)
    } catch (error) {
      console.error("Error adding document: ", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
          Blog post published successfully!
        </div>
      )}
      <BlogEditor
        onPublish={handlePublish}
        loading={loading}
      />
    </div>
  )
}