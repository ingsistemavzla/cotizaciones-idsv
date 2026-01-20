# Cotizaciones IDSV

Sistema moderno de gestión de cotizaciones desarrollado con React, TypeScript y Vite para máximo rendimiento y experiencia de usuario.

## 🚀 Tecnologías

- **React 18** - Biblioteca de UI moderna
- **TypeScript** - Tipado estático para mayor seguridad
- **Vite** - Build tool ultra rápido
- **Tailwind CSS** - Framework CSS utility-first
- **React Router** - Navegación declarativa
- **Lucide React** - Iconos modernos y ligeros

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🏗️ Estructura del Proyecto

```
cotizaciones-idsv/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── ui/          # Componentes base (Button, Card, Input, etc.)
│   │   └── layout/      # Componentes de layout (Header, Footer, Layout)
│   ├── pages/           # Páginas de la aplicación
│   ├── utils/           # Utilidades y helpers
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── public/              # Archivos estáticos
└── index.html           # HTML principal
```

## 🎨 Componentes Disponibles

### UI Components
- **Button** - Botón con múltiples variantes y tamaños
- **Card** - Tarjeta contenedora con header, content y footer
- **Input** - Campo de entrada con label y validación
- **Modal** - Modal responsive con animaciones
- **Badge** - Etiquetas de estado
- **Spinner** - Indicador de carga

### Layout Components
- **Layout** - Wrapper principal con header y footer
- **Header** - Navegación responsive
- **Footer** - Pie de página

## 🎯 Características

- ✅ Arquitectura modular y escalable
- ✅ Componentes reutilizables y tipados
- ✅ Diseño responsive y moderno
- ✅ Animaciones suaves
- ✅ Optimizado para rendimiento
- ✅ TypeScript para type safety
- ✅ Tailwind CSS para estilos rápidos
- ✅ Routing con React Router

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter

## 🔧 Configuración

El proyecto está configurado con:

- **Path aliases** (`@/*`) para imports más limpios
- **Code splitting** automático para optimización
- **Hot Module Replacement** para desarrollo rápido
- **PostCSS** y **Autoprefixer** para compatibilidad

## 🎨 Identidad Visual y Sistema de Diseño

Este proyecto incluye una guía completa de identidad visual para IDSV que debe seguirse en todos los desarrollos futuros.

### Configuración de Marca

La configuración de marca se encuentra en `src/config/brand.ts` e incluye:

- **Paleta de colores**: Azules profesionales (#0056B3) y rojos de acento (#D91E18)
- **Tipografía**: Segoe UI como fuente principal
- **Información de empresa**: Datos oficiales de IDSV
- **Logos**: Referencias a los logos oficiales
- **Espaciado y sombras**: Sistema de diseño consistente

Ver `src/config/brand.md` para la guía completa de uso.

### Componentes de Factura

El sistema incluye componentes especializados para facturas:

- `Invoice` - Componente principal
- `InvoiceHeader` - Encabezado con logo y número de factura
- `InvoiceInfo` - Información de emisor y cliente
- `InvoiceTable` - Tabla de items
- `InvoiceTotals` - Cálculo de totales
- `InvoicePaymentInstructions` - Instrucciones de pago
- Y más...

Accede a `/invoice` para ver una factura de ejemplo.

## 📄 Licencia

Este proyecto es privado y pertenece a IDSV.

