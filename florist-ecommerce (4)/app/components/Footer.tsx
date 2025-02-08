import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-pink-100 text-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p>&copy; 2025 Spring Blossoms Florist. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-pink-600">
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com/sbf_india" className="hover:text-pink-600">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-pink-600">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

