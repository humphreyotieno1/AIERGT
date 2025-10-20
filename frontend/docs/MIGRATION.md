# Database Migration & Seeding Guide

This guide documents how to apply Prisma migrations and seed the AIERGT database from a local machine or as part of deployment automation.

## Prerequisites
- Bun or Node.js installed locally
- PostgreSQL connection string (Neon production/staging)
- Prisma CLI via project dependencies (`bunx prisma` or `npx prisma`)

## Environment Variables
Export `DATABASE_URL` before running commands. Example (Neon pooled URL):

```bash
export DATABASE_URL="postgresql://neondb_owner:npg_mGDQda2n9TCZ@ep-patient-hat-a84iwy5c-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
```

> Omit `channel_binding=require`; Prisma’s PostgreSQL driver does not support it.

## Local Workflow
Run these from `frontend/`:

```bash
# 1. Install dependencies
bun install

# 2. Regenerate Prisma client (when schema changes)
bunx prisma generate

# 3. Apply migrations to target DB
DATABASE_URL="<postgres-url>" bunx prisma migrate deploy

# 4. Seed database (uses Node to avoid bun + bcrypt issues)
DATABASE_URL="<postgres-url>" bun run db:seed

# 5. Optional verification
bunx prisma studio   # inspect data
bun run dev          # smoke-test the app
```

Replace `<postgres-url>` with your Neon connection string.

### Seed Command Behaviour
- `package.json` defines `"db:seed": "node prisma/seed.ts"`, ensuring the seed runs via Node for consistent module resolution.
- Prisma still reads `"prisma": { "seed": "tsx prisma/seed.ts" }`, so `prisma db seed` works when invoked through Node.

## Deployment Integration
1. **Pre-deploy step (recommended)**: run `prisma migrate deploy` and, when needed, `node prisma/seed.ts` via CI or manually before production deploys.
2. **Vercel build**: the `build` script (`prisma generate && next build`) regenerates the Prisma client inside the build container.
3. **Environment configuration**: ensure `DATABASE_URL` and other Prisma-required variables are set in Vercel project settings.

## Troubleshooting
| Symptom | Resolution |
| --- | --- |
| `Module not found: Can't resolve '@/lib/generated/prisma'` | Switch imports to `@prisma/client` and run `prisma generate`. |
| `Cannot find module './cjs/index.cjs'` during seeding | Run `node prisma/seed.ts` (or swap to an ESM-friendly hashing library). |
| `Environment variable not found: DATABASE_URL` | Export `DATABASE_URL` before running Prisma commands. |

## References
- https://www.prisma.io/docs/reference/api-reference/command-reference
- https://neon.tech/docs/connect/connecting
- https://vercel.com/docs/projects/project-configuration#build-and-development-settings
