"use client"

import { useLanguage } from "@/context/language-context"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function TestimonialsSlider() {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: t("testimonials.person1.name"),
      role: t("testimonials.person1.role"),
      content: t("testimonials.person1.content"),
      avatar: "/images/avatar1.jpg",
    },
    {
      name: t("testimonials.person2.name"),
      role: t("testimonials.person2.role"),
      content: t("testimonials.person2.content"),
      avatar: "/images/avatar2.jpg",
    },
    {
      name: t("testimonials.person3.name"),
      role: t("testimonials.person3.role"),
      content: t("testimonials.person3.content"),
      avatar: "/images/avatar3.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <CardHeader className="bg-green-100 flex flex-row items-center">
          <Quote className="w-8 h-8 text-green-700 mr-2" />
          <h3 className="text-xl font-semibold text-green-800">
            {t("testimonials.title")}
          </h3>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Avatar className="w-24 h-24">
              <AvatarImage src={testimonials[currentSlide].avatar} />
              <AvatarFallback>
                {testimonials[currentSlide].name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-lg italic mb-6">
                "{testimonials[currentSlide].content}"
              </p>
              <div>
                <p className="font-semibold">{testimonials[currentSlide].name}</p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentSlide].role}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-green-700" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}