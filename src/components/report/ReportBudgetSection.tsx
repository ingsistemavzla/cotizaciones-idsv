import { ReportSection } from './ReportSection'
import { Calculator } from 'lucide-react'

export function ReportBudgetSection() {
  return (
    <ReportSection title="PRESUPUESTO ORIGINAL APROBADO" icon={Calculator}>
      <p className="mb-4">
        El presupuesto inicial de <strong className="text-primary-700">USD 250</strong> contemplaba dos bloques de trabajo claramente diferenciados:
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4 border-2 border-primary-300">
          <p className="font-bold text-primary-800 mb-2 text-lg">1. Reestructuración completa del Home Page institucional</p>
          <p className="text-sm text-neutral-700">Aproximadamente 50% del valor total del proyecto</p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300">
          <p className="font-bold text-primary-800 mb-2 text-lg">2. Reestructuración visual y funcional de la Comunidad de Coaches</p>
          <p className="text-sm text-neutral-700">Aproximadamente 50% del valor total del proyecto</p>
        </div>
      </div>
      <p className="text-sm text-neutral-600 italic">
        Cada bloque representaba aproximadamente el 50% del valor total del proyecto.
      </p>
    </ReportSection>
  )
}


