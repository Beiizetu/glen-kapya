"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { User, Phone, MapPin, Calendar, Briefcase } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { saveToFirestore } from "@/lib/firebase"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(6, {
    message: "Phone number must be at least 6 characters.",
  }),
  location: z.string().min(2, {
    message: "Please enter your location.",
  }),
  availability: z.string().min(1, {
    message: "Please select your availability.",
  }),
  skills: z.string().min(10, {
    message: "Please describe your skills/experience.",
  }),
})

export function VolunteerForm() {
  const { t } = useLanguage()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      location: "",
      availability: "",
      skills: "",
    },
  })

  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      await saveToFirestore("volunteers", values)
      toast({
        title: t("contact.submitSuccess"),
        description: "",
      })
      form.reset()
    } catch (error) {
      toast({
        title: t("contact.submitError"),
        description: "",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {t("contact.formName")}
              </FormLabel>
              <FormControl>
                <Input placeholder={t("contact.formNamePlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {t("contact.formPhone")}
              </FormLabel>
              <FormControl>
                <Input placeholder={t("contact.formPhonePlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {t("contact.volunteerLocation")}
              </FormLabel>
              <FormControl>
                <Input placeholder={t("contact.volunteerLocationPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="availability"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {t("contact.volunteerAvailability")}
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="text-black">
                    <SelectValue placeholder={t("contact.volunteerAvailabilityPlaceholder")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="text-black">
                  <SelectItem value="full-time">
                    {t("contact.volunteerFullTime")}
                  </SelectItem>
                  <SelectItem value="part-time">
                    {t("contact.volunteerPartTime")}
                  </SelectItem>
                  <SelectItem value="weekends">
                    {t("contact.volunteerWeekends")}
                  </SelectItem>
                  <SelectItem value="flexible">
                    {t("contact.volunteerFlexible")}
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                <Briefcase className="w-4 h-4 mr-2" />
                {t("contact.volunteerSkills")}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t("contact.volunteerSkillsPlaceholder")}
                  rows={4}
                  className="text-black dark:text-white bg-white dark:bg-gray-800"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? t("contact.submitting") : t("contact.volunteerSubmit")}
        </Button>
      </form>
    </Form>
  )
}