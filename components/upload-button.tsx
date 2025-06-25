"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Image as ImageIcon, Upload, X } from "lucide-react"

export function UploadButton({
  onUploadComplete,
  className = "",
  children
}: {
  onUploadComplete: (url: string) => void
  className?: string
  children?: React.ReactNode
}) {
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    
    // Simulate upload (replace with your actual upload logic)
    const simulateUpload = () => {
      return new Promise<string>((resolve) => {
        let p = 0
        const interval = setInterval(() => {
          p += 10
          setProgress(p)
          if (p >= 100) {
            clearInterval(interval)
            setTimeout(() => {
              resolve(URL.createObjectURL(file))
            }, 300)
          }
        }, 100)
      })
    }

    const url = await simulateUpload()
    onUploadComplete(url)
    setIsUploading(false)
    setProgress(0)
  }

  return (
    <div className={className}>
      <label className="cursor-pointer w-full h-full flex flex-col items-center justify-center p-6">
        {isUploading ? (
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        ) : (
          <>
            {children || (
              <>
                <Upload className="w-10 h-10 text-gray-400 mb-2" />
                <span className="text-gray-500">Click to upload</span>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </>
        )}
      </label>
    </div>
  )
}