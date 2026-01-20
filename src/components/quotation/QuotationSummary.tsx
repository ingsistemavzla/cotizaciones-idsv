import { Calculator, TrendingDown, Clock, CheckCircle } from 'lucide-react'

interface QuotationSummaryProps {
  summary: {
    phase1: number
    phase2: number
    phase3: number
    total: number
    marketValue2Platforms: number
    alliancePrice: number
    regularPrice: number
  }
}

export function QuotationSummary({ summary }: QuotationSummaryProps) {
  const totalSavings = summary.regularPrice - summary.alliancePrice
  const savingsPercentage = ((totalSavings / summary.regularPrice) * 100).toFixed(0)
  
  // Calcular precios de oferta (aproximadamente 66.37% del real, basado en $375/$565)
  const phase1Offer = Math.round(summary.phase1 * 0.6637)
  const phase2Offer = Math.round(summary.phase2 * 0.6637)
  const phase3Offer = Math.round(summary.phase3 * 0.6637)
  const totalOffer = phase1Offer + phase2Offer + phase3Offer

  return (
    <div className="bg-white sm:rounded-2xl sm:shadow-xl p-1.5 sm:p-4 md:p-6 lg:p-8 border-2 border-neutral-200 overflow-x-hidden w-full">
      <div className="text-center mb-3 sm:mb-8">
        <h2 className="text-[0.8rem] sm:text-2xl md:text-3xl lg:text-4xl font-black text-primary-800 mb-1.5 sm:mb-2 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 break-words">
          <Calculator className="w-5 h-5 sm:w-8 sm:h-8 text-primary-600 flex-shrink-0" />
          <span>RESUMEN DE INVERSIÓN ESTRUCTURADA</span>
        </h2>
        <p className="text-[0.8rem] sm:text-base md:text-lg text-neutral-600 font-semibold break-words">VALOR REAL VS OFERTA POR PLATAFORMA</p>
      </div>

      {/* Todo vertical - uno encima del otro */}
      <div className="space-y-3 sm:space-y-6 w-full md:max-w-3xl md:mx-auto">
        {/* Valor Real vs Oferta por Plataforma */}
        <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-3 sm:p-6 border-2 border-primary-200">
          <h3 className="text-[0.8rem] sm:text-xl font-black text-primary-800 mb-2 sm:mb-4">
            VALOR REAL POR PLATAFORMA
          </h3>
          
          {/* Encabezados de columnas */}
          <div className="flex justify-end gap-4 mb-2 pr-2">
            <span className="text-red-700 font-bold text-sm">Real</span>
            <span className="text-primary-700 font-bold text-sm">Oportunidad</span>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-neutral-700">Fase 1: Arquitectura</span>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-red-600 line-through text-sm font-semibold" style={{ textDecorationThickness: '1px' }}>
                    ${summary.phase1} USD
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-black text-primary-700 text-xl">${phase1Offer} USD</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-dashed border-neutral-300 pt-3">
              <span className="text-neutral-700">Fase 2: Desarrollo</span>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-red-600 line-through text-sm font-semibold" style={{ textDecorationThickness: '1px' }}>
                    ${summary.phase2} USD
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-black text-primary-700 text-xl">${phase2Offer} USD</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-dashed border-neutral-300 pt-3">
              <span className="text-neutral-700">Fase 3: Automatización</span>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-red-600 line-through text-sm font-semibold" style={{ textDecorationThickness: '1px' }}>
                    ${summary.phase3} USD
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-black text-primary-700 text-xl">${phase3Offer} USD</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center pt-4 border-t-2 border-primary-400 mt-3">
              <strong className="text-lg text-primary-800">TOTAL INVERSIÓN</strong>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-red-600 line-through text-lg font-bold" style={{ textDecorationThickness: '2px' }}>
                    ${summary.total} USD
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <strong className="text-3xl font-black text-primary-700">${totalOffer} USD</strong>
                </div>
              </div>
            </div>
          </div>
          
          {/* Etiquetas de comparativa */}
          <div className="mt-4 pt-4 border-t border-primary-300 flex justify-end gap-6 text-xs">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-red-600" />
              <span className="text-red-700 font-semibold">Precio Real</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary-600" />
              <span className="text-primary-700 font-semibold">Precio de Oportunidad</span>
            </div>
          </div>
        </div>

        {/* Valor Mercado 2 Plataformas */}
        <div className="bg-gradient-to-br from-neutral-50 to-white rounded-xl p-6 border-2 border-neutral-300">
          <h3 className="text-xl font-black text-neutral-700 mb-4 text-center">
            VALOR MERCADO 2 PLATAFORMAS
          </h3>
          <div className="text-center py-4">
            <p className="text-5xl font-black text-red-600 line-through mb-2" style={{ textDecorationThickness: '3px' }}>
              ${summary.marketValue2Platforms} USD
            </p>
            <p className="text-sm text-neutral-600">
              (${summary.total} USD × 2 plataformas sin descuento)
            </p>
          </div>
        </div>

        {/* Oferta Alianza */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-8 border-2 border-primary-800 shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-black mb-3">
              OFERTA ALIANZA ESTRATÉGICA
            </h3>
            <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-wide inline-block mb-4">
              MEMBRESÍA CORPORATIVA 2x1
            </div>
            <p className="text-base opacity-90 mb-6">
              Transformación total de Federación + Academia por precio único
            </p>
          </div>
          
          <div className="space-y-4 bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Precio Regular:</span>
              <span className="text-2xl font-black line-through opacity-80">
                ${summary.regularPrice} USD
              </span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t-2 border-white/30">
              <span className="text-xl font-bold">Precio Alianza:</span>
              <span className="text-4xl font-black">${summary.alliancePrice} USD</span>
            </div>
            <p className="text-sm opacity-90 text-center pt-2">
              ($375 USD por cada plataforma totalmente terminada)
            </p>
          </div>

          <div className="mt-6 text-center">
            <div className="bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-lg p-4 inline-block">
              <div className="flex items-center justify-center gap-2 font-black text-lg">
                <TrendingDown className="w-6 h-6" />
                <span>
                  Ahorras ${totalSavings} USD ({savingsPercentage}%)
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm mt-6 pt-6 border-t border-white/20">
            <Clock className="w-5 h-5" />
            <span>
              <strong>Tiempo total:</strong> 20 días (15 días por plataforma)
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

