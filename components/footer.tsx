"use client"

import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import Script from "next/script"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ]

  const footerLinks = [
    { title: t("footer.links.about"), links: [
      { label: t("footer.links.bio"), href: "/about" },
      { label: t("footer.links.vision"), href: "/vision" },
      { label: t("footer.links.leadership"), href: "/about" },
    ]},
    { title: t("footer.links.sikonge"), links: [
      { label: t("footer.links.geography"), href: "/sikonge" },
      { label: t("footer.links.demographics"), href: "/sikonge" },
      { label: t("footer.links.economy"), href: "/sikonge" },
    ]},
    { title: t("footer.links.getInvolved"), links: [
      { label: t("footer.links.volunteer"), href: "/contact" },
      { label: t("footer.links.donate"), href: "/contact" },
      { label: t("footer.links.events"), href: "/blog" },
    ]},
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Glen Kapya</h3>
            <p className="text-gray-400 mb-4">{t("footer.mission")}</p>
            <div className="flex space-x-4">
              {socialLinks.map((SocialIcon, index) => (
                <Link 
                  key={index} 
                  href={SocialIcon.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <SocialIcon.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.newsletter")}</h4>
            <p className="text-gray-400 mb-4">{t("footer.newsletterDesc")}</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder={t("footer.emailPlaceholder")}
                className="px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
              />
              <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-r-lg font-medium hover:bg-yellow-500 transition-colors">
                {t("footer.subscribe")}
              </button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">{t("footer.copyright")}</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-yellow-400">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-yellow-400">
              {t("footer.terms")}
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-yellow-400">
              {t("footer.accessibility")}
            </Link>
          </div>
        </div>
      </div>
      <Script
        src="https://beta.leadconnectorhq.com/loader.js"
        data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="685c0435d5f82521bfe795ed"
        strategy="lazyOnload"
      />
    </footer>
  )
}