import { cn } from "@/lib/utils"

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-neutral-300", className)}
      {...props}
    />
  )
}

export default Skeleton
