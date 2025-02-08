import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-pink-100 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-pink-600">
            Spring Blossoms Florist
          </Link>
          <div className="flex items-center">
            <Link
              href="/products"
              className="text-gray-800 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </Link>
            <Link href="/cart" className="text-gray-800 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium">
              <ShoppingCart className="inline-block w-5 h-5 mr-1" />
              Cart
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

