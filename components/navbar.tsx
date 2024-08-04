import Link from "next/link"
import { Container } from "./ui/container"
import { MainNav } from "./main-nav"
import getCategories from "@/actions/get-categories"
import { NavAction } from "./nav-action"

type Props = {}
export const Navbar = async ({}: Props) => {
  const categories = await getCategories()
  return (
    <div className="border-b">
      <Container>
        <div className="fixed top-0 left-0 right-0 z-10  bg-white bg-opacity-50 backdrop-blur-lg shadow-lg ">
          <div className=" h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-x-3">
            <Link href="/" className="ms-4 lg:ms-0 gap-x-2">
              <p className=" font-bold text-2xl">Store</p>
            </Link>
            <MainNav data={categories} />
            <NavAction />
          </div>
        </div>
      </Container>
    </div>
  )
}
