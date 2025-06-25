"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="text-gray-700 hover:bg-yellow-400 hover:text-black"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 right-4 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md border dark:border-gray-700 z-50 animate-in fade-in-80">
          <div className="flex flex-col p-2 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm rounded transition-colors ${
                  pathname === link.href
                    ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                    : "hover:bg-yellow-400 hover:text-black dark:hover:bg-yellow-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}