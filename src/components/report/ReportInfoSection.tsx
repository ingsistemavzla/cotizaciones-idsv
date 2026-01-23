import { FileText, Users, Building2, DollarSign } from 'lucide-react'

interface ReportInfoSectionProps {
  target: string
  entity: string
  preparedBy: string
  concept: string
  budget: string
}

export function ReportInfoSection({
  target,
  entity,
  preparedBy,
  concept,
  budget,
}: ReportInfoSectionProps) {
  return (
    <div className="bg-white sm:rounded-2xl p-1.5 sm:p-4 md:p-6 lg:p-8 border-2 border-neutral-200 sm:shadow-lg overflow-x-hidden w-full">
      <h2 className="text-[0.8rem] sm:text-2xl md:text-3xl font-black text-primary-800 mb-3 sm:mb-6 border-b-2 border-primary-600 pb-1 sm:pb-2 flex items-center gap-1.5 sm:gap-2">
        <FileText className="w-5 h-5 sm:w-7 sm:h-7 text-primary-600" />
        INFORMACIÓN DEL INFORME
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg border border-primary-200">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs sm:text-sm text-neutral-600 mb-1">Dirigido a:</p>
            <p className="text-sm sm:text-base font-bold text-primary-800 break-words">{target}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg border border-primary-200">
          <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs sm:text-sm text-neutral-600 mb-1">Entidad:</p>
            <p className="text-sm sm:text-base font-bold text-primary-800 break-words">{entity}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg border border-primary-200">
          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs sm:text-sm text-neutral-600 mb-1">Elaborado por:</p>
            <p className="text-sm sm:text-base font-bold text-primary-800 break-words">{preparedBy}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-r from-primary-50 to-neutral-50 rounded-lg border border-primary-200">
          <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 flex-shrink-0 mt-1" />
          <div>
            <p className="text-xs sm:text-sm text-neutral-600 mb-1">Concepto:</p>
            <p className="text-sm sm:text-base font-bold text-primary-800 break-words">{concept}</p>
            <p className="text-xs sm:text-sm text-primary-700 font-semibold mt-1">Monto presupuestado: {budget}</p>
          </div>
        </div>
      </div>
    </div>
  )
}


