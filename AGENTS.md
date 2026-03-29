# Agent Instructions for astro-micro

This is an Astro 5.x blog project using the Astro Micro theme. It uses Bun for package management and is deployed to Cloudflare Pages.

## Build Commands

```bash
# Development server
bun run dev

# Production build (includes type checking)
bun run build

# Preview locally with Wrangler
bun run preview

# Deploy to Cloudflare Pages
bun run deploy

# Generate Cloudflare types
bun run cf-typegen
```

## Lint/Format Commands

```bash
# Format all files with Prettier
bunx prettier --write .

# Check formatting
bunx prettier --check .

# Type checking (via astro check, runs automatically during build)
bunx astro check
```

**Note:** No test runner is configured. Add tests using your preferred framework (Vitest recommended for Astro projects).

## Tech Stack

- **Framework:** Astro 5.x with TypeScript (strict mode)
- **Styling:** Tailwind CSS 4.x + DaisyUI 5.x
- **Components:** Astro components (`.astro` files), no React/Vue/etc
- **Content:** Markdown + MDX via `astro:content`
- **Package Manager:** Bun (uses `bun.lock`)
- **Deployment:** Cloudflare Pages via Wrangler
- **Search:** Pagefind
- **Font:** Noto Sans (variable) + Fira Code

## Code Style Guidelines

### Imports

- Use path aliases with `@` prefix: `@components`, `@layouts`, `@lib`, `@consts`, `@types`
- Group imports: 1) Astro built-ins, 2) External libs, 3) Internal aliases, 4) Relative imports
- Astro components use `import X from "@components/X.astro"`
- Use double quotes for strings

### Formatting

- Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`
- 2-space indentation
- Semicolons required
- Tailwind classes are automatically sorted by Prettier

### Naming Conventions

- **Components:** PascalCase (`ArrowCard.astro`, `ContactForm.astro`)
- **Constants:** SCREAMING_SNAKE_CASE in `consts.ts`
- **Types:** PascalCase in `types.ts`
- **Functions/Variables:** camelCase
- **Files:** Lowercase with hyphens for utilities, PascalCase for components

### TypeScript

- Strict mode enabled
- Always define Props interfaces in Astro components: `type Props = { ... }`
- Use `Astro.props` destructuring with defaults
- Content collections use Zod schemas in `content.config.ts`

### Astro Patterns

- Frontmatter script uses `---` fences
- Component props use TypeScript types
- Use `astro:content` for blog posts and projects collections
- Use `astro:transitions` for view transitions
- Client-side scripts use `is:inline` directive
- Slots for component content injection

### Styling

- Use Tailwind utility classes exclusively
- Use the `cn()` utility from `@lib/utils` for conditional classes
- Dark mode support via `dark:` prefixes
- Theme toggle uses localStorage + data-theme attribute
- Custom CSS goes in `src/styles/app.css` (imported in Head.astro)

### Error Handling

- Check for optional elements before attaching event listeners
- Use optional chaining (`?.`) for potentially null DOM elements
- Validate external data with Zod schemas in content collections

## Project Structure

```
src/
  components/     # Astro components (PascalCase)
  layouts/        # Layout components
  pages/          # Route pages
  content/        # Markdown/MDX content
    blog/         # Blog posts
    projects/     # Project pages
  lib/            # Utilities (camelCase)
  consts.ts       # Site constants (SCREAMING_SNAKE_CASE)
  types.ts        # TypeScript types
  content.config.ts # Content collections schemas
  styles/         # CSS/SCSS files
public/           # Static assets
dist/             # Build output
```

## Environment

- Copy `.env` to `.env.production` for production vars
- Use `.dev.vars` for local development with Wrangler
- Cloudflare bindings configured in `wrangler.jsonc`

## Common Tasks

**Add a new blog post:**
Create `src/content/blog/my-post.mdx` with frontmatter: title, description, date, tags (optional), draft (optional)

**Add a new component:**

1. Create file in `src/components/ComponentName.astro`
2. Define Props type at top of script
3. Export as default or named export

**Add a new route:**
Create `src/pages/route-name/index.astro` or use dynamic routes like `[...id].astro`

**Styling component:**
Use Tailwind classes directly. For conditional classes, use `cn()` from `@lib/utils`:

```astro
class={cn("base-classes", condition && "conditional-classes")}
```
