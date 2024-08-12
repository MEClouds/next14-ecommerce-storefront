import getBillboard from "@/actions/get-billboard"
import getCategory from "@/actions/get-category"
import getColors from "@/actions/get-colors"
import getProducts from "@/actions/get-products"
import getSizes from "@/actions/get-sizes"
import { Billboard } from "@/components/billboard"
import { ProductList } from "@/components/product-list"
import { Container } from "@/components/ui/container"
import Filter from "./components/filter"
import MobileFilters from "./components/mobile-filter"

export const revalidate = 0
type Props = {
  params: { categoryid: string }
  searchParams: {
    colorId: string
    sizeId: string
  }
}
const Home = async ({ params, searchParams }: Props) => {
  const category = await getCategory(params.categoryid)
  const billboards = await getBillboard(category.billboardId)
  const sizes = await getSizes()
  const colors = await getColors()
  const products = await getProducts({
    isFeatured: true,
    categoryId: category.id,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  })
  return (
    <Container>
      <div className="gap-y-8 pb-8">
        <Billboard data={billboards} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              <ProductList title="Featured Products" items={products} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home
