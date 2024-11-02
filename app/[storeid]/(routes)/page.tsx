import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import { Billboard } from "@/components/billboard"
import { ProductList } from "@/components/product-list"
import { Container } from "@/components/ui/container"
import { useParams } from "next/navigation"

export const revalidate = 0
type Props = { params: { storeid: string } }
const StorePage = async ({ params }: Props) => {
  const billboards = await getBillboard(
    "f12b6224-a266-4135-94ab-86611b088148",
    params.storeid as string
  )
  const products = await getProducts({ isFeatured: true }, params.storeid)
  return (
    <Container>
      <div className="gap-y-8 pb-8">
        <Billboard data={billboards} />
        <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default StorePage
