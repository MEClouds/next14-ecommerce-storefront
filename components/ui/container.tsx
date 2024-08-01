interface ContainerType {
  children: React.ReactNode
}
export const Container: React.FC<ContainerType> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>
}
