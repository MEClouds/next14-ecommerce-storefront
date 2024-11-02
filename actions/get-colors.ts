import { Color } from "@/types"

const getColors = async (storeid?: string): Promise<Color[]> => {
  if (!!storeid) {
    const urlLink = `${process.env.NEXT_PUBLIC_API}/${storeid}/colors`
    const res = await fetch(urlLink)
    return res.json()
  }

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`
  const res = await fetch(URL)
  return res.json()
}

export default getColors
