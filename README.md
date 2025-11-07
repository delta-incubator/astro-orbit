# astro-orbit

A comprehensive theme package for Astro projects featuring a modern design system, reusable components, and Tailwind CSS v4 integration.

## Features

- 🎨 **Complete Design System** - Pre-configured color palette with primary, secondary, accent, and neutral colors
- 🧩 **Reusable Components** - Pre-built Astro components (Button, Card, Container, Input, Section)
- ⚡ **Tailwind CSS v4** - Integrated with the latest Tailwind CSS via Vite plugin
- 📦 **Type-Safe** - Full TypeScript support with comprehensive prop interfaces
- 🎯 **Zero Config** - Works out of the box with minimal setup

## Installation

```bash
npm install astro-orbit
```

## Peer Dependencies

This package requires Astro v5.0.0 or higher.

## Quick Start

### 1. Add the Integration

In your `astro.config.mjs` (or `astro.config.ts`):

```js
import { defineConfig } from 'astro/config';
import { plugin } from 'astro-orbit';

export default defineConfig({
  integrations: [
    plugin()
  ],
});
```

### 2. Import the Theme CSS

In your main layout file or a global CSS file:

```css
@import 'astro-orbit/theme.css';
```

### 3. Use the Components

```astro
---
import { Button, Card, Container, Input, Section } from 'astro-orbit/components';
---

<Section>
  <Button href="/about">Learn More</Button>
</Section>
```

## Components

### Button

A flexible button component that can render as either a `<button>` or `<a>` element.

```astro
---
import { Button } from 'astro-orbit/components';
---

<!-- As a button -->
<Button type="submit" color="primary">Submit</Button>

<!-- As a link -->
<Button href="/about" color="secondary">About Us</Button>

<!-- Full width button -->
<Button isFullWidth color="accent">Get Started</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `unknown` | - | Button label/contents |
| `href` | `string \| undefined` | `undefined` | URL to link to - if set, renders as `<a>` |
| `color` | `"primary" \| "secondary" \| "accent" \| "neutral" \| "white"` | `"primary"` | Button color variant |
| `type` | `"button" \| "submit"` | - | HTML button type (only for button elements) |
| `isFullWidth` | `boolean` | `false` | Whether the button should be full width |
| `className` | `string \| undefined` | `undefined` | Additional CSS classes |

### Card

A versatile card component supporting blog posts and benefit cards with optional images, icons, and metadata.

```astro
---
import { Card } from 'astro-orbit/components';
---

<!-- Blog card -->
<Card
  type="blog"
  title="Getting Started with Astro"
  url="/blog/getting-started"
  image="/blog-image.jpg"
  badge="GUIDE"
  date="2024-01-15"
  isFeatured={true}
>
  Learn how to build fast websites with Astro.
</Card>

<!-- Benefit card -->
<Card
  type="benefit"
  title="Fast Performance"
  icon="/icon-speed.svg"
>
  Lightning-fast page loads and optimal performance.
</Card>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title (required) |
| `url` | `string \| undefined` | `undefined` | Optional URL to make the card clickable |
| `icon` | `AstroImage \| undefined` | `undefined` | Icon image (for benefit cards) |
| `image` | `AstroImage \| undefined` | `undefined` | Main image (for blog cards) |
| `badge` | `string` | `"GUIDE"` | Badge/label text |
| `date` | `string \| undefined` | `undefined` | Date string to display |
| `description` | `string \| undefined` | `undefined` | Card description (or use slot) |
| `type` | `"blog" \| "benefit"` | - | Card type (required) |
| `isFeatured` | `boolean` | `false` | Whether this is a featured card (blog only) |
| `className` | `string \| undefined` | `undefined` | Additional CSS classes |

**Note:** You can also use the default slot for card content instead of the `description` prop.

### Container

A responsive container component that centers content and adjusts width based on screen size.

```astro
---
import { Container } from 'astro-orbit/components';
---

<Container id="main-content" className="custom-class">
  <h1>Welcome</h1>
  <p>Your content here</p>
</Container>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `unknown` | - | Content to wrap |
| `id` | `string \| undefined` | `undefined` | HTML ID attribute |
| `className` | `string \| undefined` | `undefined` | Additional CSS classes |

### Input

A styled input component for forms.

```astro
---
import { Input } from 'astro-orbit/components';
---

<Input
  type="email"
  name="email"
  placeholder="Enter your email"
  id="email-input"
  isFullWidth={true}
/>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `"email" \| "number" \| "text"` | - | Input type (required) |
| `name` | `string` | - | Input name attribute (required) |
| `value` | `string \| undefined` | `undefined` | Input value |
| `placeholder` | `string \| undefined` | `undefined` | Placeholder text |
| `isFullWidth` | `boolean` | `false` | Whether the input should be full width |
| `id` | `string \| undefined` | `undefined` | HTML ID attribute |
| `className` | `string \| undefined` | `undefined` | Additional CSS classes |

### Section

A section wrapper component with responsive padding and an integrated Container.

```astro
---
import { Section } from 'astro-orbit/components';
---

<Section padding="lg" id="hero-section">
  <h1>Hero Section</h1>
</Section>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `unknown` | - | Section content |
| `padding` | `"xl" \| "lg" \| "md" \| "sm" \| "none"` | `"md"` | Vertical padding size |
| `id` | `string \| undefined` | `undefined` | HTML ID attribute |
| `className` | `string \| undefined` | `undefined` | Additional CSS classes |
| `idContainer` | `string \| undefined` | `undefined` | ID for the inner Container |
| `classNameContainer` | `string \| undefined` | `undefined` | CSS classes for the inner Container |

## Theme System

The theme includes a comprehensive color system defined in OKLCH color space for better color consistency:

### Color Palette

- **Primary** (Blue) - `primary-50` through `primary-950`
- **Secondary** (Slate) - `secondary-50` through `secondary-950`
- **Accent** (Fuschia) - `accent-50` through `accent-950`
- **Neutral** - `neutral-0` through `neutral-950`

### Using Theme Colors

Colors are available as CSS custom properties and Tailwind utilities:

```css
/* Using CSS custom properties */
.my-element {
  background-color: var(--color-primary-500);
  color: var(--color-primary-button-text);
}

/* Using Tailwind classes */
<div class="bg-primary-500 text-primary-button-text">
  Content
</div>
```

### Custom Utilities

The theme includes custom utilities for color manipulation:

- `darken-*` - Darkens a color by 10%
- `lighten-*` - Lightens a color by 10%

## Package Exports

The package exports the following:

- **Main export** (`astro-orbit`) - The Astro integration plugin
- **Components** (`astro-orbit/components`) - All components
- **Individual components** (`astro-orbit/components/Button.astro`, etc.) - Individual component imports
- **Theme CSS** (`astro-orbit/theme.css`) - The theme stylesheet

## TypeScript Support

All components are fully typed. The package includes TypeScript definitions and works seamlessly with Astro's TypeScript support.

## Browser Support

This package supports all modern browsers that support:
- CSS Custom Properties
- Flexbox
- CSS Grid (where used)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

Apache License

## Author

Yufa Li

## Repository

[GitHub Repository](https://github.com/delta-incubator/astro-orbit)

## Issues

[Report Issues](https://github.com/delta-incubator/astro-orbit/issues)
