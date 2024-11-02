import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "../globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import ModalProvider from "@/provider/modal-provider"
import ToastProvider from "@/provider/toast-provider"

const font = Urbanist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
}

type props = {
  children: Readonly<React.ReactNode>
  params: { storeid?: string }
}
export default function RootLayout({ children, params }: props) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar params={params} />
        <main className="mt-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
