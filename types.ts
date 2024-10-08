export interface Billboard {
  id: string
  imageUrl: string
  label: string
}

export interface Category {
  id: string
  name: string
  billboardId: string
}

export interface Product {
  id: string
  name: string
  category: Category
  price: string
  isFeatured: boolean
  size: Size
  color: Color
  images: Image[]
}

export interface Image {
  id: string
  url: string
}
export interface Size {
  id: string
  name: string
  value: string
}

export interface Color {
  id: string
  name: string
  value: string
}
