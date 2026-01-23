import { ReportSection } from './ReportSection'
import { FileCheck } from 'lucide-react'

export function ReportConclusion() {
  return (
    <ReportSection title="CONCLUSIÓN" icon={FileCheck}>
      <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-4 sm:p-6 border-2 border-primary-300">
        <p className="mb-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
          La actualización realizada cumple íntegramente con el <strong className="text-primary-700">50% del proyecto presupuestado</strong>, entregando un Home Page de alto nivel técnico, visual y funcional, mientras que la segunda fase fue detenida de forma responsable ante la ausencia de información necesaria, evitando así cobros por trabajos no ejecutados.
        </p>
        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-semibold">
          Este informe deja constancia clara, ordenada y verificable del proceso, garantizando transparencia, coherencia y profesionalismo en la gestión del proyecto.
        </p>
      </div>
    </ReportSection>
  )
}


