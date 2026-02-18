# ExpoBodas

Base inicial para una plataforma de novios construida con Next.js (App Router), React Server Components y SSR.

## Stack

- Next.js 16 + React 19
- TypeScript estricto
- Tailwind CSS v4

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Arquitectura

Se usa una estructura por capas y dominio:

- `app/`: rutas y layouts de Next.js (entrypoints).
- `src/shared/`: piezas reutilizables globales (UI base, config, utilidades).
- `src/entities/`: modelos y acceso a datos por entidad de negocio.
- `src/widgets/`: bloques de interfaz compuestos para páginas.
- `src/views/`: composición final de pantallas.

La home está en `app/(marketing)/page.tsx` y consume datos SSR desde `src/entities/service/api/get-featured-services.ts`.

Ver detalle en `docs/ARCHITECTURE.md`.
