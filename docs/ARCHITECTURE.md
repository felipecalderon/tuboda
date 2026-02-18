# Arquitectura Inicial (Next.js + RSC)

## Objetivo

Construir una base escalable para crecer hacia un marketplace de servicios para bodas sin mezclar reglas de negocio con UI o rutas.

## Estructura

```text
app/
  layout.tsx
  (marketing)/
    page.tsx
src/
  shared/
    config/
    lib/
    ui/
  entities/
    service/
      api/
      model/
  widgets/
    marketing/
  views/
    marketing/
```

## Responsabilidades por capa

- `app/`
  - Define rutas, layouts, metadata y boundaries de Next.
  - Debe ser delgada: orquesta, no contiene negocio complejo.

- `src/entities/*`
  - Define tipos de dominio.
  - Expone funciones de acceso a datos (`api/`) que pueden ejecutarse en servidor.

- `src/widgets/*`
  - Secciones UI reutilizables de una pantalla.
  - Reciben datos ya preparados.

- `src/views/*`
  - Componen widgets para una vista concreta.
  - No acceden directo a infraestructura.

- `src/shared/*`
  - UI transversal, configuración global y utilidades comunes.

## Convenciones recomendadas

- Mantener `@/*` apuntando a `src/*`.
- Para fetch de backend real, usar funciones server-only en `entities/*/api`.
- Evitar que componentes cliente (`"use client"`) importen módulos server-only.
- Definir una carpeta de entidad por cada bounded context relevante:
  - `entities/vendor`
  - `entities/planning`
  - `entities/booking`
  - `entities/payment`

## Siguiente evolución sugerida

- Agregar `src/features/` para casos de uso (ejemplo: búsqueda, filtros, checkout).
- Incorporar validación de entorno (`env`) y cliente HTTP tipado.
- Añadir pruebas:
  - Unitarias para `entities`.
  - Integración para rutas SSR clave.
