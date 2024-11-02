"use client"
import { cn } from "@/lib/utils"
import { Category } from "@/types"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

type Props = {
  data: Category[]
}
export const MainNav = ({ data }: Props) => {
  const params = useParams()
  const pathName = usePathname()
  const base = !!params.storeid ? `/${params.storeid}/category` : `/category`
  const routes = data.map((route) => ({
    href: `${base}/${route.id}`,
    label: route.name,
    active: pathName == `${base}/${route.id}`,
  }))

  return (
    <nav className="flex items-center gap-x-4 lg:gap-x-6">
      {routes.map((route) => (
        <Link
          className={cn(
            `
        text-sm font-medium hover:text-black transition-colors
        `,
            route.active ? "text-black" : "text-neutral-500"
          )}
          key={route.href}
          href={route.href}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
