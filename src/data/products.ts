export type Product = {
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

export const products: Product[] = [
  {
    id: 1,
    name: "AI Resume Builder",
    description: "Generate stunning, ATS-friendly resumes with AI-powered suggestions.",
    price: "9.99",
    originalPrice: "19.99",
    downloadLink: "/downloads/resume-builder.zip",
    thumbnail: "/flood.png",
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