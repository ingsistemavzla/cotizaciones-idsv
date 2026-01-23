import { ReportSection } from './ReportSection'
import { DollarSign } from 'lucide-react'

export function ReportClarification() {
  return (
    <ReportSection title="ACLARATORIA SOBRE EL MONTO FACTURADO" icon={DollarSign}>
      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg p-4 border-2 border-neutral-300 text-center">
          <p className="text-xs sm:text-sm text-neutral-600 mb-1">Monto presupuestado:</p>
          <p className="text-2xl sm:text-3xl font-black text-primary-800">USD 250</p>
        </div>
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-4 border-2 border-primary-300 text-center">
          <p className="text-xs sm:text-sm text-neutral-600 mb-1">Monto ejecutado y cobrado:</p>
          <p className="text-2xl sm:text-3xl font-black text-primary-700">USD 125</p>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 border-2 border-red-300 text-center">
          <p className="text-xs sm:text-sm text-neutral-600 mb-1">Monto NO ejecutado ni cobrado:</p>
          <p className="text-2xl sm:text-3xl font-black text-red-700">USD 125</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-4 text-center">
        <p className="text-sm opacity-90 mb-1">Criterio de facturación:</p>
        <p className="text-lg font-black">
          El cobro realizado corresponde exclusivamente al trabajo efectivamente ejecutado, específicamente la actualización integral del Home Page.
        </p>
      </div>
    </ReportSection>
  )
}


