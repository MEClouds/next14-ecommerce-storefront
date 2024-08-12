"use client"
import { Product } from "@/types"
import Image from "next/image"
import { IconButton } from "./icon-button"
import { Expand, ShoppingCart } from "lucide-react"
import { Currency } from "./currency"
import { useRouter } from "next/navigation"
import usePreviewModal from "@/hooks/use-preview-modal"
import { MouseEventHandler } from "react"
import useCart from "@/hooks/use-cart"

type Props = {
  data: Product
}
export const ProductCard = ({ data }: Props) => {
  const previewModal = usePreviewModal()
  const cart = useCart()
  const router = useRouter()
  const handelOnclick = () => {
    router.push(`/product/${data?.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    previewModal.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    cart.addItem(data)
  }

  return (
    <div
      onClick={handelOnclick}
      className=" bg-white group cursor-pointer rounded-xl border p-3 space-y-3"
    >
      <div className=" aspect-square rounded-md relative ">
        <Image
          className=" aspect-square rounded-md object-cover"
          src={data.images[0].url}
          alt="product"
          fill
        />
        <div className=" opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className=" flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Descriptions */}
      <div>
        <p className=" font-semibold text-lg">{data.name}</p>
        <p className=" font-semibold text-sm text-gray-500">
          {data.category.name}
        </p>
      </div>
      {/* price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}
