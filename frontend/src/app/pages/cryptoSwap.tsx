"use client"

import * as React from "react"
import {  ArrowUpDown } from "lucide-react"
// import { useTheme } from "next-themes"
import Header from "@/components/Header"

import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CryptoSwap() {
  // const { setTheme } = useTheme()
  const [payAmount, setPayAmount] = React.useState("")
  const [receiveAmount, setReceiveAmount] = React.useState("")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header/>
      <main className="container mx-auto px-4 py-12 flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Swap</CardTitle>
            <CardDescription>Exchange your crypto assets instantly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="pay-amount">You pay</Label>
              <div className="flex space-x-2">
                <Input
                  id="pay-amount"
                  placeholder="0"
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                />
                <Select>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="ETH" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eth">ETH</SelectItem>
                    <SelectItem value="btc">BTC</SelectItem>
                    <SelectItem value="usdt">USDT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-sm text-muted-foreground">Balance: 3.14159 ETH</p>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" size="icon" className="rounded-full">
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Label htmlFor="receive-amount">You receive</Label>
              <div className="flex space-x-2">
                <Input
                  id="receive-amount"
                  placeholder="0"
                  value={receiveAmount}
                  onChange={(e) => setReceiveAmount(e.target.value)}
                />
                <Select>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="USDC" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usdc">USDC</SelectItem>
                    <SelectItem value="dai">DAI</SelectItem>
                    <SelectItem value="usdt">USDT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <p className="text-sm text-muted-foreground">Balance: 1000.00 USDC</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Swap</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}