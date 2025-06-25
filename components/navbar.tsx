"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Calendar, Users, Briefcase, Award, Target, Heart, Vote } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileMenu from "@/components/mobile-menu"
import GoogleTranslate from "./google-translate"

export default function Navbar() {
  const { t } = useLanguage()
  const pathname = usePathname()

  const navLinks = [
    { href: "/about", label: t("navigation.about"), icon: null },
    { href: "/vision", label: t("navigation.vision"), icon: null },
    { href: "/sikonge", label: t("navigation.sikonge"), icon: null },
    { href: "/blog", label: t("navigation.blog"), icon: null },
    { href: "/contact", label: t("navigation.contact"), icon: null },
  ]

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-green-800 hover:text-green-700">
              Glen Kapya
            </Link>
            <Badge variant="secondary" className="ml-2">
              MP Candidate
            </Badge>
          </div>
          
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded transition-colors duration-200 ${
                  pathname === link.href
                    ? "bg-green-100 text-green-800 font-medium"
                    : "text-gray-700 hover:bg-yellow-400 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button
              className="bg-green-700 hover:bg-yellow-400 hover:text-black transition-colors duration-200"
              asChild
            >
              <Link href="/contact">
                <Vote className="w-4 h-4 mr-2" />
                {t("navigation.supportGlen")}
              </Link>
            </Button>
            <div className="md:hidden">
              <MobileMenu links={navLinks} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}