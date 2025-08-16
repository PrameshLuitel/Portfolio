# Pramesh Luitel Portfolio - Theme Guide

Use this guide to replicate the exact theme and styling of this portfolio website for your Vestara AI project.

## 1. Color Palette (for `globals.css`)

This project uses CSS variables for theming with `shadcn/ui`. Copy the following code into your `src/app/globals.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 210 40% 98%; /* Clean off-white with a hint of blue */
    --foreground: 215 25% 27%; /* Dark, readable slate blue for text */

    --card: 210 40% 100%; /* Pure white for cards to pop */
    --card-foreground: 215 25% 27%;

    --popover: 210 40% 100%;
    --popover-foreground: 215 25% 27%;

    --primary: 221 100% 65%; /* Light, "electric" blue */
    --primary-foreground: 210 40% 98%;

    --secondary: 210 40% 96.1%; /* Light, cool gray-blue */
    --secondary-foreground: 215 25% 27%;
    
    --muted: 210 40% 96.1%;
    --muted-foreground: 215 28% 45%;

    --accent: 210 40% 94.1%; /* Slightly darker gray-blue for hover effects */
    --accent-foreground: 215 25% 27%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221 100% 65%;
  }

  .dark {
    --background: 162 75% 8%; /* Dark Desaturated Emerald */
    --foreground: 158 10% 95%;

    --card: 162 75% 10%; /* Slightly lighter than background */
    --card-foreground: 158 10% 95%;

    --popover: 162 75% 8%;
    --popover-foreground: 158 10% 95%;

    --primary: 90 100% 50%; /* Electric Green */
    --primary-foreground: 162 75% 8%;

    --secondary: 158 100% 18%; /* Darker Emerald for secondary elements */
    --secondary-foreground: 158 10% 95%;

    --muted: 158 100% 15%;
    --muted-foreground: 158 10% 65%;

    --accent: 158 100% 22%; /* Deep Emerald Green for accents/hovers */
    --accent-foreground: 158 10% 95%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 158 100% 18%;
    --input: 158 100% 18%;
    --ring: 90 100% 50%;
  }
}
```

## 2. Typography

### A. Google Fonts (for `layout.tsx`)

Add these `<link>` tags to the `<head>` of your root layout file to load the required fonts.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@700&display=swap" rel="stylesheet" />
```

### B. Tailwind CSS Configuration (for `tailwind.config.ts`)

Add the `fontFamily` extension to your `tailwind.config.ts` file.

```javascript
// tailwind.config.ts
// ...
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['"Space Grotesk"', 'sans-serif'],
        code: ['monospace'],
      },
// ...
```

## 3. `shadcn/ui` Configuration

This project uses `shadcn/ui`. To ensure your new project has the same setup, use the following configuration in your `components.json` file.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

By following these steps, you will have a new project with a theme that is an identical match to this one.
