"use client"

import { useParams, useRouter } from "next/navigation"
import { products, Product } from "@/data/products"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  DownloadCloud, 
  BadgeCheck, 
  Github, 
  ArrowLeft, 
  Star, 
  Share2,
  ExternalLink,
  Calendar,
  Package,
  Users
} from "lucide-react"
import { useState } from "react"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const [imageLoaded, setImageLoaded] = useState(false)
  const [shareClicked, setShareClicked] = useState(false)

  const id = Number(params.id)
  const product = products.find((p: Product) => p.id === id)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product?.name,
          text: product?.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      await navigator.clipboard.writeText(window.location.href)
      setShareClicked(true)
      setTimeout(() => setShareClicked(false), 2000)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <Card className="max-w-md mx-auto shadow-lg">
          <CardContent className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
              <Package className="w-8 h-8 text-red-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
              <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
            </div>
            <Button 
              onClick={() => router.back()} 
              className="w-full"
              variant="outline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto py-0 px-6 space-y-8">
        {/* Back Button */}
        <Button 
  variant="ghost" 
  onClick={() => router.back()}
  className="hover:bg-muted mb-4 pl-0"
>
  <ArrowLeft className="w-4 h-4 mr-2" />
  Back to Products
</Button>

{/* Hero Section */}
<Card className="overflow-hidden shadow border bg-card">
  <CardContent className="p-4 sm:p-6">
    <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-6">
{/* Product Image */}
<div className="relative group sm:w-1/2">
  <div className="h-full w-full rounded-xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted shadow relative min-h-[200px] sm:min-h-0">
    <img
      src={product.thumbnail}
      alt={product.name}
      className={`w-full h-full object-cover transition-all duration-700 ${
        imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
      }`}
      onLoad={() => setImageLoaded(true)}
    />
    {!imageLoaded && (
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-t-transparent border-primary" />
      </div>
    )}
  </div>

  {/* Premium Tag */}
  <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-0.5 rounded-full text-xs font-medium shadow">
    Premium
  </div>
</div>

      {/* Product Info */}
      <div className="sm:w-1/2 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            {product.category}
          </Badge>
          <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {product.name}
          </h1>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg font-semibold text-green-600">₹{product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
                <Badge variant="destructive" className="text-xs px-2 py-0.5 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                  {Math.round(((Number(product.originalPrice) - Number(product.price)) / Number(product.originalPrice)) * 100)}% OFF
                </Badge>
              </>
            )}
          </div>

          <p className="text-sm text-muted-foreground line-clamp-3">{product.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button
            asChild
            size="sm"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow hover:shadow-lg"
          >
            <a href={product.downloadLink} download className="flex items-center gap-2 justify-center">
              <DownloadCloud className="w-4 h-4" />
              Download
            </a>
          </Button>

          <div className="grid grid-cols-2 gap-2">
            {product.github && (
              <Button
                asChild
                variant="default"
                size="sm"
                className="hover:bg-slate-50 border-slate-200"
              >
                <a
                  href={product.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1"
                  title="View Source Code"
                >
                  <Github className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs">Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            )}

            <Button
              variant="default"
              size="sm"
              onClick={handleShare}
              className="hover:bg-slate-50 border-slate-200"
            >
              <Share2 className="w-4 h-4 mr-1" />
              <span className="text-xs">{shareClicked ? "Copied!" : "Share"}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </CardContent>
</Card>


{/* Features Section */}
<Card className="shadow border-0">
  <CardContent className="p-4 sm:p-5">
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
          <BadgeCheck className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Key Features</h3>
      </div>

      <div className="grid sm:grid-cols-2 gap-2">
        {product.features.map((feature: string, idx: number) => (
          <div 
            key={idx}
            className="flex items-start gap-2 p-2 rounded-md bg-muted/40 border border-muted hover:shadow-sm transition"
          >
            <BadgeCheck className="w-4 h-4 text-green-600 mt-0.5" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </CardContent>
</Card>

{/* Additional Info Cards */}
<div className="grid sm:grid-cols-3 gap-3">
  {[
    {
      icon: <Star className="w-5 h-5 text-blue-600" />,
      title: "Premium Quality",
      desc: "Crafted with attention to detail",
      bg: "bg-blue-100"
    },
    {
      icon: <Calendar className="w-5 h-5 text-green-600" />,
      title: "Regular Updates",
      desc: "Continuously improved and maintained",
      bg: "bg-green-100"
    },
    {
      icon: <Users className="w-5 h-5 text-purple-600" />,
      title: "Community Support",
      desc: "Join thousands of satisfied users",
      bg: "bg-purple-100"
    },
  ].map((card, idx) => (
    <Card
      key={idx}
      className="shadow border hover:shadow-md transition-shadow"
    >
      <CardContent className="p-4 text-center space-y-2">
        <div className={`w-10 h-10 ${card.bg} rounded-full flex items-center justify-center mx-auto`}>
          {card.icon}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">{card.title}</h4>
          <p className="text-xs text-foreground/70">{card.desc}</p>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

      </div>
    </div>
  )
}