import Link from "next/link"
import Image from "next/image"
import { products } from "./data/products"

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">Welcome to Spring Blossoms Florist</h1>
      <p className="text-xl text-center mb-12">Discover our beautiful collection of flowers for every occasion</p>

      <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/products"
          className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition-colors duration-300"
        >
          View All Products
        </Link>
      </div>
    </div>
  )
}

