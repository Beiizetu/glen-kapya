"use client"

import React from "react"
import { useLanguage } from "@/context/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, Briefcase, Award, Users, School, Home } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("about.title")}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("about.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Portrait Section */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/glen-kapya-portrait.jpg"
                  alt="Glen Kapya - Portrait"
                  width={300}
                  height={400}
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold">Glen Kapya</p>
                  <p className="text-xs">MP Candidate</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-2 grid md:grid-cols-1 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Home className="w-5 h-5 mr-2 text-green-700" />
                    {t("about.personalBackground")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p>
                      <strong>{t("about.born")}:</strong> Dar es Salaam, April 12th, 1987
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>{t("about.education")}:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                      <li>{t("about.primary")}: Ubungo NHC, Karume, St. Mary's</li>
                      <li>{t("about.secondary")}: Loyola High School, Makongo High School</li>
                      <li>{t("about.university")}: USIU-Africa, Nairobi - BSc International Business</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm">{t("about.familyDetails")}</p>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-700">
                      {t("about.keyFacts")}:
                    </p>
                    <p className="text-sm mt-1 text-gray-700">
                      {t("about.keyFactsDescription")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-700" />
                    My Family
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-700">
                      Glen Sylvester Joseph Kapya, was born at the Muhimbili National Hospital on April 12th, 1987, in Dar es
                      Salaam, Tanzania. Glen is a composed Natural Leader who is passionate and zealous about the
                      sustainable development of his Country and Africa at large. Of Nyamwezi descent, Glen is a Son of Mr.
                      Sylvester Joseph Kapya (a Retired Senior Civil Servant, President's Office) and Mrs. Beatrice Kijangwa
                      Kapya (an Accountant by Profession and a Seasoned Project Management Expert in Private
                      Organizations and in Government Institutions).
                    </p>
                    <Button
                      variant="link"
                      className="text-green-700 p-0 h-auto"
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </Button>
                    {isExpanded && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-700">
                          Glen went to Ubungo NHC, Karume and St. Mary's International Primary Schools. Glen continued with Secondary Education at Loyola High School (Ordinary Level) and Makongo High School (Advanced Level). He graduated with a Bachelor of Science in International Business Administration from United States International University-Africa, Nairobi, Kenya. Glen co-founded a Company called DARLET GROUP LIMITED with his siblings in 2009. After graduating from University in 2014, he returned to Tanzania and was promoted to become Head of Business Development at DARLET GROUP LIMITED where through his leadership the Company grew in size and numbers; he managed to originate, negotiate and complete Local and International partnerships, increased, innovated and sustained the Products and Services portfolio as well as harmonizing and sustaining Company's general management. Leadership follows Glen wherever he goes or is; he has been a Leader since his Primary School days up to date. Most notably, while at Loyola Secondary School; together with others, Glen pioneered the formation of United Nations Clubs Tanzania Network (UNCTN) and became its National Secretary General under Youth of United Nations Association whose work is to further UN Agenda(s) across the Country as well as furnishing Youth with Soft Skills which enables them to become more competent and conversant with issues at the Global stage as well as becoming advocates of furthering our National agenda(s) and transformation. Also, notably among various other initiatives; while pursuing his Bachelor's Degree in Kenya, because of his grit and sheer commitment the Tanzania High Commission Office in Kenya asked Glen to mobilize and form an Association of Tanzanian University Students in Kenya. Therefore, in late 2013 Glen together with other Tanzanian Students; pioneered the formation of Tanzanian Students Association in Kenya where he became its' first Chairperson. The leadership spirit and being of service to the people of Sikonge is ingrained in Glen throughout generations starting with his Paternal Grandfather the late Mzee. Joseph Nsanya Kapya; Mzee. Kapya worked for German Missionaries in Ipole, Sikonge before training and becoming a teacher and founded Kipanga Primary School in 1928. Mzee. Kapya was a respected Teacher and Elder in Sikonge, he taught many and was devoted in helping the Community at large vis-à-vis spearheading cohesion in the Society at large. Glen is a dedicated Christian, he also is an avid reader, researcher and internet enthusiast; for leisure he likes playing Soccer, Basketball, participating in Marathons, Hunting and Mountain hiking.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-green-700" />
                    {t("professional.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p>
                      <strong>{t("professional.current")}:</strong> Head of Business Development - DARLET GROUP LIMITED
                    </p>
                    <p className="mt-2 text-gray-700">{t("professional.currentDesc")}</p>
                  </div>
                  <Separator className="my-4" />
                  <div className="text-sm">
                    <p>
                      <strong>{t("professional.previous")}:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>
                        <strong>Marketing Executive - DARLET GROUP</strong>
                        <p className="text-gray-700">{t("professional.darletDesc")}</p>
                      </li>
                      <li>
                        <strong>Lead Generator - Barclays Bank Tanzania</strong>
                        <p className="text-gray-700">{t("professional.barclaysDesc")}</p>
                      </li>
                      <li>
                        <strong>Research Officer - Community Development Services</strong>
                        <p className="text-gray-700">{t("professional.cdsDesc")}</p>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-700" />
                    {t("leadership.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { role: t("Leadership Role 1"), org: "USIU-Africa Alumni Tanzania", period: "2019-present" },
                      { role: t("Leadership Role 2"), org: "TASAKE", period: "2013-2014" },
                      { role: t("Leadership Role 3"), org: "CCM National Campaigns", period: "2015" },
                    ].map((item, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:bg-green-50 transition-colors">
                        <h3 className="font-semibold text-green-700">{item.role}</h3>
                        <p className="text-sm text-gray-600">{item.org}</p>
                        <Badge variant="outline" className="mt-2">{item.period}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-green-700" />
                    {t("awards.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        year: "2014",
                        award: t("awards.award1"),
                        org: "Tanzania High Commission, Kenya",
                        desc: t("awards.award1Desc")
                      },
                      {
                        year: "2014",
                        award: t("awards.award2"),
                        org: "Tanzania Students Association in Kenya",
                        desc: t("awards.award2Desc")
                      },
                      {
                        year: "2009",
                        award: t("awards.award3"),
                        org: "British Council, Cape Town",
                        desc: t("awards.award3Desc")
                      },
                    ].map((item, index) => (
                      <div key={index} className="border-l-4 border-green-600 pl-4 py-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{item.award}</h3>
                            <p className="text-sm text-gray-600">{item.org}</p>
                          </div>
                          <Badge variant="outline">{item.year}</Badge>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}