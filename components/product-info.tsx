import { Product } from "@/types"
import { Currency } from "./ui/currency"
import Button from "./ui/button"
import { ShoppingCart } from "lucide-react"

type Props = {
  data: Product
}
export const ProductInfo = ({ data }: Props) => {
  return (
    <div>
      <h1 className=" text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-4 flex items-start justify-between">
        <p className="text-xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-5">
        <div className=" flex items-center gap-x-4">
          <h3 className=" font-semibold text-gray-950">Size :</h3>
          <div>{data.size.name}</div>
        </div>
        <div className=" flex items-center gap-x-4">
          <h3 className=" font-semibold text-gray-950">Color :</h3>
          <div>
            <div
              className=" w-7 h-7 rounded-full border border-gray-600"
              style={{ backgroundColor: data.color.value }}
            />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-x-3">
          <Button className="flex justify-center items-center gap-2 w-full sm:w-fit">
            Add to cart
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  )
}
