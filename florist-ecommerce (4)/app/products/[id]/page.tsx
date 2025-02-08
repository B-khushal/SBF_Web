import Image from "next/image"
import { products } from "../../data/products"
import AddToCartButton from "../../components/AddToCartButton"
import WhatsAppButton from "../../components/WhatsAppButton"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-pink-600 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-pink-600 mb-6">${product.price.toFixed(2)}</p>
          <div className="flex space-x-4">
            <AddToCartButton product={product} />
            <WhatsAppButton product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

