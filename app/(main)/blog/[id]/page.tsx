"use client"

import { format } from "date-fns"
import { useEffect, useState } from "react"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, MessageSquare, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/context/language-context"
import { useParams } from "next/navigation"

interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  imageUrl: string
  category: string
  readTime: string
  author: string
  publishDate: { seconds: number }
}

export default function BlogPostDetail() {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const { t } = useLanguage()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // TODO: Replace with actual API call
        const mockPosts = [
          {
            id: "1",
            title: "Agricultural Policy Launch in Sikonge",
            content: "<p>Detailed content about agricultural policy...</p>",
            excerpt: "Glen Kapya unveils comprehensive plan...",
            imageUrl: "/images/blog-agriculture.jpg",
            category: "Agriculture",
            readTime: "5 min read",
            author: "Campaign Team",
            publishDate: { seconds: 1686844800 }
          }
        ]
        const foundPost = mockPosts.find(p => p.id === id)
        if (foundPost) {
          setPost(foundPost)
        }
        setLoading(false)
      } catch (error) {
        console.error("Error fetching post:", error)
        setLoading(false)
      }
    }

    fetchPost()
  }, [id])
  if (loading) {
    return <div className="max-w-4xl mx-auto px-4 py-12">Loading...</div>
  }

  if (!post) {
    return <div className="max-w-4xl mx-auto px-4 py-12">Post not found</div>
  }

  const formatDate = (timestamp: { seconds: number }) => {
    return format(new Date(timestamp.seconds * 1000), "MMMM d, yyyy")
  }

  const shareOnSocial = (platform: string) => {
    const url = window.location.href
    const title = post.title
    const text = post.excerpt

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(text)}`, '_blank')
        break
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/blog" className="text-green-600 hover:text-green-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>

      <article className="bg-white rounded-xl shadow-md overflow-hidden">
        {/* Featured Image */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </div>
        </div>

        {/* Post Content */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2 text-green-500" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-green-500" />
              {formatDate(post.publishDate)}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-green-500" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            {post.excerpt}
          </p>

          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags (if you want to add them later) */}
          {/* <div className="mt-8 flex flex-wrap gap-2">
            {['Agriculture', 'Development', 'Policy'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div> */}

          {/* Share Buttons */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Share this post</h3>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareOnSocial('facebook')}
                className="flex items-center"
              >
                <Facebook className="w-4 h-4 mr-2 text-blue-600" />
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareOnSocial('twitter')}
                className="flex items-center"
              >
                <Twitter className="w-4 h-4 mr-2 text-blue-400" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareOnSocial('linkedin')}
                className="flex items-center"
              >
                <Linkedin className="w-4 h-4 mr-2 text-blue-700" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Comments Section (optional) */}
           <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              <MessageSquare className="w-5 h-5 inline mr-2 text-green-500" />
              Comments
            </h3>
            <div className="space-y-6">
              {[1, 2].map(i => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
                    <span className="font-medium">Commenter Name</span>
                  </div>
                  <p className="text-gray-700">
                    This is a sample comment about how great this blog post is and how it helped the reader.
                  </p>
                  <div className="text-sm text-gray-500 mt-2">2 days ago</div>
                </div>
              ))}
              <div className="mt-6">
                <Textarea
                  placeholder="Add your comment..."
                  className="mb-2"
                />
                <Button className="bg-green-600 hover:bg-green-700">
                  Post Comment
                </Button>
              </div>
            </div>
          </div> 
        </div>
      </article>

      {/* Related Posts (optional) */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs mb-2">
                  Category
                </span>
                <h3 className="font-bold text-lg mb-2">Blog Post Title</h3>
                <p className="text-gray-600 text-sm mb-4">Short excerpt from the blog post content...</p>
                <Button variant="link" className="text-green-600 p-0">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div> 
    </div>
  )
}