# astro-orbit

A theme package for [Astro](https://astro.build) projects featuring a design system, reusable components, and Tailwind CSS v4 integration.

## Features

- 🎨 **Design System** - Pre-configured color palette with primary, secondary, accent, and neutral colors.
- 🧩 **Reusable Components** - Pre-built Astro components (Button, Card, etc).
- ⚡ **Tailwind CSS v4** - Integrated with the latest Tailwind CSS via Vite plugin with an extendable theme.
- 📦 **Typescript** - Full TypeScript support with comprehensive prop interfaces.
- 🎯 **Zero Config** - Works out of the box with minimal setup.

## Installation

```bash
npm install astro-orbit
```

## Usage

First, import the integration into your Astro config:

```js
import { defineConfig } from "astro/config";
import astroOrbit from "astro-orbit";

export default defineConfig({
  integrations: [
    astroOrbit()
  ],
});
```

Then, add the theme stylesheet to your pages:

```astro
---
import 'astro-orbit/theme.css`;
---

<html />
```

### Using components

Astro Orbit comes with components out of the box that can be added to your pages.

```astro
---
import { Button } from 'astro-orbit/components';
---

<Button href="https://example.com">
  Click me!
</Button>
```

### Extending the theme

You can extend the theme by creating your own stylesheet and importing this into your pages:

```css
@import "astro-orbit/theme.css";

:root {
  --font-sans: "Helvetica Neue", "Arial", sans-serif;
}
```

## Contributing

Contributors welcome! Please submit an issue or pull request.

## License

See the [LICENSE](LICENSE) for license rights and limitations (Apache License 2.0).