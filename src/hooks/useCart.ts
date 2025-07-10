"use client"

import { useEffect, useState } from "react"
import type { Product } from "@/data/products" // <-- Use the shared Product type

export function useCart() {
  const [cart, setCart] = useState<Product[]>([])
  const [isReady, setIsReady] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
    setIsReady(true)
  }, [])

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (isReady) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, isReady])

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.some((p) => p.id === product.id)
      if (exists) return prev
      return [...prev, product]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return { cart, addToCart, removeFromCart, clearCart, isReady }
}
