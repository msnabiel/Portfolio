"use client"

import { useCart } from "@/hooks/useCart"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DownloadCloud, Trash2 } from "lucide-react"
import Link from "next/link"

export default function CartPage() {
  const { cart, removeFromCart, clearCart, isReady } = useCart();

  if (!isReady) {
    return null; // or a loading spinner
  }

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0)

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold">Your cart is empty 🛒</h1>
        <p className="text-muted-foreground mt-2">Start adding some products!</p>
        <Link href="/shop">
          <Button className="mt-4">Go to Products</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-6 px-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {cart.map((product) => (
        <Card key={product.id} className="flex items-center justify-between gap-4 p-4">
          <div className="flex items-center gap-4">
            <img
              src={product.thumbnail || "/placeholder.png"}
              alt={product.name || "Product Image"}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm text-muted-foreground">₹{product.price}</p>
              <Badge variant="outline">{product.category}</Badge>
            </div>
          </div>
          <Button size="icon" variant="ghost" onClick={() => removeFromCart(product.id)}>
            <Trash2 className="w-4 h-4" />
          </Button>
        </Card>
      ))}

      <div className="flex justify-between items-center pt-4">
        <h2 className="text-lg font-bold">Total: ₹{total.toFixed(2)}</h2>
        <div className="flex gap-2">
          <Button variant="destructive" onClick={clearCart}>
            Clear Cart
          </Button>
          <Button>
            Checkout
            <DownloadCloud className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
