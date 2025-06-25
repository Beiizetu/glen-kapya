"use client"

import { useState, useEffect } from "react"
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore"
import db from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Eye } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  imageUrl: string
  category: string
  readTime: string
  publishDate: { seconds: number }
}

export function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const q = query(collection(db, "blogPosts"), orderBy("publishDate", "desc"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const postsData: BlogPost[] = []
      querySnapshot.forEach((doc) => {
        postsData.push({ id: doc.id, ...doc.data() } as BlogPost)
      })
      setPosts(postsData)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        await deleteDoc(doc(db, "blogPosts", id))
      } catch (error) {
        console.error("Error deleting document: ", error)
      }
    }
  }

  const formatDate = (timestamp: { seconds: number }) => {
    return new Date(timestamp.seconds * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {loading ? (
        <div className="p-8 text-center">Loading blog posts...</div>
      ) : posts.length === 0 ? (
        <div className="p-8 text-center">No blog posts found</div>
      ) : (
        <div className="divide-y divide-gray-200">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 font-medium text-gray-500">
            <div className="col-span-5">Title</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-3 text-right">Actions</div>
          </div>
          {posts.map((post) => (
            <div key={post.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50">
              <div className="col-span-5 font-medium text-gray-900">
                <div className="flex items-center space-x-3">
                  {post.imageUrl && (
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-10 h-10 rounded object-cover"
                    />
                  )}
                  <span>{post.title}</span>
                </div>
              </div>
              <div className="col-span-2">
                <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                  {post.category}
                </span>
              </div>
              <div className="col-span-2 text-sm text-gray-500">
                {post.publishDate && formatDate(post.publishDate)}
              </div>
              <div className="col-span-3 flex justify-end space-x-2">
                <Link href={`/blog/${post.id}`} target="_blank">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </Link>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(post.id)}
                  className="text-red-500 border-red-200 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}