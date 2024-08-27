"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="outline" size="icon" onClick={() => {setTheme((theme === "dark" ? "light" : "dark"))}}>
        <div className="relative h-[1.2rem] w-[1.2rem]">
            {/* Moon Icon for Dark Mode */}
            <MoonIcon className="absolute h-full w-full transition-all transform dark:rotate-0 dark:scale-100 rotate-90 scale-0" />

            {/* Sun Icon for Light Mode */}
            <SunIcon className="absolute h-full w-full transition-all transform rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
        </div>
    </Button>
  )
}
