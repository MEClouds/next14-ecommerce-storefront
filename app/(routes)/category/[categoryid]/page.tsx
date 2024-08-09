import getBillboard from "@/actions/get-billboard"
import getCategory from "@/actions/get-category"
import getProducts from "@/actions/get-products"
import { Billboard } from "@/components/billboard"
import { ProductList } from "@/components/product-list"
import { Container } from "@/components/ui/container"

export const revalidate = 0
type Props = { params: { categoryid: string } }
const Home = async ({ params }: Props) => {
  const category = await getCategory(params.categoryid)
  const billboards = await getBillboard(category.billboardId)
  const products = await getProducts({
    isFeatured: true,
    categoryId: category.id,
  })
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

export default Home
