'use client'

import { useState, type FormEvent } from 'react'

// Brand keyword → brand id
const BRAND_KEYWORDS: Array<[RegExp, string]> = [
  [/\bhp\b|hewlett[-\s]?packard|deskjet|officejet|laserjet|envy/i, 'hp'],
  [/\bcanon\b|pixma|imageclass|maxify/i, 'canon'],
  [/\bepson\b|ecotank|workforce|expression/i, 'epson'],
  [/\bbrother\b|mfc-|hl-/i, 'brother'],
  [/\blexmark\b/i, 'lexmark'],
  [/\bsamsung\b/i, 'samsung'],
]

function parseBrandAndModel(query: string): { brand: string; model: string } {
  const q = query.trim()
  for (const [pattern, brandId] of BRAND_KEYWORDS) {
    if (pattern.test(q)) return { brand: brandId, model: q }
  }
  return { brand: '', model: q }
}

export function HeroSearch() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!query.trim()) return
    const { brand, model } = parseBrandAndModel(query)
    const params = new URLSearchParams()
    if (brand) params.set('brand', brand)
    if (model) params.set('model', model)
    window.location.href = `/driver-download/?${params.toString()}`
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex max-w-2xl mx-auto mb-8 shadow-card rounded-xl overflow-hidden border border-brand-border"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your printer model, e.g. HP DeskJet 2755..."
        className="flex-1 px-5 py-4 text-brand-text bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary text-sm md:text-base min-w-0"
        aria-label="Enter printer model to find driver"
      />
      <button
        type="submit"
        className="px-6 py-4 bg-primary hover:bg-primary-dark text-white font-semibold transition-colors text-sm md:text-base whitespace-nowrap flex-shrink-0"
      >
        Find Driver
      </button>
    </form>
  )
}
