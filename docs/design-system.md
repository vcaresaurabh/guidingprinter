# DESIGN SYSTEM

## STYLE

- Premium support SaaS aesthetic
- Clean enterprise layouts
- Modern minimal appearance
- Trust-focused design

## COLOR TOKENS

| Token | Value | Use |
|-------|-------|-----|
| primary.DEFAULT | #2563EB | Buttons, links, accents |
| primary.dark | #1D4ED8 | Hover states |
| primary.light | #3B82F6 | Subtle accents |
| primary.50 | #EFF6FF | Light backgrounds |
| primary.100 | #DBEAFE | Pills, badges |
| accent.DEFAULT | #0EA5E9 | Secondary accents |
| surface.DEFAULT | #F8FAFC | Page background |
| surface.card | #FFFFFF | Card backgrounds |
| brand.text | #0F172A | Primary text |
| brand.muted | #64748B | Secondary text |
| brand.border | #E2E8F0 | Borders, dividers |
| brand.success | #10B981 | Success, check icons |

## TYPOGRAPHY

Font: **Inter** (via next/font/google, display: swap, variable: --font-inter)

### Heading Scale
| Class | Size | Use |
|-------|------|-----|
| .heading-display | 4xl → 5xl → 6xl | Hero headlines |
| .heading-1 | 3xl → 4xl | H1 page titles |
| .heading-2 | 2xl → 3xl | Section headings |
| .heading-3 | xl → 2xl | Card/sub headings |

### Body Scale
| Class | Use |
|-------|-----|
| .body-lg | Large body / subtitles |
| .body-base | Standard body copy |

## SPACING SYSTEM

| Token | Value | Use |
|-------|-------|-----|
| .section-pad-sm | py-8 md:py-12 | Compact sections |
| .section-pad | py-12 md:py-20 | Standard sections |
| .section-pad-lg | py-16 md:py-28 | Hero sections |
| .container-base | max-w-7xl mx-auto px-4/6/8 | Page width |

## BREAKPOINTS

Default Tailwind (no changes):
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## SHADOWS

| Token | Use |
|-------|-----|
| shadow-card | Default card shadow |
| shadow-card-hover | Card hover state |
| shadow-header | Sticky header |

## BORDER RADIUS

- Default: 0.5rem (rounded)
- Cards: 0.75rem (rounded-lg)
- Large cards: 1rem (rounded-xl)
- Extra large: 1.25rem (rounded-2xl)

## COMPONENTS

### Button
```tsx
<Button variant="primary|secondary|outline|ghost" size="sm|md|lg" href="/url">
  Label
</Button>
```

### Container
```tsx
<Container size="sm|md|lg|full">...</Container>
```

### Section
```tsx
<Section id="anchor" spacing="sm|md|lg" className="bg-white">...</Section>
```

### FAQ (zero JS)
```tsx
<FAQ title="..." faqs={[{ question, answer }]} />
// Auto-injects FAQPage JSON-LD schema
```

### Steps
```tsx
<Steps title="..." steps={[{ number, title, description }]} />
```

### Hero
```tsx
<Hero
  title="..."
  subtitle="..."
  primaryCTA={{ text, href }}
  secondaryCTA={{ text, href }}
  badges={["Trust 1", "Trust 2"]}
/>
```

## AVOID

- Heavy motion / animation libraries
- Visual clutter
- Large gradients
- Excessive JS
- Inline styles (use Tailwind classes)
