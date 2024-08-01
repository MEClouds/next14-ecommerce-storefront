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
        <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center gap-x-3">
          <Link href="/" className="ms-4 lg:ms-0 gap-x-2">
            <p className=" font-bold text-2xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavAction />
        </div>
      </Container>
    </div>
  )
}
