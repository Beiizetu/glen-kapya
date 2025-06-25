"use client"

import { useLanguage } from "@/context/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Briefcase, Heart, ArrowLeft, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { useState, useEffect } from "react"

declare global {
  interface Window {
    _wq?: {
      push: (config: { id: string; onReady?: () => void }) => void
    }
  }
}

export default function VisionPage() {
  const { t } = useLanguage()
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [wistiaScriptLoaded, setWistiaScriptLoaded] = useState(false)

  useEffect(() => {
    // Initialize Wistia player when both the script is loaded and component is mounted
    if (wistiaScriptLoaded && window._wq) {
      window._wq = window._wq || []
      window._wq.push({
        id: 'oar3ty3ehk',
        onReady: (video: any) => {
          setVideoLoaded(true)
          // Optional: You can access the video object here if needed
          console.log('Video ready', video)
        }
      })
    }
  }, [wistiaScriptLoaded])

  const visionPillars = [
    {
      icon: Target,
      title: t("vision.pillar1.title"),
      description: t("vision.pillar1.description"),
      color: "bg-green-100 text-green-700",
    },
    {
      icon: Users,
      title: t("vision.pillar2.title"),
      description: t("vision.pillar2.description"),
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: Briefcase,
      title: t("vision.pillar3.title"),
      description: t("vision.pillar3.description"),
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: Heart,
      title: t("vision.pillar4.title"),
      description: t("vision.pillar4.description"),
      color: "bg-red-100 text-red-700",
    },
  ]

  const policyAreas = [
    {
      title: t("vision.policy1.title"),
      points: [
        t("vision.policy1.point1"),
        t("vision.policy1.point2"),
        t("vision.policy1.point3"),
      ],
    },
    {
      title: t("vision.policy2.title"),
      points: [
        t("vision.policy2.point1"),
        t("vision.policy2.point2"),
        t("vision.policy2.point3"),
      ],
    },
    {
      title: t("vision.policy3.title"),
      points: [
        t("vision.policy3.point1"),
        t("vision.policy3.point2"),
        t("vision.policy3.point3"),
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Wistia Script - Load only once */}
      <Script
        src="https://fast.wistia.net/assets/external/E-v1.js"
        strategy="afterInteractive"
        onLoad={() => setWistiaScriptLoaded(true)}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("general.backToHome")}
              </Link>
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("vision.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("vision.subtitle")}
            </p>
          </div>

          {/* Vision Statement with Video */}
          <div className="bg-green-700 text-white rounded-xl p-8 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-green-600 opacity-90"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {t("vision.statementTitle")}
              </h2>
              <p className="text-lg md:text-xl mb-6 text-green-100">
                {t("vision.statement")}
              </p>
              <div className="flex justify-center">
                <div 
                  className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
                  style={{
                    position: 'relative',
                    paddingBottom: '40%', // 16:9 aspect ratio
                    height: 0
                  }}
                >
                  {!videoLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                      <Loader2 className="w-8 h-8 animate-spin text-green-500" />
                      <span className="sr-only">Loading video...</span>
                    </div>
                  )}
                  <div 
                    className={`wistia_embed absolute inset-0 ${videoLoaded ? 'block' : 'hidden'}`}
                  >
                    <iframe
                      src={`https://fast.wistia.net/embed/iframe/oar3ty3ehk?videoFoam=true${videoLoaded ? '&autoPlay=true' : ''}`}
                      title="Vision Statement Video"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      frameBorder="0"
                      scrolling="no"
                      className="wistia_embed"
                      name="wistia_embed"
                      width="100%"
                      height="100%"
                      onLoad={() => setVideoLoaded(true)}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Pillars */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              {t("vision.pillarsTitle")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {visionPillars.map((pillar, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`${pillar.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                      <pillar.icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Policy Areas */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              {t("vision.policyAreasTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {policyAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {area.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start">
                          <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {t("vision.ctaTitle")}
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              {t("vision.ctaDescription")}
            </p>
            <Button className="bg-green-700 hover:bg-green-800" asChild>
              <Link href="/contact">
                {t("vision.ctaButton")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function Check({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}