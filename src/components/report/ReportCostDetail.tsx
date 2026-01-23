import { ReportSection } from './ReportSection'
import { Calculator, CheckCircle2 } from 'lucide-react'

export function ReportCostDetail() {
  const sections = [
    {
      title: 'Header principal',
      activities: [
        'Rediseño estructural',
        'Integración de elementos interactivos',
        'Programación de llamadas a la acción',
        'Ajuste de contrastes, degradantes y animaciones suaves',
      ],
    },
    {
      title: 'Cards dinámicas',
      activities: [
        'Diseño visual personalizado',
        'Programación de interacción (hover, transiciones)',
        'Adaptación móvil y tablet',
      ],
    },
    {
      title: 'Principios institucionales',
      activities: [
        'Rediseño visual',
        'Estructuración de contenido',
        'Integración de nuevos estilos gráficos',
      ],
    },
    {
      title: 'Pilares institucionales',
      activities: [
        'Maquetación avanzada',
        'Nuevas visualizaciones',
        'Optimización de lectura y jerarquía visual',
      ],
    },
    {
      title: 'Trayectoria global y fundación',
      activities: [
        'Diseño narrativo visual',
        'Programación de bloques dinámicos',
        'Integración cromática institucional',
      ],
    },
    {
      title: 'Beneficios institucionales',
      activities: [
        'Diseño de sección especial',
        'Organización estratégica del contenido',
        'Elementos gráficos de apoyo',
      ],
    },
    {
      title: 'Junta Directiva',
      activities: [
        'Reestructuración visual de fotografías',
        'Diseño de tarjetas dinámicas',
        'Mejora de visualización en dispositivos móviles',
      ],
    },
    {
      title: 'Bienvenida institucional',
      activities: [
        'Diseño de alto impacto',
        'Integración de mensaje institucional',
        'Optimización de experiencia inicial del usuario',
      ],
    },
    {
      title: 'Carrusel de nuevos miembros',
      activities: [
        'Programación de carrusel dinámico',
        'Ajustes de velocidad, interacción y responsive',
        'Integración de imágenes optimizadas',
      ],
    },
    {
      title: 'Impacto de la federación (números)',
      activities: [
        'Diseño de contadores visuales',
        'Programación de animaciones',
        'Jerarquización de datos clave',
      ],
    },
    {
      title: 'Comentarios de coaches',
      activities: [
        'Carruseles dinámicos',
        'Estilos modernos de presentación',
        'Optimización para lectura y credibilidad',
      ],
    },
    {
      title: 'Noticias y eventos',
      activities: [
        'Estructura preparada para crecimiento futuro',
        'Diseño modular reutilizable',
        'Integración con posibles actualizaciones posteriores',
      ],
    },
    {
      title: 'Footer interactivo',
      activities: [
        'Diseño tipo grilla / segmentación',
        'Elementos visuales interactivos',
        'Organización avanzada de enlaces e información',
      ],
    },
  ]

  const transversalActivities = [
    'Ajustes de diseño responsive (desktop, tablet y móvil)',
    'Optimización de carga visual',
    'Correcciones de compatibilidad entre navegadores',
    'Organización del código y estructura interna',
    'Pruebas de visualización y funcionalidad',
    'Alineación gráfica general de toda la página',
  ]

  return (
    <ReportSection title="DETALLE DE COSTOS POR SECCIÓN Y JUSTIFICACIÓN DEL VALOR APLICADO" icon={Calculator}>
      <div className="mb-6">
        <h4 className="font-bold text-lg text-primary-800 mb-3">8.1 Criterio de valoración por sección</h4>
        <p className="mb-4">
          Para esta actualización se aplicó un valor promedio referencial de{' '}
          <strong className="text-primary-700">USD 15 por sección</strong>, considerando:
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {[
            'Nivel de complejidad visual',
            'Programación dinámica',
            'Adaptación responsive',
            'Integración de estilos modernos',
            'Optimización de experiencia de usuario',
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg border border-primary-200"
            >
              <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span className="text-sm text-neutral-700">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-600 italic mb-4">
          Este valor se encuentra por debajo del promedio del mercado, donde este tipo de secciones oscila entre{' '}
          <strong className="text-red-700">USD 25 y USD 60 por sección</strong>, dependiendo del proveedor.
        </p>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-lg text-primary-800 mb-3">8.2 Desglose de secciones del Home Page</h4>
        <p className="mb-4">
          El Home Page actualizado cuenta con <strong className="text-primary-700">13 secciones funcionales</strong>, cada una con estructuras dinámicas, programación unificada de parámetros, actualización de componentes visuales altamente optimizados, integración de imágenes y reconversión de factores gráficos, lo que representa el siguiente cálculo base de mercado:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 border-2 border-red-300 text-center">
            <p className="text-xs sm:text-sm text-neutral-600 mb-1">Valor referencial real:</p>
            <p className="text-xl sm:text-2xl font-black text-red-700">13 × $15 = $195 USD</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300 text-center">
            <p className="text-xs sm:text-sm text-neutral-600 mb-1">Valor preferencial:</p>
            <p className="text-xl sm:text-2xl font-black text-primary-700">13 × $10 = $130 USD</p>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4 border-2 border-primary-300 text-center">
            <p className="text-xs sm:text-sm text-neutral-600 mb-1">Monto facturado:</p>
            <p className="text-xl sm:text-2xl font-black text-primary-800">$125 USD</p>
          </div>
        </div>

        <p className="mb-4 text-sm text-neutral-700">
          No obstante, como ajuste preferencial institucional, el valor aplicado por cada sección dinámica con programación fue reducido de{' '}
          <strong className="text-primary-700">USD 15 a USD 10</strong>, manteniendo el mismo nivel técnico y visual, incluyendo:
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {[
            'Programación dinámica y modular',
            'Unificación de parámetros y estructuras internas',
            'Actualización de componentes interactivos',
            'Integración y optimización de imágenes',
            'Reconversión visual y modernización estética',
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-200"
            >
              <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span className="text-sm text-neutral-700">{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-4 text-center mt-4">
          <p className="text-sm opacity-90 mb-1">Evidencia:</p>
          <p className="text-base font-black">
            El cobro fue inferior incluso al valor ajustado preferencial • Se absorbió internamente parte del costo como apoyo institucional • No se aplicaron recargos por tareas adicionales ejecutadas
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-lg text-primary-800 mb-3">Detalle de actividades realizadas por sección</h4>
        <div className="space-y-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-neutral-50 to-primary-50 rounded-lg p-4 border border-primary-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0b1f4a] text-white font-bold text-sm flex-shrink-0">
                  {index + 1}
                </span>
                <h5 className="font-bold text-primary-800 text-sm sm:text-base">{section.title}</h5>
              </div>
              <ul className="ml-8 space-y-1">
                {section.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="text-xs sm:text-sm text-neutral-700 flex items-start gap-2">
                    <span className="text-primary-600">•</span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-lg text-primary-800 mb-3">8.3 Actividades transversales no visibles pero ejecutadas</h4>
        <p className="mb-3 text-sm text-neutral-700">
          Además del trabajo visible por sección, se realizaron actividades técnicas generales que no siempre son perceptibles a simple vista, pero son fundamentales:
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {transversalActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-gradient-to-r from-neutral-50 to-primary-50 rounded-lg border border-neutral-200"
            >
              <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-neutral-700">{activity}</span>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-3 border border-primary-200">
          <p className="text-xs sm:text-sm text-neutral-700 italic">
            Estas tareas no fueron facturadas de forma adicional, sino que se incluyeron dentro del mismo monto.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-lg text-primary-800 mb-3">8.4 Justificación del monto cobrado</h4>
        <div className="bg-gradient-to-br from-red-50 to-primary-50 rounded-lg p-4 border-2 border-primary-300">
          <p className="mb-3 text-sm text-neutral-700">
            Si se compara el valor real estimado (<strong className="text-red-700">USD 195</strong>) con el monto efectivamente cobrado (<strong className="text-primary-700">USD 125</strong>), se evidencia que:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'El cobro fue significativamente menor al valor real del trabajo',
              'Se aplicó un criterio de apoyo institucional',
              'El precio fue bajo, justo y proporcional',
              'No se cobraron tareas no ejecutadas',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2 p-2 bg-white rounded border border-primary-200"
              >
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-4 text-center">
        <h4 className="font-bold text-lg mb-2">8.5 Conclusión económica</h4>
        <p className="text-base font-black">
          El monto cobrado por la actualización del Home Page no solo está justificado, sino que se encuentra por debajo del valor real de mercado, representando una relación costo–beneficio altamente favorable para la ICMF.
        </p>
      </div>
    </ReportSection>
  )
}


