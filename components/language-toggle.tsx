"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Globe, Languages } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <TooltipProvider>
      <Tooltip>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-colors duration-200"
              >
                <Languages className="h-4 w-4" />
                <span className="font-medium">{language === "en" ? "English" : "Kiswahili"}</span>
              </Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <TooltipContent side="bottom">
            <p>{t("language.switch")}</p>
          </TooltipContent>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => setLanguage("en")}
              className="hover:bg-yellow-400 hover:text-black transition-colors duration-200 cursor-pointer"
            >
              <span className="font-medium">🇬🇧 {t("language.en")}</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setLanguage("sw")}
              className="hover:bg-yellow-400 hover:text-black transition-colors duration-200 cursor-pointer"
            >
              <span className="font-medium">🇹🇿 {t("language.sw")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Tooltip>
    </TooltipProvider>
  )
}
