import { cn } from "@/lib/utils"
import { MouseEventHandler } from "react"

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  icon: React.ReactElement
  className?: string
}
export const IconButton = ({ onClick, icon, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        " rounded-full flex items-center justify-center bg-white border shadow-sm p-2 hover:scale-110 transition",
        className
      )}
    >
      {icon}
    </button>
  )
}
