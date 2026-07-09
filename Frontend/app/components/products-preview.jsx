import Link from "next/link"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { ArrowRight, Star } from "lucide-react"
import { Reveal } from "./reveal"

const products = [
  {
    name: "AquaGrow Premium Feed",
    category: "Fish Feed",
    image: "/products/aquagrow-premium-feed.png",
    price: "₹1,200",
    unit: "per 25kg",
    rating: 4.8,
    description: "High-protein floating feed for optimal growth",
    badge: "Best Seller",
  },
  {
    name: "BioShield Immunity Booster",
    category: "Supplements",
    image: "/products/bioshield-immunity-booster.png",
    price: "₹450",
    unit: "per 500ml",
    rating: 4.6,
    description: "Enhances natural immunity against diseases",
    badge: "Popular",
  },
  {
    name: "GillCare Treatment",
    category: "Medicine",
    image: "/products/gillcare-treatment.png",
    price: "₹680",
    unit: "per 1L",
    rating: 4.9,
    description: "Effective treatment for gill infections",
    badge: "Recommended",
  },
  {
    name: "PondClear Water Treatment",
    category: "Water Care",
    image: "/products/pondclear-water-treatment.png",
    price: "₹320",
    unit: "per 5kg",
    rating: 4.7,
    description: "Maintains optimal water quality",
    badge: null,
  },
]

export function ProductsPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary mb-4">
              Shop products
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Popular Products
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Quality products trusted by thousands of fish farmers across India.
            </p>
          </div>
          <Link href="/products">
            <Button variant="outline">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Reveal key={index} delay={index * 90}>
              <Card className="card-hover group h-full border border-border/60 shadow-md overflow-hidden">
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && <Badge className="absolute top-3 left-3 bg-primary">{product.badge}</Badge>}
                </div>
                <CardContent className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-lg font-bold text-foreground">{product.price}</span>
                    <span className="text-sm text-muted-foreground">{product.unit}</span>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
