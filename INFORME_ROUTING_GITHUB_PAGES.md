# Informe: Problema de Routing en GitHub Pages

## 📋 Resumen Ejecutivo

Este documento explica el problema de routing que ocurrió con las rutas `/oferta-web-icmf-acca` y `/informe-web-2025` en GitHub Pages, su causa raíz, y las soluciones implementadas para evitar futuros fallos.

---

## 🔍 Problema Identificado

### Síntoma
Al acceder directamente a la URL:
```
https://ingsistemavzla.github.io/cotizaciones-idsv/informe-web-2025
```

Se mostraba incorrectamente el contenido de la página de cotización (`/oferta-web-icmf-acca`) en lugar del contenido del informe.

### Comportamiento Esperado
- `/oferta-web-icmf-acca` → Debe mostrar la página de cotización
- `/informe-web-2025` → Debe mostrar la página de informe

---

## 🏗️ Estructura del Proyecto

### Arquitectura de Routing

```
src/
├── App.tsx                    # Configuración principal de rutas
├── pages/
│   ├── QuotationTwoColumns.tsx      # Página de cotización
│   └── ReportExpenseScopePage.tsx    # Página de informe
└── components/
    ├── quotation/            # Componentes de cotización
    └── report/               # Componentes de informe
```

### Configuración de Rutas (App.tsx)

```tsx
<BrowserRouter basename="/cotizaciones-idsv">
  <Routes>
    <Route path="/" element={<Navigate to="/oferta-web-icmf-acca" replace />} />
    <Route path="/oferta-web-icmf-acca" element={<QuotationTwoColumnsPage />} />
    <Route path="/informe-web-2025" element={<ReportExpenseScopePage />} />
    <Route path="*" element={<Navigate to="/oferta-web-icmf-acca" replace />} />
  </Routes>
</BrowserRouter>
```

### Archivos Clave

1. **vite.config.ts**
   - `base: '/cotizaciones-idsv/'` - Configura el base path para GitHub Pages

2. **public/404.html**
   - Script de redirección para SPA (Single Page Applications) en GitHub Pages
   - Convierte rutas directas a formato compatible con React Router

---

## 🔬 Causa Raíz del Problema

### ¿Por qué falla GitHub Pages con React Router?

GitHub Pages es un servidor estático que **NO** tiene soporte nativo para routing del lado del cliente (client-side routing). Cuando accedes directamente a una URL como:

```
https://ingsistemavzla.github.io/cotizaciones-idsv/informe-web-2025
```

**Lo que sucede:**

1. GitHub Pages busca un archivo físico en: `/cotizaciones-idsv/informe-web-2025/index.html`
2. Como ese archivo NO existe, GitHub Pages devuelve el archivo `404.html`
3. El `404.html` contiene un script que redirige la URL a un formato especial: `/?/informe-web-2025`
4. React Router debe detectar esta redirección y convertirla a la ruta correcta

### Flujo del Problema

```
Usuario accede a: /cotizaciones-idsv/informe-web-2025
         ↓
GitHub Pages busca: /cotizaciones-idsv/informe-web-2025/index.html
         ↓
Archivo NO existe → Devuelve: 404.html
         ↓
404.html redirige a: /cotizaciones-idsv/?/informe-web-2025
         ↓
React Router debe procesar: /?/informe-web-2025
         ↓
RedirectHandler convierte a: /informe-web-2025
         ↓
[PROBLEMA] Si RedirectHandler falla → Muestra ruta por defecto
```

---

## 🛠️ Soluciones Implementadas

### Solución 1: RedirectHandler Component

Se creó un componente que detecta y procesa las redirecciones del `404.html`:

```tsx
function RedirectHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const redirectPath = searchParams.get('/')
    
    if (redirectPath) {
      let cleanPath = redirectPath.replace(/~and~/g, '&')
      
      // Limpiar el path
      if (cleanPath.startsWith('/')) {
        cleanPath = cleanPath.slice(1)
      }
      
      // Remover basename si está presente
      if (cleanPath.startsWith('cotizaciones-idsv/')) {
        cleanPath = cleanPath.replace('cotizaciones-idsv/', '')
      }
      
      const normalizedPath = `/${cleanPath}`
      navigate(normalizedPath, { replace: true })
    }
  }, [location, navigate])

  return null
}
```

### Solución 2: Configuración del 404.html

El archivo `public/404.html` usa el script estándar para SPA en GitHub Pages:

```html
<script>
  var pathSegmentsToKeep = 1;
  var l = window.location;
  l.replace(
    l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
    l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
    l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
    (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
    l.hash
  );
</script>
```

### Solución 3: Logs de Depuración

Se agregaron logs para diagnosticar problemas:

```tsx
useEffect(() => {
  console.log('App: Current pathname:', window.location.pathname)
  console.log('App: Current search:', window.location.search)
}, [])
```

---

## ✅ Procedimiento Correcto para GitHub Pages + React Router

### Paso 1: Configurar Vite

```typescript
// vite.config.ts
export default defineConfig({
  base: '/cotizaciones-idsv/',  // Debe coincidir con el nombre del repo
  // ...
})
```

### Paso 2: Configurar React Router

```tsx
// App.tsx
<BrowserRouter basename="/cotizaciones-idsv">
  <Routes>
    {/* Rutas aquí */}
  </Routes>
</BrowserRouter>
```

### Paso 3: Crear 404.html

El archivo `public/404.html` DEBE existir y contener el script de redirección para SPA.

### Paso 4: Implementar RedirectHandler

Siempre incluir un componente que procese las redirecciones del `404.html`.

---

## 🚨 Errores Comunes y Cómo Evitarlos

### Error 1: Olvidar el basename en BrowserRouter

**Síntoma:** Las rutas no funcionan en producción

**Solución:** Siempre incluir `basename="/cotizaciones-idsv"` en `BrowserRouter`

### Error 2: No tener 404.html

**Síntoma:** Acceder directamente a una ruta devuelve 404 real

**Solución:** Crear `public/404.html` con el script de redirección

### Error 3: RedirectHandler no procesa correctamente

**Síntoma:** Las rutas redirigen pero muestran contenido incorrecto

**Solución:** Verificar que el RedirectHandler limpie correctamente el path y remueva el basename si está presente

### Error 4: Base path incorrecto en vite.config.ts

**Síntoma:** Los assets (CSS, JS) no se cargan correctamente

**Solución:** El `base` en `vite.config.ts` debe coincidir con el nombre del repositorio

---

## 📝 Checklist para Nuevas Rutas

Cuando agregues una nueva ruta, verifica:

- [ ] La ruta está definida en `App.tsx` dentro de `<Routes>`
- [ ] El componente de la página existe y está correctamente importado
- [ ] El `basename` en `BrowserRouter` coincide con el nombre del repo
- [ ] El `base` en `vite.config.ts` coincide con el nombre del repo
- [ ] El archivo `public/404.html` existe y contiene el script de redirección
- [ ] El `RedirectHandler` está incluido en `App.tsx`
- [ ] Probar accediendo directamente a la URL (no desde navegación interna)

---

## 🔧 Comandos Útiles para Debugging

### Verificar rutas en desarrollo local

```bash
npm run dev
# Acceder a: http://localhost:3030/cotizaciones-idsv/informe-web-2025
```

### Verificar build de producción

```bash
npm run build
npm run preview
# Acceder a: http://localhost:4173/cotizaciones-idsv/informe-web-2025
```

### Verificar en consola del navegador

Abrir DevTools (F12) y revisar:
- Console: Logs de routing
- Network: Verificar que los assets se cargan correctamente
- Application: Verificar el historial de navegación

---

## 🎯 Mejores Prácticas

1. **Siempre probar rutas directas**: No solo navegar desde la página principal
2. **Usar logs de depuración**: Ayudan a identificar problemas rápidamente
3. **Mantener 404.html actualizado**: Es crítico para el funcionamiento
4. **Verificar basename consistentemente**: Debe ser el mismo en todos los lugares
5. **Documentar nuevas rutas**: Agregar al README o documentación del proyecto

---

## 📚 Referencias

- [GitHub Pages SPA Guide](https://github.com/rafgraph/spa-github-pages)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Base Path Configuration](https://vitejs.dev/config/shared-options.html#base)

---

## 📅 Historial de Cambios

- **2025-01-XX**: Problema identificado - rutas mostraban contenido incorrecto
- **2025-01-XX**: Implementado RedirectHandler
- **2025-01-XX**: Agregados logs de depuración
- **2025-01-XX**: Rutas invertidas para testing
- **2025-01-XX**: Documentación creada

---

## 👤 Autor

IDSV - Ingenieros de Sistemas Venezuela

---

**Última actualización:** Enero 2025

