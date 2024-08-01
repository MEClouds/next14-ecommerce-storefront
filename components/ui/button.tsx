import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type = "button", disabled, ...props }, ref) => {
    return (
      <button
        className={cn(
          `w-auto
            rounded-full
            py-2 px-3
            bg-black
            text-white
            font-semibold
            disabled:opacity-50
            disabled:cursor-not-allowed
            hover:opacity-75
            transition
            border-transparent            
            `,
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
export default Button
