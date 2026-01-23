import { ReportSection } from './ReportSection'
import { Info } from 'lucide-react'

export function ReportHomePageExplanation() {
  const points = [
    'Reestructuración completa de la arquitectura visual',
    'Implementación de programación moderna e interactiva',
    'Optimización responsive para móviles',
    'Mejora sustancial de la experiencia del usuario',
    'Alineación visual con estándares actuales de plataformas institucionales',
    'Preparación del sitio para escalabilidad futura',
  ]

  return (
    <ReportSection title="¿QUÉ ES LA ACTUALIZACIÓN DEL HOME PAGE?" icon={Info}>
      <p className="mb-4 font-semibold text-primary-800">
        La actualización del Home Page no consiste en simples cambios estéticos, sino en:
      </p>
      <div className="grid md:grid-cols-2 gap-3 mb-4">
        {points.map((point, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-200"
          >
            <span className="text-primary-600 font-bold">•</span>
            <span className="text-sm text-neutral-700">{point}</span>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4 border-2 border-primary-300">
        <p className="text-sm text-neutral-700">
          En términos técnicos y estratégicos, el Home Page representa la{' '}
          <strong className="text-primary-800">base estructural y comunicacional</strong> de toda la plataforma web.
        </p>
      </div>
    </ReportSection>
  )
}


