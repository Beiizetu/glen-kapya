"use client"

import { useEffect } from "react"

export default function GoogleTranslate() {
  useEffect(() => {
    // @ts-ignore
    window.googleTranslateElementInit = () => {
      // @ts-ignore
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,sw",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      )
    }
  }, [])

  return (
    <div className="flex items-center gap-2">
      <div id="google_translate_element"></div>
      <style jsx global>{`
        .goog-te-gadget {
          font-family: inherit !important;
        }
        .goog-te-gadget-simple {
          background-color: transparent !important;
          border: 1px solid #d1d5db !important;
          border-radius: 0.375rem !important;
          padding: 0.25rem 0.5rem !important;
          font-size: 0.875rem !important;
          line-height: 1.25rem !important;
        }
        .goog-te-menu-value span {
          color: #1f2937 !important;
        }
        .goog-te-menu-value img {
          display: none !important;
        }
        .goog-te-menu-value::before {
          content: "🌐";
          margin-right: 4px;
        }
        .goog-te-menu-value::after {
          content: "▼";
          margin-left: 4px;
          font-size: 0.75rem;
        }
      `}</style>
    </div>
  )
}