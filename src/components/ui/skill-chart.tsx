"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export default function SkillChart({ 
  title, 
  children,
  percentage,
  color
}: { 
  title: string, 
  children: React.ReactNode,
  percentage: number,
  color: string
}) {

  const chartConfig = {
    portential: {
      label: "Room for growth",
      color: "hsl(var(--chart-1))",
    },
    growth: {
      label: title,
      color: "hsl(var(--chart-2))",
    }
  } satisfies ChartConfig

  const chartData = [
    { skill: "growth", percentage, fill: color },
    { skill: "portential", percentage: 100-percentage, fill: "rgba(0,0,0,0.5)" },
  ]

  return (
    <>

      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="percentage"
            nameKey="skill"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-white text-3xl font-bold"
                      >
                        {percentage}%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-white text-white"
                      >
                        Percentage
                      </tspan>
                    </text>
                  )
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>

      {children}
    </>
  )
}
