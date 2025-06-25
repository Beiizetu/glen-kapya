"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CampaignUpdates() {
  const { t } = useLanguage()

  const updates = [
    {
      id: 1,
      title: t("updates.update1.title"),
      date: t("updates.update1.date"),
      location: t("updates.update1.location"),
      description: t("updates.update1.description"),
      attendees: t("updates.update1.attendees"),
    },
    {
      id: 2,
      title: t("updates.update2.title"),
      date: t("updates.update2.date"),
      location: t("updates.update2.location"),
      description: t("updates.update2.description"),
      attendees: t("updates.update2.attendees"),
    },
    {
      id: 3,
      title: t("updates.update3.title"),
      date: t("updates.update3.date"),
      location: t("updates.update3.location"),
      description: t("updates.update3.description"),
      attendees: t("updates.update3.attendees"),
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {updates.map((update) => (
        <Card key={update.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="text-lg">{update.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              {update.date}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              {update.location}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-2" />
              {update.attendees}
            </div>
            <p className="text-gray-700">{update.description}</p>
            <Button variant="outline" className="w-full" asChild>
              <Link href={`/blog/${update.id}`}>
                {t("updates.readMore")}
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}