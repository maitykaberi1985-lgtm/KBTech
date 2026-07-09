"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Snowflake, Sun, AlertTriangle, ArrowRight, Shuffle, Leaf } from "lucide-react"

const winterDiseases = [
  {
    name: "Saprolegniasis (Winter Fungus)",
    description: "Fungal infection causing cotton-like growth on fish skin and gills.",
    severity: "High",
    season: "Winter",
    symptoms: ["White cotton-like patches", "Lethargy", "Loss of appetite"],
    prevention: "Maintain water quality, avoid overcrowding",
    product: "AquaGuard Anti-Fungal",
  },
  {
    name: "Columnaris Disease",
    description: "Bacterial infection more prevalent in cold water conditions.",
    severity: "Medium",
    season: "Winter",
    symptoms: ["White spots on mouth", "Fin erosion", "Gill damage"],
    prevention: "Regular water changes, proper nutrition",
    product: "BioShield Bacterial Defense",
  },
  {
    name: "Ich (White Spot Disease)",
    description: "Parasitic infection causing white spots during temperature fluctuations.",
    severity: "High",
    season: "Winter",
    symptoms: ["White spots on body", "Scratching against surfaces", "Rapid breathing"],
    prevention: "Stable water temperature, quarantine new fish",
    product: "IchClear Treatment",
  },
  {
    name: "Trichodiniasis",
    description: "Protozoan parasite that thrives in cool, organically rich water.",
    severity: "Medium",
    season: "Winter",
    symptoms: ["Grey film on skin", "Flashing", "Frayed fins"],
    prevention: "Reduce organic load, maintain aeration",
    product: "ParaShield Solution",
  },
]

const summerDiseases = [
  {
    name: "Bacterial Gill Disease",
    description: "Common in warm water with low oxygen levels.",
    severity: "High",
    season: "Summer",
    symptoms: ["Swollen gills", "Gasping at surface", "Reduced feeding"],
    prevention: "Maintain aeration, avoid overfeeding",
    product: "GillCare Plus",
  },
  {
    name: "Epizootic Ulcerative Syndrome",
    description: "Serious fungal disease in warm monsoon conditions.",
    severity: "Critical",
    season: "Summer",
    symptoms: ["Red ulcers on body", "Deep lesions", "Scale loss"],
    prevention: "Good pond hygiene, lime treatment",
    product: "UlcerHeal Advanced",
  },
  {
    name: "Argulosis (Fish Lice)",
    description: "Parasitic infestation common in summer months.",
    severity: "Medium",
    season: "Summer",
    symptoms: ["Visible parasites", "Restlessness", "Bloody spots"],
    prevention: "Regular pond screening, avoid wild fish",
    product: "ParaKill Solution",
  },
  {
    name: "Aeromoniasis (Red Sore)",
    description: "Bacterial outbreak triggered by heat stress and poor water.",
    severity: "Critical",
    season: "Summer",
    symptoms: ["Red sores", "Swollen abdomen", "Bulging eyes"],
    prevention: "Reduce stocking density, add probiotics",
    product: "BioShield Bacterial Defense",
  },
]

// Fisher–Yates shuffle (returns a new array)
function shuffle(array) {
  const a = [...array]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const severityRank = { Low: 1, Medium: 2, High: 3, Critical: 4 }

export function SeasonalDiseases() {
  const [currentSeason, setCurrentSeason] = useState("winter")
  const [cards, setCards] = useState([])
  const [animKey, setAnimKey] = useState(0)

  const buildCards = useCallback((season) => {
    if (season === "all") {
      // Randomly pick from the full pool for a mixed, surprise selection
      return shuffle([...winterDiseases, ...summerDiseases]).slice(0, 6)
    }
    const source = season === "winter" ? winterDiseases : summerDiseases
    return shuffle(source)
  }, [])

  const randomize = useCallback(
    (season) => {
      setCards(buildCards(season))
      setAnimKey((k) => k + 1)
    },
    [buildCards],
  )

  useEffect(() => {
    // Detect the current season on first load, then randomize the cards
    const month = new Date().getMonth()
    const detected = month >= 3 && month <= 9 ? "summer" : "winter"
    setCurrentSeason(detected)
    setCards(buildCards(detected))
  }, [buildCards])

  const selectSeason = (season) => {
    setCurrentSeason(season)
    randomize(season)
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            {currentSeason === "winter" ? (
              <Snowflake className="w-4 h-4 text-primary" />
            ) : currentSeason === "summer" ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : (
              <Leaf className="w-4 h-4 text-primary" />
            )}
            <span className="text-sm font-medium text-primary">
              {currentSeason === "winter"
                ? "Winter Season"
                : currentSeason === "summer"
                  ? "Summer Season"
                  : "All Seasons"}{" "}
              Alert
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Seasonal Fish Diseases
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A fresh, randomized selection of common fish diseases with symptoms and recommended solutions. Hit
            shuffle for a new set every time.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={currentSeason === "winter" ? "default" : "outline"}
            onClick={() => selectSeason("winter")}
            className="gap-2"
          >
            <Snowflake className="w-4 h-4" />
            Winter
          </Button>
          <Button
            variant={currentSeason === "summer" ? "default" : "outline"}
            onClick={() => selectSeason("summer")}
            className="gap-2"
          >
            <Sun className="w-4 h-4" />
            Summer
          </Button>
          <Button
            variant={currentSeason === "all" ? "default" : "outline"}
            onClick={() => selectSeason("all")}
            className="gap-2"
          >
            <Leaf className="w-4 h-4" />
            All Seasons
          </Button>
          <Button variant="secondary" onClick={() => randomize(currentSeason)} className="gap-2">
            <Shuffle className="w-4 h-4" />
            Shuffle Cards
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((disease, index) => (
            <Card
              key={`${animKey}-${disease.name}`}
              className="card-hover border border-border/60 shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {disease.season}
                    </Badge>
                    <CardTitle className="font-heading text-lg leading-snug">{disease.name}</CardTitle>
                  </div>
                  <Badge
                    variant={
                      severityRank[disease.severity] >= 4
                        ? "destructive"
                        : severityRank[disease.severity] >= 3
                          ? "default"
                          : "secondary"
                    }
                  >
                    {disease.severity}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{disease.description}</p>

                <div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    Symptoms
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {disease.symptoms.map((symptom, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="text-sm font-medium mb-1">Recommended Product</div>
                  <Link href="/products" className="text-sm text-primary hover:underline flex items-center gap-1">
                    {disease.product}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/diseases">
            <Button variant="outline" size="lg">
              View All Diseases Guide
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
