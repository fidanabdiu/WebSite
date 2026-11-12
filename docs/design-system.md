# Design system

The site uses a restrained technical identity informed by the clarity and product focus of the .NET ecosystem, combined with a personal engineering consultancy voice. Microsoft is an inspiration reference only; the site does not use Microsoft branding, logos or proprietary illustrations.

## Color tokens

| Token | Value | Use |
| --- | --- | --- |
| `--navy` | `#17152B` | Hero, expertise and contact surfaces |
| `--navy-2` | `#211E3C` | Secondary dark tone |
| `--purple` | `#512DA8` | Brand links and strong accents |
| `--violet` | `#7043D6` | Interactive and section accents |
| `--violet-bright` | `#8B5CF6` | Primary button |
| `--lavender` | `#A5B4FC` | Dark-surface highlight |
| `--paper` | `#F5F4F9` | Soft page and section backgrounds |
| `--white` | `#FFFFFF` | Cards and light surfaces |
| `--surface` | `#EEEDF4` | Credibility strip and neutral panels |
| `--ink` | `#211F32` | Main text |
| `--muted` | `#626074` | Secondary text |
| `--line` | `#D9D7E4` | Light dividers and borders |

Colors are defined in `:root` in `css/styles.css`. Prefer the tokens over new one-off colors. Dark sections use light text; check contrast when adding a new pairing.

## Typography

Use system sans-serif stacks (`Segoe UI`, `Helvetica Neue`, Arial) for interface and body text, with a system monospace stack for technical labels. No remote font request is made. Headings use compact line-height, negative tracking and fluid `clamp()` sizes. Keep paragraphs to readable line lengths.

## Spacing and layout

- `.section-shell` centers content and applies the shared fluid page gutter and maximum width.
- Section spacing uses `--section-space`; component spacing is expressed in `rem`.
- Use CSS Grid for major asymmetrical layouts and flexbox for inline controls, nav and tag groups.
- The hero is the primary dark visual surface; the credibility and service areas use light neutral surfaces. The architecture illustration is a generic authored diagram, not a client system screenshot.

## Components and page patterns

- **Navigation:** sticky white header, supplied dark wordmark, section links and a text-outline project CTA. On small screens, the button is visible only when JavaScript enhancement is active; otherwise the links remain available.
- **Buttons:** `.button` base with `.button-violet`, `.button-outline-light` and `.button-outline-dark` variants. Keep tap targets at least 44px high.
- **Service cards:** `.service-card` uses a thin border, square corners, restrained hover lift and explicit capability labels.
- **Expertise rows:** dark surface with text groupings; do not turn the section into a logo wall.
- **Experience cards:** factual organization/industry context, description and technology line. Keep collaboration attribution clear.
- **Forms:** visible labels, native `required` and `type="email"` validation, clear optional text, and a note that submission opens an email draft only.
- **Service detail pages:** shared dark hero, breadcrumb, content/aside grid, related service links and CTA band.

## Responsive breakpoints

Breakpoints currently live in `css/responsive.css`:

- `1020px`: reduce desktop navigation and spacing.
- `780px`: switch navigation to mobile control and stack major page layouts.
- `560px`: single-column cards/form, compact typography and mobile spacing.
- `360px`: narrow-phone adjustments.

Use content-appropriate reflow rather than shrinking desktop columns. Check at wide desktop, tablet, 390px and 320–360px widths when a browser is available.

## Motion and focus

Hover transitions are short and limited to buttons/cards. `prefers-reduced-motion: reduce` disables smooth scrolling and nearly removes transition/animation duration. Keyboard focus is visible through the shared `:focus-visible` outline. Do not remove it or rely on color alone to communicate meaning.
