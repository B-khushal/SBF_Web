"use client"

import { PhoneIcon as WhatsappIcon } from "lucide-react"
import type { Product } from "../data/products"

export default function WhatsAppButton({ product }: { product: Product }) {
  const handleWhatsAppPurchase = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in purchasing ${product.name} for $${product.price.toFixed(2)}. Can you help me with the order?`,
    )
    window.open(`https://wa.me/919949683222?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppPurchase}
      className="flex items-center justify-center px-4 py-2 rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors duration-300"
    >
      <WhatsappIcon className="w-5 h-5 mr-2" />
      Buy on WhatsApp
    </button>
  )
}

