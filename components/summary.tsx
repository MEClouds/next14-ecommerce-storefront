"use client"

import useCart from "@/hooks/use-cart"
import Button from "./ui/button"
import { Currency } from "./ui/currency"
import axios from "axios"
import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import toast from "react-hot-toast"

type Props = {}
export const Summary = ({}: Props) => {
  const items = useCart((state) => state.items)
  const removeAll = useCart((state) => state.removeAll)
  const searchParams = useSearchParams()
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed successfully")
      removeAll()
    }
    if (searchParams.get("canceled")) {
      toast.error(" Something went wrong")
    }
  }, [searchParams, removeAll])

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0)

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    )
  }
  return (
    <div
      className="
    mt-16 
    rounded-lg 
    bg-gray-100 
    px-4 py-6
    sm:p-6 lg:col-span-5
    lg:mt-0 lg:p-8
  "
    >
      <h2>Order summary</h2>
      <div className="mt-5 space-y-5">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} className="w-full mt-5">
        Checkout
      </Button>
    </div>
  )
}
