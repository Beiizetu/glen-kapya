"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Calendar, Users, Briefcase, Award, Target, Heart, Vote, ArrowRight, Check } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import Image from "next/image"
import Link from "next/link"
import TestimonialsSlider from "@/components/testimonials-slider"
import CampaignUpdates from "@/components/campaign-updates"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("hero.title")}</h1>
              <p className="text-xl md:text-2xl mb-4 text-green-100">{t("hero.subtitle")}</p>
              <p className="text-lg md:text-xl mb-8 text-green-100">{t("hero.description")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-white text-green-700 hover:bg-yellow-400 hover:text-black transition-colors duration-200"
                  asChild
                >
                  <Link href="/vision">
                    <Heart className="w-5 h-5 mr-2" />
                    {t("hero.learnVision")}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-colors duration-200"
                  asChild
                >
                  <Link href="/contact">
                    <Users className="w-5 h-5 mr-2" />
                    {t("hero.getInvolved")}
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-3xl opacity-20 scale-110"></div>
                <Image
                  src="/images/glen-kapya-campaign.jpg"
                  alt="Glen Kapya - Campaign Portrait"
                  width={400}
                  height={500}
                  className="relative rounded-2xl shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4 rounded-lg hover:bg-green-50 transition-colors">
              <div className="text-3xl font-bold text-green-700">15+</div>
              <div className="text-gray-600">{t("stats.yearsLeadership")}</div>
            </div>
            <div className="p-4 rounded-lg hover:bg-green-50 transition-colors">
              <div className="text-3xl font-bold text-green-700">10+</div>
              <div className="text-gray-600">{t("stats.awardsHonors")}</div>
            </div>
            <div className="p-4 rounded-lg hover:bg-green-50 transition-colors">
              <div className="text-3xl font-bold text-green-700">340K+</div>
              <div className="text-gray-600">{t("stats.sikongePopulation")}</div>
            </div>
            <div className="p-4 rounded-lg hover:bg-green-50 transition-colors">
              <div className="text-3xl font-bold text-green-700">100%</div>
              <div className="text-gray-600">{t("stats.commitment")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("about.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("about.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-700" />
                  {t("about.personalBackground")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{t("about.personalSummary")}</p>
                <Button variant="link" className="text-green-700 p-0" asChild>
                  <Link href="/about">
                    {t("about.readMore")} <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-green-700" />
                  {t("professional.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{t("professional.summary")}</p>
                <Button variant="link" className="text-green-700 p-0" asChild>
                  <Link href="/about">
                    {t("professional.readMore")} <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
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
                <p className="text-gray-700 mb-4">{t("awards.summary")}</p>
                <Button variant="link" className="text-green-700 p-0" asChild>
                  <Link href="/about">
                    {t("awards.readMore")} <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Preview */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("vision.title")}</h2>
              <p className="text-xl mb-8 text-green-100">{t("vision.subtitle")}</p>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-colors duration-200"
                asChild
              >
                <Link href="/vision">
                  Learn About Our Vision <ArrowRight className="w-4 h-4 ml-2 text-black" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-600 p-6 rounded-lg">
                <Target className="w-8 h-8 mb-4 text-yellow-400" />
                <h3 className="font-bold mb-2">{t("vision.representation")}</h3>
              </div>
              <div className="bg-green-600 p-6 rounded-lg">
                <Users className="w-8 h-8 mb-4 text-yellow-400" />
                <h3 className="font-bold mb-2">{t("vision.oversight")}</h3>
              </div>
              <div className="bg-green-600 p-6 rounded-lg">
                <Briefcase className="w-8 h-8 mb-4 text-yellow-400" />
                <h3 className="font-bold mb-2">{t("vision.legislation")}</h3>
              </div>
              <div className="bg-green-600 p-6 rounded-lg">
                <Heart className="w-8 h-8 mb-4 text-yellow-400" />
                <h3 className="font-bold mb-2">{t("vision.community")}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sikonge Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("sikonge.title")}</h2>
            <p className="text-xl text-gray-600">{t("sikonge.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative rounded-xl overflow-hidden h-64 md:h-80">
              <Image
                src="/images/sikonge.jpg"
                alt="Sikonge Landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Sikonge District</h3>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("sikonge.keyFacts")}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span>Tabora Region of Tanzania</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                    <Users className="w-4 h-4" />
                  </span>
                  <span>335,686</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                    <Briefcase className="w-4 h-4" />
                  </span>
                  <span>{t("sikonge.economy")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full p-1 mr-3">
                    <Target className="w-4 h-4" />
                  </span>
                  <span>{t("sikonge.potential")}</span>
                </li>
              </ul>
              <Button className="mt-6" asChild>
                <Link href="/sikonge">
                  Learn More About Sikonge <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("updates.title")}</h2>
            <p className="text-xl text-gray-600">{t("updates.subtitle")}</p>
          </div>
          <CampaignUpdates />
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/blog">
                View All Updates <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("newsletter.title")}</h2>
              <p className="text-xl text-green-100 mb-6">{t("newsletter.subtitle")}</p>
              <ul className="space-y-3 text-green-100">
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full p-1 mr-3">
                    <Check className="w-4 h-4" />
                  </span>
                  <span>{t("newsletter.benefit1")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full p-1 mr-3">
                    <Check className="w-4 h-4" />
                  </span>
                  <span>{t("newsletter.benefit2")}</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-600 text-white rounded-full p-1 mr-3">
                    <Check className="w-4 h-4" />
                  </span>
                  <span>{t("newsletter.benefit3")}</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}