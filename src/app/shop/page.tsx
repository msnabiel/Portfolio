"use client"
import BlurFade from "@/components/magicui/blur-fade";
import { Code2, Code2Icon, Download, GitBranchIcon, GitBranchPlus, IndianRupee, IndianRupeeIcon, LucideDownloadCloud, LucideShoppingCart, ShoppingBasketIcon, ZapIcon } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/hooks/useCart"
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
import { products } from "@/data/products"

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

export default function ShopPage() {
const [open, setOpen] = useState(false)
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
const [search, setSearch] = useState("")
const filteredProducts = products.filter(
 (product) =>
product.name.toLowerCase().includes(search.toLowerCase()) ||
product.description.toLowerCase().includes(search.toLowerCase()) ||
product.category.toLowerCase().includes(search.toLowerCase())
 )
const { addToCart } = useCart()

// Debug function to handle add to cart
const handleAddToCart = (product: Product) => {
  console.log('🛒 Add to cart clicked for:', product.name);
  console.log('🛒 Product data:', product);
  console.log('🛒 addToCart function:', addToCart);
  
  try {
    const result = addToCart(product);
    console.log('🛒 addToCart result:', result);
    console.log('✅ Successfully added to cart!');
  } catch (error) {
    console.error('❌ Error adding to cart:', error);
  }
}

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
<ProjectCard
title={product.name}
description={product.description}
dates={`₹ ${product.price}`}
tags={[product.category]}
image={product.thumbnail}
links={[
 {
type: `View`,
href: `/shop/${product.id}`,
icon: <DownloadCloud className="size-3" />,
 },
 {
type: "Add to Cart",
icon: <ShoppingCart className="size-3" />,
onClick: (e) => {
  console.log('🔥 Button clicked - event:', e);
  handleAddToCart(product);
},
 },
 ]}
/>
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