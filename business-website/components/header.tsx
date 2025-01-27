import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Header() {
  return (
    <>
      <div className="bg-[#E84C22] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:contact@jigarsaraiya.com">contact@jigarsaraiya.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:0141-4072000">0141-4072000</a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-200">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-200">
              Pinterest
            </a>
            <a href="#" className="hover:text-gray-200">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold">Jigar Saraiya</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                HOME
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900">
                SERVICES
              </Link>
              <Link href="/gst" className="text-gray-700 hover:text-gray-900">
                GST
              </Link>
              <Link href="/knowledge-base" className="text-gray-700 hover:text-gray-900">
                KNOWLEDGE BASE
              </Link>
              <Link href="/reach-us" className="text-gray-700 hover:text-gray-900">
                REACH US
              </Link>
              <Link href="/newsfeed" className="text-gray-700 hover:text-gray-900">
                NEWSFEED
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-gray-900">
                BLOG
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

