# Design System Specification: The Tactile Gallery

## 1. Overview & Creative North Star
**Creative North Star: "The Curated Earth"**

This design system moves beyond the sterile, flat world of traditional SaaS interfaces to embrace a "Tactile Gallery" aesthetic. Inspired by high-end editorial layouts and the physical depth of a curated suede gallery, the system relies on intentional asymmetry, rich tonal shifts, and "breathing" white space. 

Instead of traditional grids that box content in, we use **Organic Brutalism**—where strong, bold typography anchors the page, and elements are allowed to overlap and bleed into one another. The goal is to make the digital interface feel as though it were printed on heavy-meshed paper and illuminated by the warm glow of a Mediterranean sunset.

## 2. Color Strategy: Sunset & Clay
The palette is a transition from sterile neutrals to sun-drenched, earthy warmth. The shift to a richer primary orange (`#9c3f00`) provides a high-end, "burnt clay" sophistication that anchors the softer, tactile neutrals.

*   **Primary (`#9c3f00`):** Our hero color. Use this for moments of high intent—key CTAs, active states, and editorial accents.
*   **Secondary (`#665d54`):** A muted, stony taupe that grounds the vibrancy of the orange.
*   **The "No-Line" Rule:** Explicitly prohibit 1px solid borders for sectioning. Structural boundaries must be achieved through background color shifts. Use `surface-container-low` (`#fbf2ee`) against `surface` (`#fff8f5`) to define zones.
*   **The Glass & Gradient Rule:** To evoke a premium feel, main hero CTAs should utilize a subtle linear gradient from `primary` (`#9c3f00`) to `primary-container` (`#c45100`). This adds "soul" and prevents the flatness of generic UI.
*   **Glassmorphism:** For floating navigation or top-level overlays, use `surface` at 80% opacity with a `24px` backdrop-blur. This allows the sunset tones of the background to bleed through, creating a "frosted glass" effect.

## 3. Typography: The Editorial Voice
We pair the geometric confidence of **Epilogue** with the modern, functional clarity of **Manrope**.

*   **Display & Headline (Epilogue):** These are your "Gallery Signage." Use `display-lg` (3.5rem) with tight letter-spacing to create a high-fashion, editorial impact. Do not be afraid of massive contrast between headlines and body text.
*   **Body & Labels (Manrope):** The workhorse. Manrope’s open counters provide excellent readability. Use `body-lg` (1rem) for standard reading and `label-md` (0.75rem) for metadata.
*   **Visual Hierarchy:** Establish authority through scale. A `display-sm` headline should often sit next to a `body-sm` caption to create a "Big/Small" dynamic that feels curated rather than templated.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are largely replaced by **Tonal Layering**. We define importance by how "light" or "deep" a surface sits in the environment.

*   **The Layering Principle:** 
    *   Base layer: `surface` (`#fff8f5`)
    *   Nesting level 1: `surface-container-low` (`#fbf2ee`)
    *   Nesting level 2: `surface-container` (`#f5ece8`)
    *   Floating elements: `surface-container-lowest` (`#ffffff`)
*   **Ambient Shadows:** If a card must float, use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(31, 27, 25, 0.06)`. The shadow color is a tinted version of `on-surface`, never pure black.
*   **The Ghost Border:** If accessibility requires a stroke (e.g., in high-contrast modes), use `outline-variant` (`#e0c0b2`) at 20% opacity. 100% opaque borders are forbidden.

## 5. Components
Our components are tactile primitives. They should feel like physical objects placed on a gallery table.

*   **Buttons:**
    *   *Primary:* Solid `primary` (`#9c3f00`) with `on-primary` text. Border radius `DEFAULT` (0.25rem) for a sharp, bespoke look.
    *   *Secondary:* `secondary-container` (`#ebddd2`) with `on-secondary-container` text. No border.
*   **Cards:** Forbid divider lines. Use `surface-container-low` backgrounds and increased vertical padding (from the spacing scale) to separate content sections.
*   **Input Fields:** Ghost-style inputs. Use a `surface-variant` (`#eae1dd`) background with a 1px `outline` (`#8c7166`) that only appears on focus.
*   **Chips:** Use `secondary-fixed-dim` (`#d2c4ba`) for a "suede-like" muted texture.
*   **The Gallery Slider:** Custom component. Use overlapping images where the `primary` color is used as a decorative "matting" behind the photos.

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where text blocks are offset from image centers.
*   **Do** use `primary-fixed` (`#ffdbcc`) as a soft background for large content areas to immerse the user in the brand color without overwhelming them.
*   **Do** prioritize white space. If a layout feels "full," remove an element.

### Don’t:
*   **Don’t** use 1px solid borders to separate list items. Use `24px` of vertical white space instead.
*   **Don’t** use standard "Material" shadows. Keep elevations flat or use tonal shifts.
*   **Don’t** use high-contrast blacks. Use `on-surface` (`#1f1b19`) for all "black" text to maintain the warm, organic feel.
*   **Don’t** use fully rounded (pill) buttons for primary actions; keep them at `0.25rem` or `0.375rem` to maintain a structural, architectural feel.