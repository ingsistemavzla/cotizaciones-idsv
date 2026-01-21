import { BarChart3, Calculator } from 'lucide-react'

interface QuotationObjectiveProps {
  objective: string
  purpose: string
}

export function QuotationObjective({ objective, purpose }: QuotationObjectiveProps) {
  return (
    <div className="bg-white sm:rounded-2xl p-1.5 sm:p-4 md:p-6 lg:p-8 border-2 border-neutral-200 sm:shadow-lg overflow-x-hidden w-full">
      {/* Propósito */}
      <div className="mb-6 sm:mb-10">
        <h2 className="text-[0.8rem] sm:text-2xl md:text-3xl font-black text-primary-800 mb-2 sm:mb-4 border-b-2 border-primary-600 pb-1 sm:pb-2 flex items-center gap-1.5 sm:gap-2">
          <BarChart3 className="w-5 h-5 sm:w-7 sm:h-7 text-primary-600" />
          PROPÓSITO DE ESTA COTIZACIÓN
        </h2>
        <p 
          className="text-[0.8rem] sm:text-lg text-neutral-700 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: purpose
              .replace(
                /\*\*(transparentar el valor real del desarrollo web profesional)\*\*/gi,
                '<strong class="font-bold text-primary-700">$1</strong>'
              )
              .replace(
                /\*\*(Alianza Estratégica 2x1)\*\*/gi,
                '<strong class="font-bold text-primary-700">$1</strong>'
              )
              .replace(
                /\*\*(ahorro significativo)\*\*/gi,
                '<strong class="font-bold text-primary-700">$1</strong>'
              )
              // También aplicar si no vienen con markdown
              .replace(
                /(transparentar el valor real del desarrollo web profesional)/gi,
                (match, p1) => {
                  if (!match.includes('<strong')) {
                    return `<strong class="font-bold text-primary-700">${p1}</strong>`
                  }
                  return match
                }
              )
              .replace(
                /(Alianza Estratégica 2x1)/gi,
                (match, p1) => {
                  if (!match.includes('<strong')) {
                    return `<strong class="font-bold text-primary-700">${p1}</strong>`
                  }
                  return match
                }
              )
              .replace(
                /(ahorro significativo)/gi,
                (match, p1) => {
                  if (!match.includes('<strong')) {
                    return `<strong class="font-bold text-primary-700">${p1}</strong>`
                  }
                  return match
                }
              )
          }}
        />
      </div>

      {/* Análisis de Valor Real por Sección */}
      <div>
        <h3 className="text-[0.8rem] sm:text-2xl font-black text-primary-800 mb-1.5 sm:mb-2 border-b-2 border-primary-600 pb-1 sm:pb-2 flex items-center gap-1.5 sm:gap-2">
          <Calculator className="w-5 h-5 sm:w-7 sm:h-7 text-primary-600" />
          ANÁLISIS DE VALOR REAL POR SECCIÓN
        </h3>
        <p className="text-[0.8rem] sm:text-lg text-neutral-600 mb-3 sm:mb-6 font-semibold">DESGLOSE TÉCNICO Y ECONÓMICO</p>

        <div className="bg-white rounded-lg p-3 sm:p-6 md:p-8 border-2 border-primary-300 shadow-md mb-3 sm:mb-6">
          <p className="text-[0.8rem] sm:text-base text-neutral-700 leading-relaxed mb-3 sm:mb-6">
            En el mercado actual, el desarrollo profesional de{' '}
            <strong className="text-primary-700">cada sección/URL estratégica</strong> (como por ejemplo: <a href="https://federaciondecoaching.com/destrezas/" target="_blank" rel="noopener noreferrer" className="text-primary-700 underline font-semibold">/destrezas/</a> en Federación de Coaching o <a href="https://academiadecoach.com/coaching-de-transformacion/" target="_blank" rel="noopener noreferrer" className="text-primary-700 underline font-semibold">/coaching-de-transformacion/</a> en Academia de Coaching) tiene un{' '}
            <strong className="text-primary-700">valor comercial real entre $30-40 USD</strong>,
            dependiendo de la complejidad y funcionalidades requeridas.
          </p>
          
          <p className="text-red-700 font-black uppercase tracking-wide mb-2">
            Cotización Real
          </p>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border-2 border-red-300">
            <p className="font-bold text-red-800 mb-4 text-lg">CÁLCULO BASE:</p>
            
            <div className="space-y-4">
              {/* Rango de secciones */}
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <div className="flex-1">
                  <p className="text-sm text-neutral-600 mb-1">Rango de secciones críticas:</p>
                  <p className="text-xl font-bold text-red-700">12 - 15 secciones</p>
                </div>
                <div className="text-2xl text-red-400">×</div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-600 mb-1">Precio promedio por sección:</p>
                  <p className="text-xl font-bold text-red-700">$35 USD</p>
                </div>
              </div>

              {/* Línea divisoria */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent my-4" />

              {/* Resultados */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-primary-200">
                  <p className="text-sm text-neutral-600 mb-1">Mínimo (12 secciones):</p>
                  <p className="text-2xl font-black text-red-700">$420 USD</p>
                  <p className="text-xs text-neutral-500 mt-1">12 × $35 = $420</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-primary-200">
                  <p className="text-sm text-neutral-600 mb-1">Máximo (15 secciones):</p>
                  <p className="text-2xl font-black text-red-700">$525 USD</p>
                  <p className="text-xs text-neutral-500 mt-1">15 × $35 = $525</p>
                </div>
              </div>

              {/* Total destacado */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-4 text-center mt-4">
                <p className="text-sm opacity-90 mb-1">Valor por plataforma (real):</p>
                <p className="text-3xl font-black">$420 - $525 USD</p>
              </div>

            </div>
          </div>

          {/* CÁLCULO BASE (VALOR DE OFERTA) */}
          <p className="text-blue-700 font-black uppercase tracking-wide mt-4">
            Cotización Alianza 2x1
          </p>
          <div className="mt-4 sm:mt-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-2 border-blue-300 shadow-md">
            <p className="font-bold text-primary-800 mb-4 text-lg">CÁLCULO BASE (VALOR DE OFERTA):</p>
            <p className="text-[0.8rem] sm:text-sm text-neutral-700 leading-relaxed mb-4">
              Para esta promoción, las tarifas de desarrollo se ajustan entre{' '}
              <strong className="text-primary-700">$21 y $27 USD por cada URL</strong>, con un
              promedio estimado de <strong className="text-primary-700">$25 USD por sección</strong>.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <div className="flex-1">
                  <p className="text-sm text-neutral-600 mb-1">Rango de secciones críticas:</p>
                  <p className="text-xl font-bold text-primary-700">12 - 15 secciones</p>
                </div>
                <div className="text-2xl text-primary-400">×</div>
                <div className="flex-1">
                  <p className="text-sm text-neutral-600 mb-1">Precio promedio por sección (oferta):</p>
                  <p className="text-xl font-bold text-primary-700">$25 USD</p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary-300 to-transparent my-4" />
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 border border-primary-200">
                  <p className="text-sm text-neutral-600 mb-1">Mínimo (12 secciones):</p>
                  <p className="text-2xl font-black text-primary-700">$300 USD</p>
                  <p className="text-xs text-neutral-500 mt-1">12 × $25 = $300</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-primary-200">
                  <p className="text-sm text-neutral-600 mb-1">Máximo (15 secciones):</p>
                  <p className="text-2xl font-black text-primary-700">$375 USD</p>
                  <p className="text-xs text-neutral-500 mt-1">15 × $25 = $375</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-4 text-center mt-4">
                <p className="text-sm opacity-90 mb-1">Valor por plataforma (oferta):</p>
                <p className="text-3xl font-black">$300 - $375 USD</p>
              </div>
              <p className="text-[0.8rem] sm:text-sm text-neutral-700 leading-relaxed mt-3">
                En ese rango, 12-15 secciones equivalen aproximadamente a{' '}
                <strong className="text-primary-700">$300 - $375 USD</strong> por plataforma, pero
                hoy no pagarás ese monto porque la promoción incluye el desarrollo de{' '}
                <strong className="text-primary-700">dos plataformas simultáneas por $325 USD cada una</strong>.
                A continuación te explicamos los detalles.
              </p>
            </div>
          </div>
        </div>

        {/* Breve explicación del valor incluido */}
        <p className="text-base text-neutral-700 leading-relaxed mb-6">
          Este rango no solo refleja “hacer una página”, sino un{' '}
          <strong>trabajo completo de ingeniería digital</strong>: análisis, arquitectura,
          diseño de experiencia, código optimizado, pruebas, documentación y despliegue
          profesional de cada sección estratégica, preparado para crecer sin depender de
          plantillas genéricas ni plugins que limiten el proyecto.
        </p>

        {/* Tecnologías y referencia visual a plataformas de clase mundial */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm mb-2">
            <span className="font-semibold text-primary-800 break-words">Tecnologías aplicadas:</span>
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200 text-xs sm:text-sm">
              React 18
            </span>
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200 text-xs sm:text-sm">
              Vite
            </span>
            <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-200 text-xs sm:text-sm">
              Tailwind CSS
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3">
            <span className="font-semibold text-primary-700 text-xs sm:text-sm break-words">
              Tecnologías que usan grandes plataformas como:
            </span>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <img
                src="https://1000marcas.net/wp-content/uploads/2019/12/Facebook-Logo.jpg"
                alt="Facebook"
                className="h-6 sm:h-8 w-auto rounded bg-white object-contain border border-neutral-200 p-0.5 sm:p-1 max-w-full"
              />
              <img
                src="https://1000marcas.net/wp-content/uploads/2020/01/Logo-Netflix.png"
                alt="Netflix"
                className="h-6 sm:h-8 w-auto rounded bg-white object-contain border border-neutral-200 p-0.5 sm:p-1 max-w-full"
              />
              <img
                src="https://1000marcas.net/wp-content/uploads/2020/10/Shopify-Logo.png"
                alt="Shopify"
                className="h-6 sm:h-8 w-auto rounded bg-white object-contain border border-neutral-200 p-0.5 sm:p-1 max-w-full"
              />
              <img
                src="https://i.blogs.es/c08b7f/paypal-784404_1280/450_1000.webp"
                alt="PayPal"
                className="h-6 sm:h-8 w-auto rounded bg-white object-contain border border-neutral-200 p-0.5 sm:p-1 max-w-full"
              />
            </div>
          </div>
        </div>

        {/* Valoración Justa Incluye */}
        <div>
          <p className="font-bold text-lg text-primary-800 mb-4">
            VALORACIÓN JUSTA INCLUYE:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Desarrollo técnico profesional',
              'Optimización SEO avanzada',
              'Diseño UX/UI especializado',
              'Integración de funcionalidades',
              'Pruebas y garantía de calidad',
              'Documentación técnica completa',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary-50 to-red-50 rounded-lg border border-primary-200"
              >
                <span className="text-primary-600 font-bold">•</span>
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

