import getProduct from "@/actions/get-product"
import getProducts from "@/actions/get-products"
import { Gallery } from "@/components/gallery"
import { ProductInfo } from "@/components/product-info"
import { ProductList } from "@/components/product-list"
import { Container } from "@/components/ui/container"

type Props = {
  params: {
    productid: string
    storeid?: string
  }
}
const ProductPage = async ({ params }: Props) => {
  console.log(params.productid)
  const product = await getProduct(params.productid, params.storeid)
  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  })
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-4">
            <Gallery images={product.images} />
            {/* to do mt-10 px-4 */}
            <div className="mt-10 px-4">
              <ProductInfo data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Products" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  )
}

export default ProductPage
