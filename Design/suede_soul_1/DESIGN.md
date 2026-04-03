# Design System Strategy: Tactile Minimalism

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Tactile Gallery."** 

Unlike traditional e-commerce platforms that rely on rigid grids and clinical white spaces, this system treats the digital interface as a physical curation of texture and warmth. We are not just selling shoes; we are translating the sensory experience of suede—its nap, its softness, and its depth—into a digital medium. 

To achieve this, we move away from "template-style" layouts. We embrace **Intentional Asymmetry** and **Editorial Layering**. Large-scale typography will occasionally overlap high-fidelity product photography, and content will bleed off the edges of containers to suggest a world that exists beyond the frame. This system is designed to feel like a high-end fashion monograph: spacious, authoritative, and deeply textural.

## 2. Color Strategy: The Tonal Landscape
The palette is a sophisticated interplay between the earthen strength of `primary` (#8b4f2d) and the soft, inviting glow of `primary_container` (#e69b73).

*   **The "No-Line" Rule:** This is the most critical mandate. Designers are strictly prohibited from using 1px solid borders to define sections. Layout boundaries must be established solely through background color shifts. For example, a `surface_container_low` (#f4f3f1) section should sit directly against a `surface` (#faf9f6) background to create a "ghost" edge that feels organic rather than mechanical.
*   **Surface Hierarchy & Nesting:** Treat the UI as a series of stacked, premium papers. Use the `surface_container` tiers to create depth. A product card should not use a shadow; instead, place a `surface_container_lowest` (#ffffff) card on a `surface_container` (#efeeeb) section. This creates a soft, "nested" lift that feels architectural.
*   **The "Glass & Gradient" Rule:** To mirror the way light hits suede, use subtle linear gradients. When designing hero sections, transition from `primary` to `primary_container` at a 135-degree angle to provide a "soulful" depth. For floating navigation or overlays, utilize `surface` with a 70% opacity and a 20px backdrop-blur to create a "frosted glass" effect.
*   **Signature Textures:** Use `tertiary_container` (#c5a881) for secondary calls-to-action or highlighted editorial quotes. It provides a "tan" counterpoint that bridges the gap between the dark chocolates and soft peaches.

## 3. Typography: Editorial Authority
We pair **Epilogue** (Headings) with **Manrope** (Body) to balance character with contemporary utility.

*   **Display & Headlines (Epilogue):** These are our "statements." Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero headlines. Epilogue’s unique character quirks should be celebrated—let it be the focal point of the page.
*   **Titles & Body (Manrope):** Manrope provides a clean, breathable contrast to the expressive headings. Use `body-lg` (1rem) for product descriptions with a generous line-height (1.6) to maintain an airy, premium feel.
*   **The Label System:** `label-md` and `label-sm` should always be set in all-caps with a +0.05em letter-spacing. This evokes the feel of a luxury clothing tag or a gallery plaque.

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "digital" for this system. We convey hierarchy through ambient light and material stacking.

*   **The Layering Principle:** Depth is achieved by placing lighter surfaces on darker ones. An inner container should always be at least one tier different from its parent (e.g., `surface_container_high` sitting on `surface_container_low`).
*   **Ambient Shadows:** If a floating element (like a Cart Drawer) requires a shadow, it must be "Ambient." Use the `on_surface` color at 4% opacity with a 40px blur and a 10px Y-offset. It should feel like a soft glow, not a hard shadow.
*   **The "Ghost Border" Fallback:** In rare cases where accessibility requires a border (e.g., an input field), use the `outline_variant` (#d8c2b8) at 20% opacity. If the border is 100% opaque, the design has failed its premium objective.
*   **Glassmorphism:** Use semi-transparent layers for persistent headers. By allowing the rich `primary` tones of product photography to bleed through the `surface` blur, the UI feels integrated into the content, rather than sitting on top of it.

## 5. Components & Interactions

*   **Buttons:**
    *   **Primary:** `primary` (#8b4f2d) background with `on_primary` (#ffffff) text. Use `md` (0.375rem) roundedness. No borders.
    *   **Secondary:** `primary_container` (#e69b73) with a subtle gradient.
    *   **Tertiary:** Text-only with an `outline_variant` underline that expands on hover.
*   **Input Fields:**
    *   Avoid boxy outlines. Use a `surface_container_high` background with a `none` border and a 2px `primary` bottom-bar that animates in width upon focus.
*   **Product Cards:**
    *   **Forbid dividers.** Use vertical whitespace (32px - 48px) to separate the image from the product title. The image should have a `sm` (0.125rem) radius—almost sharp, but softened just enough to feel premium.
*   **Chips:**
    *   Use `secondary_fixed` (#ffdbd0) for "New Arrival" or "Limited Edition" tags. The text should be `on_secondary_fixed_variant` (#5d4037).
*   **Editorial Spacing:**
    *   Implement a "Breathing Grid." Use 128px or 160px margins for desktop hero sections. Don't be afraid of "empty" space; it is a luxury commodity in this design system.

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical image placements. Align a product photo to the left and its description to the far right, leaving a "void" in the center.
*   **Do** use `surface_dim` (#dbdad7) for footer backgrounds to ground the experience in a heavier, more permanent tone.
*   **Do** ensure all product photography is shot against warm, neutral backdrops that complement the `surface` (#faf9f6) color.

### Don't:
*   **Don't** use pure black (#000000). Use `on_background` (#1a1c1a) for all text to maintain the "soft" visual profile.
*   **Don't** use standard 1px dividers to separate list items. Use a 12px gap and a subtle background shift to `surface_container_low`.
*   **Don't** use high-intensity "Call to Action" colors like bright blue or green. Every interaction must live within the apricot-to-chocolate spectrum.