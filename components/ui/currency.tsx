"use client"
import { useEffect, useState } from "react"

const formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
})

type Props = {
  value?: string | number
}
export const Currency = ({ value }: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <div>{formatter.format(Number(value))}</div>
}
