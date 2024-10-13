"use-client"

import { Moon, Sun, Menu } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { useTheme } from "next-themes"
  import { Button } from "@/components/ui/button"


  export default function Header() {
    const { setTheme } = useTheme()
return(
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
          <li>
            <a href="/cryptoSwap" className="hover:text-primary transition-colors">
              Swap
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              Pools
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="flex items-center space-x-4">
      <Button variant="outline" size="icon">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Button>
      <Button>Connect Wallet</Button>
      <Button variant="outline" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
      </Button>
    </div>
  </header>
)
  }