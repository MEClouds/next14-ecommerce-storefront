import { Category } from "@/types"

const getCategory = async (id: string, storeid?: string): Promise<Category> => {
  if (!!storeid) {
    const urlLink = `${process.env.NEXT_PUBLIC_API}/${storeid}/categories`
    console.log(urlLink)
    const res = await fetch(`${urlLink}/${id}`)
  }

  const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`
  const res = await fetch(`${url}/${id}`)
  return res.json()
}
export default getCategory
