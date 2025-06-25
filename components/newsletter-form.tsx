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
import { useLanguage } from "@/context/language-context"
import { toast } from "@/components/ui/use-toast"
import { Mail } from "lucide-react"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  name: z.string().optional(),
})

export function NewsletterForm() {
  const { t } = useLanguage()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send the form data to your newsletter service
    console.log(values)
    
    toast({
      title: t("newsletter.successTitle"),
      description: t("newsletter.successMessage"),
    })
    
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("newsletter.nameLabel")}</FormLabel>
              <FormControl>
                <Input 
                  placeholder={t("newsletter.namePlaceholder")} 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                {t("newsletter.emailLabel")}
              </FormLabel>
              <FormControl>
                <Input 
                  placeholder={t("newsletter.emailPlaceholder")} 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
          {t("newsletter.subscribeButton")}
        </Button>
        
        <p className="text-sm text-gray-600">
          {t("newsletter.privacyNotice")}
        </p>
      </form>
    </Form>
  )
}