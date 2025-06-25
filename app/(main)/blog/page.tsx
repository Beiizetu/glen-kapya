"use client"

import { useLanguage } from '@/context/language-context'

export default function BlogPage() {
  const { t } = useLanguage()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("blog.title")}</h1>
      <p className="text-lg">
        {t("blog.comingSoon")}
      </p>
    </main>
  )
}