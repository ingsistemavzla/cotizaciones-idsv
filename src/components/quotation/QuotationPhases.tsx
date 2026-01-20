import { Phase } from '@/types/quotation'
import { CheckCircle2, Clock, DollarSign, TrendingDown } from 'lucide-react'

interface QuotationPhasesProps {
  phases: Phase[]
}

interface PhaseWithPrices extends Phase {
  marketPrice: number
  alliancePrice: number
  marketHours: number
  allianceHours: number
}

export function QuotationPhases({ phases }: QuotationPhasesProps) {
  // Calcular precios reales y de oferta para cada fase
  const phasesWithPrices: PhaseWithPrices[] = phases.map((phase) => {
    // Precio real es el subtotalPrice actual (sin oferta)
    // Precio de oferta es aproximadamente 66% del real (basado en $565 -> $375)
    const marketPrice = phase.subtotalPrice
    const alliancePrice = Math.round(marketPrice * 0.6637) // Ratio $375/$565
    
    return {
      ...phase,
      marketPrice,
      alliancePrice,
      marketHours: phase.subtotalHours,
      allianceHours: phase.subtotalHours, // Mismas horas, diferente precio
    }
  })

  const totalMarketPrice = phasesWithPrices.reduce((sum, phase) => sum + phase.marketPrice, 0)
  const totalAlliancePrice = phasesWithPrices.reduce((sum, phase) => sum + phase.alliancePrice, 0)
  const totalHours = phasesWithPrices.reduce((sum, phase) => sum + phase.marketHours, 0)

  return (
    <div className="bg-white sm:rounded-2xl sm:shadow-xl p-1.5 sm:p-4 md:p-6 lg:p-8 border-2 border-neutral-200 overflow-x-hidden w-full">
      <h2 className="text-[0.8rem] sm:text-2xl md:text-3xl lg:text-4xl font-black text-primary-800 mb-3 sm:mb-8 break-words">
        FASES DEL PROYECTO
      </h2>

      <div className="space-y-3 sm:space-y-6">
        {phasesWithPrices.map((phase) => (
          <div
            key={phase.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-neutral-200"
          >
            {/* Header de la fase */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-2 sm:p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 sm:gap-4">
                <div className="min-w-0 flex-1">
                  <h3 className="text-[0.8rem] sm:text-2xl font-black mb-1 sm:mb-2 break-words">
                    FASE {phase.id}
                  </h3>
                  <p className="text-[0.8rem] sm:text-lg opacity-90 break-words">{phase.name}</p>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 px-2 sm:px-4 py-1 sm:py-2 rounded-lg flex-shrink-0">
                  <Clock className="w-3 h-3 sm:w-5 sm:h-5" />
                  <span className="font-bold text-[0.8rem] sm:text-base break-words">{phase.duration}</span>
                </div>
              </div>
            </div>

            {/* Tareas de la fase */}
            <div className="p-4 sm:p-6">
              {/* Encabezados de columnas para las tareas */}
              <div className="flex justify-end gap-3 sm:gap-4 mb-2 pr-2">
                <span className="text-red-700 font-bold text-[10px] sm:text-xs break-words">Real</span>
                <span className="text-primary-700 font-bold text-[10px] sm:text-xs break-words">Oportunidad</span>
              </div>
              
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {phase.tasks.map((task, taskIndex) => {
                  // Calcular precio de oferta (aproximadamente 66.37% del real)
                  const taskMarketPrice = task.price
                  const taskAlliancePrice = Math.round(task.price * 0.6637)
                  
                  return (
                    <div
                      key={taskIndex}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 p-3 sm:p-4 bg-neutral-50 rounded-lg border border-neutral-200"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-neutral-800 text-sm sm:text-base break-words">{task.description}</p>
                        <p className="text-xs sm:text-sm text-neutral-600 mt-1 break-words">{task.hours}h</p>
                      </div>
                      <div className="flex items-center gap-3 sm:gap-4 justify-end sm:justify-start">
                        <div className="flex flex-col items-end">
                          <span className="text-red-600 line-through text-xs sm:text-sm font-semibold break-words" style={{ textDecorationThickness: '1px' }}>
                            ${taskMarketPrice} USD
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="font-black text-primary-700 text-base sm:text-lg break-words">${taskAlliancePrice} USD</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Comparativa de precios por fase */}
              <div className="bg-gradient-to-br from-primary-50 to-red-50 rounded-lg p-3 sm:p-4 border-2 border-primary-300 mb-4">
                {/* Encabezados */}
                <div className="flex justify-end gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <span className="text-red-700 font-bold text-xs sm:text-sm break-words">Real</span>
                  <span className="text-primary-700 font-bold text-xs sm:text-sm break-words">Oportunidad</span>
                </div>
                
                {/* Precios */}
                <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-2 sm:gap-4">
                  <div className="flex flex-col items-end sm:items-end">
                    <p className="text-[10px] sm:text-xs text-neutral-600 mb-1 break-words">Tiempo: {phase.marketHours} Horas</p>
                    <p className="text-lg sm:text-xl font-black text-red-700 line-through break-words" style={{ textDecorationThickness: '2px' }}>
                      ${phase.marketPrice} USD
                    </p>
                  </div>
                  <div className="flex flex-col items-end sm:items-end">
                    <p className="text-[10px] sm:text-xs text-neutral-600 mb-1 break-words">Tiempo: {phase.allianceHours} Horas</p>
                    <p className="text-xl sm:text-2xl font-black text-primary-700 break-words">
                      ${phase.alliancePrice} USD
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Totales Comparativos */}
        <div className="space-y-3 sm:space-y-4">
          {/* Total de Fases */}
          <div className="bg-gradient-to-r from-primary-50 to-red-50 rounded-xl p-4 sm:p-6 border-2 border-primary-300">
            <h3 className="text-lg sm:text-xl font-black text-primary-800 mb-2 text-center break-words">
              TOTAL DE FASES
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 text-center mb-3 sm:mb-4 max-w-2xl mx-auto break-words px-2">
              Síntesis de las tres fases del proyecto: el{' '}
              <span className="font-bold text-red-700">valor real</span> de la planificación,
              desarrollo y automatización tendría un costo total de{' '}
              <span className="font-bold text-red-700">${totalMarketPrice} USD</span>; con la{' '}
              <span className="font-bold text-primary-700">oferta especial</span>, las mismas
              entregas estructuradas se obtienen por{' '}
              <span className="font-bold text-primary-700">${totalAlliancePrice} USD</span>,
              manteniendo las <span className="font-semibold">145 horas de trabajo especializado</span>.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-lg p-3 sm:p-4 border border-primary-200">
                <p className="text-xs sm:text-sm text-neutral-600 mb-1 break-words">Con Oferta:</p>
                <p className="text-2xl sm:text-3xl font-black text-primary-700 break-words">
                  ${totalAlliancePrice} USD
                </p>
                <p className="text-[10px] sm:text-xs text-neutral-500 mt-1 break-words">{totalHours} Horas</p>
              </div>
              <div className="bg-white rounded-lg p-3 sm:p-4 border border-red-200">
                <p className="text-xs sm:text-sm text-neutral-600 mb-1 break-words">Sin Oferta:</p>
                <p className="text-2xl sm:text-3xl font-black text-red-700 line-through break-words" style={{ textDecorationThickness: '2px' }}>
                  ${totalMarketPrice} USD
                </p>
                <p className="text-[10px] sm:text-xs text-neutral-500 mt-1 break-words">{totalHours} Horas</p>
              </div>
            </div>
          </div>

          {/* Valor Total del Mercado vs Oferta */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-4 sm:p-6 border-2 border-primary-800">
            <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4 text-center break-words">
              VALOR TOTAL DEL MERCADO VS OFERTA
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                <p className="text-xs sm:text-sm opacity-90 mb-1 break-words">Valor del Mercado (2 plataformas):</p>
                <p className="text-2xl sm:text-3xl font-black break-words">
                  ${totalMarketPrice * 2} USD
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/30">
                <p className="text-xs sm:text-sm opacity-90 mb-1 break-words">Valor con Oferta (2 plataformas):</p>
                <p className="text-2xl sm:text-3xl font-black break-words">
                  ${totalAlliancePrice * 2} USD
                </p>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20 text-center">
              <p className="text-base sm:text-lg font-bold break-words">
                Ahorro Total: ${(totalMarketPrice * 2) - (totalAlliancePrice * 2)} USD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

