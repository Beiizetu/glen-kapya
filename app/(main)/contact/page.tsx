"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { VolunteerForm } from "@/components/volunteer-form"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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
              {t("contact.title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {t("contact.contactInfo")}
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-700 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{t("contact.addressTitle")}</h3>
                      <p className="text-gray-700">Usupilo, Misheni</p>
                      <p className="text-gray-700">Sikonge, Tabora</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-green-700 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{t("contact.phoneTitle")}</h3>
                      <p className="text-gray-700">+255 123 456 789</p>
                      <p className="text-gray-700">+255 987 654 321</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-green-700 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{t("contact.emailTitle")}</h3>
                      <p className="text-gray-700">info@glenkapya.com</p>
                      <p className="text-gray-700">campaign@glenkapya.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-green-700 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{t("contact.hoursTitle")}</h3>
                      <p className="text-gray-700">{t("contact.hoursWeekdays")}</p>
                      <p className="text-gray-700">{t("contact.hoursWeekends")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  {t("contact.campaignOffices")}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span>
                      <strong>Sikonge Town Office:</strong> Jengo la Umoja, Barabara ya Mkuu
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span>
                      <strong>Tabora Regional Office:</strong> Sokoine Road, Near Bunge la Mkoa
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span>
                      <strong>Dar es Salaam Liaison Office:</strong> Ubungo Plaza, 3rd Floor
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="sticky top-4 space-y-8">
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    {t("contact.sendMessage")}
                  </h2>
                  <ContactForm />
                </div>

                <div className="bg-green-700 text-white rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    {t("contact.volunteerTitle")}
                  </h2>
                  <p className="mb-6 text-green-100">
                    {t("contact.volunteerDescription")}
                  </p>
                  <VolunteerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}