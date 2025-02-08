"use client"

import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function AnalyticsPage() {
  const [salesData, setSalesData] = useState([])
  const [totalRevenue, setTotalRevenue] = useState(0)
  const [totalProjects, setTotalProjects] = useState(0)
  const supabase = createClientComponentClient()

  useEffect(() => {
    fetchAnalytics()
  }, [])

  async function fetchAnalytics() {
    const { data: projects } = await supabase
      .from('projects')
      .select('*')

    // Calculate metrics
    const revenue = projects?.reduce((acc, project) => acc + project.price, 0) || 0
    setTotalRevenue(revenue)
    setTotalProjects(projects?.length || 0)

    // Prepare chart data
    const chartData = projects?.reduce((acc: any, project) => {
      const category = project.category
      const existing = acc.find((item: any) => item.category === category)
      if (existing) {
        existing.count += 1
        existing.revenue += project.price
      } else {
        acc.push({ category, count: 1, revenue: project.price })
      }
      return acc
    }, [])

    setSalesData(chartData)
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalProjects}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <CardHeader>
          <CardTitle>Revenue by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}