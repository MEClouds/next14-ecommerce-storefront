import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import { Billboard } from "@/components/billboard"
import { ProudctList } from "@/components/product-list"
import { Container } from "@/components/ui/container"

export const revalidate = 0
type Props = {}
const Home = async ({}: Props) => {
  const billboards = await getBillboard("f12b6224-a266-4135-94ab-86611b088148")
  const products = await getProducts({ isFeatured: true })
  return (
    <Container>
      <div className="gap-y-8 pb-8">
        <Billboard data={billboards} />
        <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProudctList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default Home
