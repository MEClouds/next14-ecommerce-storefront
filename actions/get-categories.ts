import { Category } from "@/types"

const getCategories = async (storeid?: string): Promise<Category[]> => {
  if (!!storeid) {
    const urlLink = `${process.env.NEXT_PUBLIC_API}/${storeid}/categories`
    console.log("This should be work" + urlLink)
    const res = await fetch(urlLink)
    return res.json()
  }

  const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`
  const res = await fetch(url)
  return res.json()
}

export default getCategories
