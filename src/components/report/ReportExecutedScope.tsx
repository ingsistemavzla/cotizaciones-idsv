import { ReportSection } from './ReportSection'
import { CheckCircle2 } from 'lucide-react'

export function ReportExecutedScope() {
  const sections = [
    'Header principal con elementos interactivos y programación moderna',
    'Cards dinámicas de alto impacto visual',
    'Sección "Nuestros Principios" con nuevos estilos y elementos gráficos',
    'Pilares institucionales con visualizaciones renovadas',
    'Trayectoria global y fundación de la ICMF con estructura dinámica',
    'Sección "Conoce nuestros beneficios"',
    'Junta Directiva: Remodelación visual de fotografías y estructuras dinámicas para mejor visualización',
    'Bienvenida institucional de alto impacto',
    'Carrusel de nuevos miembros actualizados',
    'Sección de impacto de la federación (números y alcance)',
    'Comentarios de coaches en carruseles dinámicos de estilo vanguardista',
    'Noticias y eventos (estructura preparada para futuras actualizaciones)',
    'Footer interactivo con estructura tipo grilla / segmentación visual',
  ]

  return (
    <ReportSection title="ALCANCE EJECUTADO Y FACTURADO (50% – USD 125)" icon={CheckCircle2}>
      <div className="mb-6">
        <h4 className="font-bold text-lg text-primary-800 mb-3">3.1 Reestructuración del Home Page</h4>
        <p className="mb-4">
          Se ejecutó completamente la reestructuración del Home Page, el cual quedó conformado por{' '}
          <strong className="text-primary-700">13 secciones funcionales</strong>, diseñadas bajo criterios modernos de:
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {[
            'Experiencia de usuario (UX)',
            'Diseño responsive (adaptado a dispositivos móviles)',
            'Programación dinámica e interactiva',
            'Identidad visual alineada a la paleta y valores institucionales',
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary-50 to-red-50 rounded-lg border border-primary-200"
            >
              <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span className="text-sm text-neutral-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-lg text-primary-800 mb-3">Secciones desarrolladas:</h4>
        <div className="space-y-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg border border-primary-200"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0b1f4a] text-white font-bold text-sm flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-sm text-neutral-700 flex-1">{section}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-4 text-center mt-4">
        <p className="text-sm opacity-90 mb-1">Resultado:</p>
        <p className="text-xl font-black">
          Un Home Page completamente renovado, moderno, dinámico, versátil y optimizado para dispositivos móviles.
        </p>
      </div>
    </ReportSection>
  )
}


