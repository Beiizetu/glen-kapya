"use client"

import { useLanguage } from '@/context/language-context'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BlogPage() {
  const { t } = useLanguage()

  const blogPosts = [
    {
      id: 1,
      title: "Agricultural Policy Launch in Sikonge",
      excerpt: "Glen Kapya unveils comprehensive plan to transform Sikonge's agricultural sector with focus on smallholder farmers.",
      date: "June 15, 2023",
      readTime: "5 min read",
      author: "Campaign Team",
      category: "Agriculture",
      image: "/images/blog-agriculture.jpg"
    },
    {
      id: 2,
      title: "Education Roundtable with Teachers",
      excerpt: "Campaign holds productive discussion with educators about challenges and solutions for Sikonge schools.",
      date: "June 8, 2023",
      readTime: "4 min read",
      author: "Education Desk",
      category: "Education",
      image: "/images/blog-education.jpg"
    },
    {
      id: 3,
      title: "Healthcare Initiative Announced",
      excerpt: "New plan to improve maternal health services and reduce child mortality in Sikonge.",
      date: "May 25, 2023",
      readTime: "3 min read",
      author: "Health Team",
      category: "Healthcare",
      image: "/images/blog-healthcare.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Campaign Updates
          </h1>
          <p className="text-xl text-gray-600">
            Latest news and insights from Glen Kapya's campaign trail
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-green-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-green-500" />
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1 text-green-500" />
                    {post.author}
                  </span>
                  
                  <Button
                    variant="link"
                    className="text-green-500 hover:text-green-600 p-0"
                    asChild
                  >
                    <Link href={`/blog/${post.id}`}>
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </div>
  )
}