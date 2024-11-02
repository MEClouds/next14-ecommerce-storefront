import { Billboard } from "@/types"

const getBillboard = async (
  id: string,
  storeid?: string
): Promise<Billboard> => {
  if (!!storeid) {
    const urlLink = `${process.env.NEXT_PUBLIC_API}/${storeid}/billboards`
    console.log(urlLink)

    const res = await fetch(urlLink)
    const data = await res.json()
    return data[0]
  }

  const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`
  const res = await fetch(`${url}/${id}`)
  return res.json()
}

export default getBillboard
