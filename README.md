# Xandra Swimwear - Sanity CMS Backend

Headless CMS backend built with Sanity Studio to power content management for the Xandra Swimwear e-commerce storefront. Provides a custom content authoring experience for marketing pages, editorial content, and product enrichment.

**Tech Stack:** Sanity Studio • TypeScript • React • Structured Content

**Related:** [Xandra Swimwear Hydrogen Frontend](https://github.com/EricJamesCrow/xandra-swimwear-hydrogen)

---

## Project Overview

While Shopify handled core product data and e-commerce functionality, Xandra needed flexible content management for editorial pages, brand storytelling, and seasonal campaigns. This Sanity implementation provided a custom Studio interface for non-technical content editors.

### Key Features

- **Custom Content Models** - Structured schemas for landing pages, lookbooks, editorial content, and brand storytelling
- **Rich Media Management** - Image galleries, video embeds, and asset organization for seasonal campaigns
- **Preview Integration** - Real-time content preview integrated with the Hydrogen storefront
- **Portable Text** - Flexible rich text editing for editorial content with custom components

### Content Architecture

**Separation of Concerns** - Product data lives in Shopify; marketing content, editorial pages, and brand storytelling managed in Sanity

**Reusable Components** - Modular content blocks (hero sections, product spotlights, testimonials) that editors can compose into pages

**Type-Safe Integration** - Generated TypeScript types from Sanity schemas ensure type safety across the Hydrogen frontend

**Version Control** - Content versioning and draft/publish workflows for campaign coordination

### Content Models

```typescript
// Example schema structure
- Pages (Landing, About, Size Guide)
- Collections (Seasonal Lookbooks, Editorial)
- Modules (Hero, Product Grid, Testimonials, Gallery)
- Settings (Site metadata, navigation, footer)
- Media (Image assets with metadata)
```

### Studio Customization

**Custom Input Components** - Purpose-built editing interfaces for swimwear-specific content (size charts, fabric details, care instructions)

**Image Hotspot Support** - Focal point selection for responsive image cropping across devices

**Editorial Workflow** - Draft/publish states with scheduling for seasonal content releases

**Asset Organization** - Tagging and categorization system for managing large media libraries

---

## Technical Implementation

**TypeScript Throughout** - Fully typed schemas and content models for development safety

**GROQ Queries** - Optimized content fetching from Hydrogen frontend using Sanity's query language

**Real-Time Updates** - Webhook integration triggers Hydrogen rebuilds on content changes

**Image Pipeline** - Sanity's image CDN integration for automatic optimization and transformation

---

## Headless Architecture Benefits

This Sanity + Shopify + Hydrogen stack provided:

**Content Flexibility** - Marketing team controls storytelling without developer intervention

**Performance** - Content fetched server-side in Hydrogen, cached at edge

**Developer Experience** - Type-safe content integration with autocomplete in IDE

**Scalability** - Separate scaling concerns for content vs. commerce infrastructure

---

## Project Status

This was the content management layer for the Xandra Swimwear client project delivered in 2024. While no longer in production use, it demonstrates best practices for headless CMS architecture in e-commerce contexts.

The code showcases:
- ✅ Custom Sanity Studio configuration
- ✅ E-commerce content modeling patterns
- ✅ Type-safe schema definitions
- ✅ Integration architecture with Hydrogen frontend

---

## Local Development

```bash
# Install dependencies
npm install

# Start Sanity Studio
npm run dev

# Deploy Studio
npm run deploy
```

**Note:** Requires Sanity project ID and dataset configuration. See Sanity documentation for setup.

---

## Why Sanity for E-Commerce Content?

Chose Sanity over traditional CMS solutions for:
- **Content Modeling Flexibility** - Custom schemas for fashion-specific content types
- **Developer Experience** - React-based Studio, TypeScript support, modern tooling
- **API Performance** - Fast CDN-backed queries with GROQ
- **Image Handling** - Best-in-class image transformation and optimization
- **Separation of Concerns** - Product commerce in Shopify, marketing content in Sanity

---

*Built by Eric as part of the Xandra Swimwear headless e-commerce solution, demonstrating modern CMS architecture and content modeling.*
