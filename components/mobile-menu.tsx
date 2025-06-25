"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MobileMenuProps {
  links: Array<{
    href: string
    label: string
    icon: React.ReactNode | null
  }>
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm ${
                  pathname === link.href
                    ? "bg-green-100 text-green-800 font-medium dark:bg-green-900 dark:text-green-200"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
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