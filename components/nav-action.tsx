"use client"
import { ShoppingBag } from "lucide-react"
import Button from "./ui/button"
import { useEffect, useState } from "react"
import useCart from "@/hooks/use-cart"
import { useRouter } from "next/navigation"

type Props = {}
export const NavAction = ({}: Props) => {
  const [mounted, setMounted] = useState(false)
  const cart = useCart()
  const router = useRouter()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="ms-auto flex items-center gap-2">
      <Button
        onClick={() => {
          console.log("clicked")
          router.push("/cart")
        }}
        className=" flex items-center py-2 gap-2"
      >
        <ShoppingBag className="w-4 h-4" />
        <span>{cart.items.length}</span>
      </Button>
    </div>
  )
}
