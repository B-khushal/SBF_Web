"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import type { Product } from "../data/products"

export default function AddToCartButton({ product }: { product: Product }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    // Here you would typically add the product to the cart state or send a request to an API
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`flex items-center justify-center px-4 py-2 rounded-md text-white ${
        isAdded ? "bg-green-500" : "bg-pink-600 hover:bg-pink-700"
      } transition-colors duration-300`}
    >
      {isAdded ? (
        "Added to Cart!"
      ) : (
        <>
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </>
      )}
    </button>
  )
}

