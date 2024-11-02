import { Size } from "@/types"

const getSizes = async (storeid?: string): Promise<Size[]> => {
  if (!!storeid) {
    const URL = `${process.env.NEXT_PUBLIC_API}/${storeid}/sizes`
    const res = await fetch(URL)
    return res.json()
  }

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`
  const res = await fetch(URL)
  return res.json()
}

export default getSizes
