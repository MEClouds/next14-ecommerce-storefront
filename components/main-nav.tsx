"use client"
import { cn } from "@/lib/utils"
import { Category } from "@/types"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
  data: Category[]
}
export const MainNav = ({ data }: Props) => {
  const pathName = usePathname()
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName == `/category/${route.id}`,
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
