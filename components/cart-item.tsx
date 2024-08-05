import { Product } from "@/types"
import Image from "next/image"
import { IconButton } from "./ui/icon-button"
import { X } from "lucide-react"
import { Currency } from "./ui/currency"
import useCart from "@/hooks/use-cart"

type Props = {
  data: Product
}
export const CartItem = ({ data }: Props) => {
  const cart = useCart()
  const onRemove = () => {
    cart.removeItem(data.id)
  }
  return (
    <li className="flex py-6 border-b">
      <div className=" relative h-24 w-24  rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          className="object-cover object-center"
          alt="product image"
          src={data.images[0].url}
        />
      </div>
      <div className="relative ms-4 flex flex-1 flex-col justify-between sm:ms-6">
        <div className=" absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className=" relative pe-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pe-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className=" text-gray-500">{data.color.name}</p>
            <p className=" text-gray-500 ms-4 border-l border-gray-300 ps-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  )
}
