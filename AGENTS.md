# Agent Instructions for astro-micro

This is an Astro 5.x blog project using the Astro Micro theme. It uses Bun for package management and deploys to Cloudflare Pages.

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

# Type checking
bunx astro check

# Format single file
bunx prettier --write path/to/file.astro
```

**Testing:** No test runner is configured. To add tests, install Vitest with `bun add -D vitest @vitest/ui`. Run single tests with `bunx vitest run path/to/test.ts`.

## Tech Stack

- **Framework:** Astro 5.x with TypeScript (strict mode)
- **Styling:** Tailwind CSS 4.x + DaisyUI 5.x with typography plugin
- **Components:** Astro components (`.astro` files) only, no React/Vue
- **Content:** Markdown + MDX via `astro:content` with Zod schemas
- **Package Manager:** Bun (uses `bun.lock`)
- **Deployment:** Cloudflare Pages via Wrangler
- **Search:** Pagefind integration
- **Fonts:** Noto Sans Variable + Fira Code Variable

## Code Style Guidelines

### Imports

- Use path aliases with `@` prefix: `@components`, `@layouts`, `@lib`, `@consts`, `@types`
- Group imports: 1) Astro built-ins, 2) External libs, 3) Internal aliases, 4) Relative imports
- Astro components use `import X from "@components/X.astro"`
- Use double quotes for strings consistently

### Formatting

- Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`
- 2-space indentation, semicolons required
- No trailing commas in multi-line objects
- Tailwind classes automatically sorted by Prettier
- Reference stylesheet: `./src/styles/app.css`

### Naming Conventions

- **Components:** PascalCase (`ArrowCard.astro`, `ContactForm.astro`)
- **Constants:** SCREAMING_SNAKE_CASE in `consts.ts`
- **Types:** PascalCase in `types.ts`
- **Functions/Variables:** camelCase
- **Files:** Lowercase with hyphens for utilities, PascalCase for components

### TypeScript

- Strict mode enabled via `astro/tsconfigs/strict`
- Path alias: `"@*": ["./src/*"]`
- Always define Props interfaces: `type Props = { ... }`
- Use `Astro.props` destructuring with defaults
- Content collections use Zod schemas in `content.config.ts`

### Astro Patterns

- Frontmatter script uses `---` fences
- Use `astro:content` for blog/projects collections
- Use `astro:transitions` for view transitions via `ClientRouter`
- Client-side scripts use `is:inline` directive
- Slots for component content injection
- Collections use `glob` loader for MDX and `file` loader for JSON

### Styling

- Tailwind utility classes exclusively
- Use `cn()` from `@lib/utils` for conditional class merging
- Dark mode via `dark:` prefixes and `data-theme` attribute
- Custom CSS in `src/styles/app.css` imported by Head.astro
- DaisyUI themes: light (default) and dark

### Error Handling

- Check optional elements before attaching event listeners
- Use optional chaining (`?.`) for potentially null DOM elements
- Validate external data with Zod schemas in content collections
- Event handlers check element existence before operations

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
  styles/         # CSS/SCSS files (app.css entry)
public/           # Static assets
functions/        # Cloudflare Functions
dist/             # Build output
```

## Environment

- Copy `.env` to `.env.production` for production vars
- Use `.dev.vars` for local development with Wrangler
- Cloudflare bindings configured in `wrangler.jsonc`

## Common Tasks

**Add a blog post:**
Create `src/content/blog/my-post.mdx` with frontmatter: `title`, `description`, `date`, `tags` (optional), `draft` (optional).

**Add a component:**
Create `src/components/ComponentName.astro` with `type Props = { ... }` at top.

**Add a route:**
Create `src/pages/route-name/index.astro` or use dynamic routes like `[...id].astro`.

**Conditional styling:**
Use `cn()` utility: `class={cn("base", condition && "active")}`.

**Content collections:**
Define in `content.config.ts` using `defineCollection()` with Zod schema and appropriate loader (`glob` or `file`).
