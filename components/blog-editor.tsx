"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { UploadButton } from "@/components/upload-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Image as ImageIcon, X } from "lucide-react"
import { format } from "date-fns"
import { Calendar as CalendarPicker } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export function BlogEditor({
  onPublish,
  loading
}: {
  onPublish: (data: {
    title: string
    excerpt: string
    content: string
    imageUrl: string
    category: string
    readTime: string
    publishDate: Date
  }) => Promise<void>
  loading: boolean
}) {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [category, setCategory] = useState("")
  const [readTime, setReadTime] = useState("5 min read")
  const [date, setDate] = useState<Date>(new Date())
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  const categories = [
    "Agriculture",
    "Education",
    "Healthcare",
    "Infrastructure",
    "Economy",
    "Youth"
  ]

  const handlePublish = async () => {
    if (!title || !content) return

    await onPublish({
      title,
      excerpt,
      content,
      imageUrl,
      category,
      readTime,
      publishDate: date
    })
    
    // Reset form after successful publish
    setTitle("")
    setExcerpt("")
    setContent("")
    setImageUrl("")
    setCategory("")
    setReadTime("5 min read")
    setDate(new Date())
  }

  const handleImageUpload = (url: string) => {
    setImageUrl(url)
  }

  const handleImageRemove = () => {
    setImageUrl("")
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create New Blog Post</h2>
      
      <div className="space-y-6">
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Blog Title
          </label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog post title"
            className="text-lg"
          />
        </div>

        {/* Excerpt Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short Excerpt
          </label>
          <Textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            placeholder="Enter a short excerpt (will appear on blog cards)"
            rows={3}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Featured Image
          </label>
          {imageUrl ? (
            <div className="relative group">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={imageUrl}
                  alt="Featured"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={handleImageRemove}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <UploadButton
              onUploadComplete={handleImageUpload}
              className="w-full aspect-video bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-green-500 transition-colors"
            >
              <ImageIcon className="w-10 h-10 text-gray-400 mb-2" />
              <span className="text-gray-500">Click to upload featured image</span>
              <span className="text-xs text-gray-400 mt-1">Recommended: 1200x630px</span>
            </UploadButton>
          )}
        </div>

        {/* Category Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-3 py-1 rounded-full text-sm border",
                  category === cat
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Read Time and Publish Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reading Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Clock className="w-5 h-5 text-gray-400" />
              </div>
              <Input
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="5 min read"
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Publish Date
            </label>
            <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4 text-green-500" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarPicker
                  mode="single"
                  selected={date}
                  onSelect={(selectedDate) => {
                    if (selectedDate) {
                      setDate(selectedDate)
                      setIsCalendarOpen(false)
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Content Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Blog Content
          </label>
          <div
            ref={contentRef}
            contentEditable
            onInput={(e) => setContent(e.currentTarget.innerHTML)}
            className="min-h-[300px] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent prose max-w-none"
            placeholder="Write your blog post content here..."
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-4 border-t">
          <Button
            variant="outline"
            onClick={() => router.push("/admin/blog")}
          >
            Cancel
          </Button>
          <Button
            onClick={handlePublish}
            disabled={loading || !title || !content}
            className="bg-green-600 hover:bg-green-700"
          >
            {loading ? "Publishing..." : "Publish Blog Post"}
          </Button>
        </div>
      </div>
    </div>
  )
}