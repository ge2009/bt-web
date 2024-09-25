"use client"

import { useState } from "react"
import { Settings, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function ModernUi() {
  const [isOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState("")

  const handleButtonClick = () => {
    if (url) {
      window.open(url, "_blank")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="relative">
        <button
          onClick={handleButtonClick}
          className="relative flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-transparent border-4 border-white rounded-full overflow-hidden transition-all duration-500 hover:text-black group"
        >
          <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-3">
            点我跳转
          </span>
          <ArrowRight className="relative z-10 w-6 h-6 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
          <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></span>
        </button>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute -top-3 -right-3 rounded-full bg-white text-black hover:bg-gray-200"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Set Destination URL</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                id="url"
                placeholder="Enter URL here"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}