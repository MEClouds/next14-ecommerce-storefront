"use client"
import { ShoppingBag } from "lucide-react"
import Button from "./ui/button"
import { useEffect, useState } from "react"

type Props = {}
export const NavAction = ({}: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="ms-auto flex items-center gap-2">
      <Button className=" flex items-center py-2 gap-2">
        <ShoppingBag className="w-4 h-4" />
        <span>0</span>
      </Button>
    </div>
  )
}
