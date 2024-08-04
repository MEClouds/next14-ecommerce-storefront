"use client"
import { Image as ImageType } from "@/types"
import { Tab, TabPanels } from "@headlessui/react"
import Image from "next/image"
import { GalleryTab } from "./gallery-tab"

type Props = {
  images: ImageType[]
}
export const Gallery = ({ images }: Props) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <TabPanels className={"aspect-square w-full"}>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className=" aspect-square relative w-full h-full rounded-md sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.url}
                alt="image"
                className=" object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </TabPanels>
    </Tab.Group>
  )
}
