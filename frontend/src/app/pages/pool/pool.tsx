"use-client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, DollarSign, Droplet } from "lucide-react"

export default function Pool() {
  return (
    <Card className="w-full max-w-4xl mx-auto bg-gray-950 text-gray-100">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold">All Pools</CardTitle>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white">
          <PlusCircle className="mr-2 h-4 w-4" /> Add liquidity
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-800">
              <TableHead className="text-gray-400">#</TableHead>
              <TableHead className="text-gray-400">Pool</TableHead>
              <TableHead className="text-gray-400">TVL</TableHead>
              <TableHead className="text-gray-400">Volatility</TableHead>
              <TableHead className="text-gray-400">Fee</TableHead>
              <TableHead className="text-gray-400">Last Update</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b border-gray-800">
              <TableCell className="font-medium">1</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-500 mr-1" />
                  <Droplet className="h-5 w-5 text-gray-500 mr-2" />
                  <span>USDC/ETH</span>
                  <span className="ml-2 px-2 py-1 bg-gray-800 text-xs rounded-full">Dynamic</span>
                </div>
              </TableCell>
              <TableCell>$225.37m</TableCell>
              <TableCell>0</TableCell>
              <TableCell>
                <span className="text-green-500">↑ 24%</span> 2.97%
              </TableCell>
              <TableCell>10/13/2024, 9:17:41 AM</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}