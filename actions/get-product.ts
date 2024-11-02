import { Product } from "@/types"

const getProduct = async (id: string, storeid?: string): Promise<Product> => {
  if (!!storeid) {
    const urlLink = `${process.env.NEXT_PUBLIC_API}/${storeid}/products`
    console.log(`${urlLink}/${id}`)
    const res = await fetch(`${urlLink}/${id}`)
    return res.json()
  }

  const url = `${process.env.NEXT_PUBLIC_API_URL}/products`
  const res = await fetch(`${url}/${id}`)
  return res.json()
}

export default getProduct
