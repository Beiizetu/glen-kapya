"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import enTranslations from "@/translations/en.json"
import swTranslations from "@/translations/sw.json"

type Language = "en" | "sw"
type Translations = typeof enTranslations

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("sw") // Default to Kiswahili
  const [translations, setTranslations] = useState<Translations>(swTranslations)

  useEffect(() => {
    setTranslations(language === "en" ? enTranslations : swTranslations)
  }, [language])

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return key // Return the key if translation not found
      }
    }

    return typeof value === "string" ? value : key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
