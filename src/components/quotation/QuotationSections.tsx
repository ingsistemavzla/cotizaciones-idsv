import { QuotationSection } from '@/types/quotation'

interface QuotationSectionsProps {
  sections: QuotationSection[]
  totalMarketPrice: number
  totalAlliancePrice: number
}

export function QuotationSections({
  sections,
  totalMarketPrice,
  totalAlliancePrice,
}: QuotationSectionsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-neutral-200">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-primary-800 mb-2">
          DESGLOSE DETALLADO POR PLATAFORMA
        </h2>
        <div className="flex justify-end gap-4 mt-4">
          <div className="bg-red-50 rounded-2xl p-3 border border-red-200">
            <p className="text-sm text-neutral-600 mb-1">Valor Original:</p>
            <p className="text-lg font-bold text-red-700">$35-40 por sección</p>
          </div>
          <div className="bg-primary-50 rounded-2xl p-3 border border-primary-200">
            <p className="text-sm text-neutral-600 mb-1">Valor de Oferta:</p>
            <p className="text-lg font-bold text-primary-700">$21-27 por sección</p>
          </div>
        </div>
      </div>

      {/* Lista de secciones */}
      <div className="space-y-4 mb-8">
        {sections.map((section) => {
          return (
            <div
              key={section.id}
              className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <span className="font-bold text-primary-700 text-lg w-8">{section.id}.</span>
                <span className="text-neutral-800 font-medium text-base">{section.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-red-600 line-through text-base font-semibold" style={{ textDecorationThickness: '2px' }}>
                  ${section.marketPrice} USD
                </span>
                <span className="text-primary-700 font-medium text-sm">Precio de Oferta:</span>
                <span className="font-black text-primary-700 text-xl">
                  ${section.alliancePrice} USD
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Total */}
      <div className="bg-gradient-to-r from-primary-100 to-red-50 rounded-xl p-6 border-2 border-primary-300 mb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span className="text-xl font-black text-primary-800">TOTAL {sections.length} URLs:</span>
          <div className="flex flex-col md:flex-row items-end md:items-center gap-4">
            <div className="text-center md:text-right">
              <p className="text-sm text-neutral-600 mb-1">Valor Real:</p>
              <span className="text-red-600 line-through text-2xl font-bold" style={{ textDecorationThickness: '2px' }}>
                ${totalMarketPrice} USD
              </span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-neutral-600 mb-1">Valor de Oportunidad:</p>
              <span className="text-3xl font-black text-primary-700">
                ${totalAlliancePrice} USD
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Nota enmarcada en valle rojo */}
      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border-2 border-red-300">
        <p className="text-sm text-neutral-700 text-center">
          <strong className="text-red-800">Nota:</strong> Esto representa pasar de pagar entre{' '}
          <strong className="text-red-700">$35 a $40 dólares por sección</strong> a un promedio de{' '}
          <strong className="text-primary-700">$21 a $27 por sección</strong> para la promoción{' '}
          <strong className="text-primary-800">Alianza 2x1</strong>.
        </p>
      </div>
    </div>
  )
}

