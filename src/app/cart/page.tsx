"use client"

import { useCart } from "@/hooks/useCart"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DownloadCloud, Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function CartPage() {
  const { cart, removeFromCart, clearCart, isReady } = useCart();

  if (!isReady) return null;

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0)

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4"
      >
        <ShoppingBag className="w-10 h-10 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <p className="text-sm text-muted-foreground mt-2">Browse the shop and add some amazing products.</p>
        <Link href="/shop">
          <Button className="mt-6">Go to Products</Button>
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl mx-auto pt-4 pb-16 space-y-6 px-4"
    >
      <h1 className="text-3xl font-bold text-center">🛒 Your Cart</h1>

      <div className="space-y-4">
        <AnimatePresence>
          {cart.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-4 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  {/* Left side: image + info */}
                  <div className="flex gap-4 flex-1">
                    <img
                      src={product.thumbnail || "/placeholder.png"}
                      alt={product.name || "Product Image"}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-md border"
                    />
                    <div className="space-y-1">
                      <h2 className="font-medium text-lg">{product.name}</h2>
                      <p className="text-sm text-muted-foreground line-clamp-2">{product.description?.slice(0, 60)}...</p>
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                  </div>

                  {/* Right side: price + remove */}
                  <div className="flex sm:flex-col sm:items-end justify-between sm:justify-between gap-2 sm:gap-3 text-left sm:text-end">
                    <p className="text-base font-semibold sm:text-right">₹{product.price}</p>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => removeFromCart(product.id)}
                    >
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="border-t pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <h2 className="text-lg font-semibold">
          Total: <span className="text-primary">₹{total.toFixed(2)}</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <Button
            variant="destructive"
            className="w-full sm:w-auto"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
          <motion.div whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto">
              Checkout
              <DownloadCloud className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
