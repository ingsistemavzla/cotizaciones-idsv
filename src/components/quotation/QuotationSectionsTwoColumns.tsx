import { QuotationSection } from '@/types/quotation'

interface QuotationSectionsTwoColumnsProps {
  sections: QuotationSection[]
  totalMarketPrice: number
  totalAlliancePrice: number
}

export function QuotationSectionsTwoColumns({
  sections,
  totalMarketPrice,
  totalAlliancePrice,
}: QuotationSectionsTwoColumnsProps) {
  return (
    <div className="bg-white sm:border-2 sm:rounded-2xl sm:shadow-xl px-3 py-3 sm:p-4 md:p-6 lg:p-8 border-neutral-200 overflow-x-hidden w-full max-w-full">
      <div className="mb-3 sm:mb-8">
        <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary-800 mb-3 sm:mb-2 break-words tracking-tight">
          DESGLOSE DETALLADO POR PLATAFORMA
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-4 mt-3 sm:mt-4">
          <div className="bg-red-50 rounded-lg sm:rounded-2xl px-3 py-2 sm:p-3 border border-red-200 w-full sm:w-auto">
            <p className="text-sm sm:text-base text-neutral-600 mb-1 break-words">
              Valor Original:
            </p>
            <p className="text-base sm:text-xl font-bold text-red-700 break-words whitespace-nowrap">
              $35-40 por sección
            </p>
          </div>
          <div className="bg-primary-50 rounded-lg sm:rounded-2xl px-3 py-2 sm:p-3 border border-primary-200 w-full sm:w-auto">
            <p className="text-sm sm:text-base text-neutral-600 mb-1 break-words">
              Valor de Oferta:
            </p>
            <p className="text-base sm:text-xl font-bold text-primary-700 break-words whitespace-nowrap">
              $21-27 por sección
            </p>
          </div>
        </div>
      </div>

      {/* Ítems en 3 columnas: 60% / 20% / 20% */}
      <div className="grid grid-cols-1 gap-2 sm:gap-4 mb-3 sm:mb-8">
        {sections.map((section) => (
          <div
            key={section.id}
            className="px-2 py-2.5 sm:p-4 bg-white sm:bg-neutral-50 rounded-lg border-2 border-neutral-200 sm:hover:border-primary-300 sm:transition-all sm:hover:shadow-md w-full"
          >
            <div className="grid grid-cols-[60%_20%_20%] gap-1.5 sm:gap-4 items-start">
              {/* Columna 1 (60%) */}
              <div className="flex items-start gap-1.5 sm:gap-2 min-w-0">
                <span className="flex items-center justify-center text-white font-black text-[0.6rem] sm:text-sm w-4 h-4 sm:w-7 sm:h-7 rounded-full bg-[#0b1f4a] flex-shrink-0">
                  {section.id}
                </span>
                <h3 className="text-[#0b1f4a] font-black text-[0.7rem] sm:text-lg leading-tight break-words min-w-0">
                  {section.name}
                </h3>
              </div>

              {/* Columna 2 (20%) */}
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-[0.6rem] sm:text-sm text-red-600 font-bold">
                  Valor Real
                </span>
                <span
                  className="text-[0.7rem] sm:text-base text-red-600 line-through whitespace-nowrap font-bold"
                  style={{ textDecorationThickness: '1px' }}
                >
                  ${section.marketPrice} USD
                </span>
              </div>

              {/* Columna 3 (20%) */}
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-[0.6rem] sm:text-sm text-primary-700 font-bold whitespace-nowrap">
                  Precio de Oferta:
                </span>
                <span className="text-[0.75rem] sm:text-lg text-primary-700 font-black whitespace-nowrap">
                  ${section.alliancePrice} USD
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary-100 to-red-50 rounded-lg sm:rounded-xl px-3 py-3 sm:p-6 border-2 border-primary-300 mb-3 sm:mb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
          <span className="text-sm sm:text-xl font-black text-primary-800 break-words">
            TOTAL {sections.length} URLs:
          </span>
          <div className="flex flex-col sm:flex-row items-start sm:items-end md:items-center gap-3 sm:gap-4">
            <div className="text-left sm:text-center md:text-right">
              <p className="text-xs sm:text-sm text-neutral-600 mb-1 break-words">
                Valor Real:
              </p>
              <span
                className="text-red-600 line-through text-base sm:text-2xl font-bold break-words whitespace-nowrap"
                style={{ textDecorationThickness: '1px' }}
              >
                ${totalMarketPrice} USD
              </span>
            </div>
            <div className="text-left sm:text-center md:text-right">
              <p className="text-xs sm:text-sm text-neutral-600 mb-1 break-words">
                Valor de Oportunidad:
              </p>
              <span className="text-lg sm:text-3xl font-black text-primary-700 break-words whitespace-nowrap">
                ${totalAlliancePrice} USD
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg sm:rounded-xl px-3 py-2.5 sm:p-4 border-2 border-red-300">
        <p className="text-xs sm:text-sm text-neutral-700 text-center break-words leading-relaxed">
          <strong className="text-red-800">Nota:</strong> Esto representa pasar de pagar entre{' '}
          <strong className="text-red-700">$35 a $40 dólares por sección</strong> a un promedio de{' '}
          <strong className="text-primary-700">$21 a $27 por sección</strong> para la promoción{' '}
          <strong className="text-primary-800">Alianza 2x1</strong>.
        </p>
      </div>
    </div>
  )
}

