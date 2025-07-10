"use client"
import BlurFade from "@/components/magicui/blur-fade";
import { Code2, Code2Icon, Download, GitBranchIcon, GitBranchPlus, IndianRupee, IndianRupeeIcon, LucideDownloadCloud, LucideShoppingCart, ShoppingBasketIcon, ZapIcon } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { 
  BadgeCheck, 
  DownloadCloud, 
  Search,
  ShoppingCart,
  Star,
  Zap,
  Palette,
  Code,
  Users
} from "lucide-react"

import { ProjectCard } from "@/components/project-card"
import Link from "next/link"
import { products } from "@/data/products" // <-- import from shared data

const BLUR_FADE_DELAY = 0.1

type Product = {
  id: number
  name: string
  description: string
  price: string
  originalPrice?: string
  downloadLink: string
  thumbnail: string
  rating: number
  reviews: number
  category: string
  features: string[]
  github?: string
}

const productData: Product[] = [
  {
    id: 1,
    name: "AI Resume Builder",
    description: "Generate stunning, ATS-friendly resumes with AI-powered suggestions.",
    price: "9.99",
    originalPrice: "19.99",
    downloadLink: "/downloads/resume-builder.zip",
    thumbnail: "/images/resume-thumb.png",
    rating: 4.8,
    reviews: 156,
    category: "Productivity",
    features: ["AI-Powered", "ATS-Friendly", "Templates", "PDF Export"],
    github: "https://github.com/msnabiel/iVision"
  },
  {
    id: 2,
    name: "E-commerce UI Kit",
    description: "Beautiful React + Tailwind components for modern e-commerce sites.",
    price: "14.99",
    originalPrice: "29.99",
    downloadLink: "/downloads/ecommerce-template.zip",
    thumbnail: "/images/ecommerce-thumb.png",
    rating: 4.9,
    reviews: 203,
    category: "UI/UX",
    features: ["React", "Tailwind", "Responsive", "Dark Mode"],
    github: "https://github.com/msnabiel/iVision"
  },
  {
    id: 3,
    name: "Dashboard Template",
    description: "Professional admin dashboard with charts and modern components.",
    price: "24.99",
    originalPrice: "49.99",
    downloadLink: "/downloads/dashboard-pro.zip",
    thumbnail: "/images/dashboard-thumb.png",
    rating: 4.7,
    reviews: 89,
    category: "Templates",
    features: ["Analytics", "Tables", "API Ready", "Charts"],
    github: "https://github.com/msnabiel/iVision"
  },
  {
    id: 4,
    name: "Logo Design Tool",
    description: "Create professional logos with intuitive design tools.",
    price: "7.99",
    downloadLink: "/downloads/logo-tool.zip",
    thumbnail: "/images/logo-thumb.png",
    rating: 4.6,
    reviews: 124,
    category: "Design",
    features: ["Icon Library", "Vector", "Brand Kit", "Export"],
    github: "https://github.com/msnabiel/iVision"
  },
  {
    id: 5,
    name: "iVision",
    description: "AI-powered image enhancement tool.",
    price: "19.99",
    downloadLink: "/downloads/ivision.zip",
    thumbnail: "/images/ivision-thumb.png",
    rating: 4.9,
    reviews: 320,
    category: "AI Tools",
    features: ["Image Enhancement", "AI-Powered", "Batch Processing", "Filters"],
    github: "https://github.com/msnabiel/iVision"
  }
]

export default function ShopPage() {
  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [search, setSearch] = useState("")

  const filteredProducts = productData.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
  Digital Downloads
</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Premium tools and templates to boost your productivity
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 h-11"
        />
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12 space-y-2">
          <div className="text-4xl">🔍</div>
          <h3 className="text-lg font-semibold">No products found</h3>
          <p className="text-muted-foreground text-sm">Try different search terms</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {filteredProducts.map((product, id) => (
            <BlurFade key={product.id} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
    <Link
      href={`/shop/${product.id}`}
      className="block"
      prefetch={false}
    >
      <ProjectCard
        title={product.name}
        description={product.description}
        dates={`₹ ${product.price}`}
        tags={[product.category]}
        image={product.thumbnail}
       // No need for separate button

links={
  product.github
    ? [
        {
          type: `₹ ${product.price}`,
          href: product.github,
          icon: <LucideDownloadCloud className="size-3" />,
        },
      ]
    : []
}
      />
    </Link>
</BlurFade>

          ))}
        </div>
      )}

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-3 mt-8">
        <div className="text-center p-4 border rounded-lg">
          <div className="text-xl font-bold text-blue-600">500+</div>
          <div className="text-muted-foreground text-xs">Customers</div>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <div className="text-xl font-bold text-green-600">4.8★</div>
          <div className="text-muted-foreground text-xs">Rating</div>
        </div>
        <div className="text-center p-4 border rounded-lg">
          <div className="text-xl font-bold text-purple-600">24/7</div>
          <div className="text-muted-foreground text-xs">Support</div>
        </div>
      </div>

      {/* Download Confirmation Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="mx-4 max-w-sm sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-green-600">
              <BadgeCheck className="w-5 h-5" />
              Purchase Confirmed!
            </DialogTitle>
            <DialogDescription className="text-sm">
              Thank you for your purchase! Your download is ready.
            </DialogDescription>
          </DialogHeader>

          {selectedProduct && (
            <div className="mt-4 space-y-4">
              <div className="p-3 border bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h3 className="font-semibold">{selectedProduct.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedProduct.description}
                </p>
                <div className="text-lg font-bold text-green-600">
                  {selectedProduct.price}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">What's included:</h4>
                <div className="grid grid-cols-2 gap-1">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <BadgeCheck className="w-3 h-3 text-green-600 shrink-0" />
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <a href={selectedProduct.downloadLink} download className="flex items-center gap-2">
                  <DownloadCloud className="w-4 h-4" />
                  Download {selectedProduct.name}
                </a>
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Download will begin automatically. Check your downloads folder.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

