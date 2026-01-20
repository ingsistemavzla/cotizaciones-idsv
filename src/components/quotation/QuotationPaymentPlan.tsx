import { Clock, CreditCard, CheckCircle2, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export function QuotationPaymentPlan() {
  const installments = [
    {
      number: 1,
      amount: 220,
      description: 'Comienza hoy mismo la evaluación y restructuración de tu plataforma digital y paga el resto en dos cómodas cuotas al finalizar cada entrega.',
      status: 'Inicial',
      platform: null,
    },
    {
      number: 2,
      amount: 215,
      description: 'Al terminar la primera plataforma',
      status: 'Intermedia',
      platform: 'https://federaciondecoaching.com/',
    },
    {
      number: 3,
      amount: 215,
      description: 'Al terminar la segunda plataforma',
      status: 'Final',
      platform: 'https://academiadecoach.com/',
    },
  ]

  const total = installments.reduce((sum, inst) => sum + inst.amount, 0)

  // Contador regresivo de 48 horas
  const [timeLeft, setTimeLeft] = useState(() => {
    // Obtener tiempo guardado en localStorage o iniciar con 48 horas
    const savedTime = localStorage.getItem('paymentPlanCountdown')
    if (savedTime) {
      const parsed = JSON.parse(savedTime)
      const elapsed = Date.now() - parsed.startTime
      const remaining = parsed.initialTime - elapsed
      return remaining > 0 ? remaining : 0
    }
    return 48 * 60 * 60 * 1000 // 48 horas en milisegundos
  })

  useEffect(() => {
    // Guardar tiempo inicial si no existe
    if (!localStorage.getItem('paymentPlanCountdown')) {
      localStorage.setItem('paymentPlanCountdown', JSON.stringify({
        startTime: Date.now(),
        initialTime: 48 * 60 * 60 * 1000
      }))
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0
        const newTime = prev - 1000
        // Actualizar localStorage
        const saved = JSON.parse(localStorage.getItem('paymentPlanCountdown') || '{}')
        const elapsed = Date.now() - saved.startTime
        const remaining = saved.initialTime - elapsed
        return remaining > 0 ? remaining : 0
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  return (
    <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white sm:rounded-2xl p-1.5 sm:p-4 md:p-6 lg:p-8 border-2 border-primary-800 sm:shadow-2xl relative overflow-hidden w-full">
      {/* Badge de tiempo limitado con contador */}
      <div className="absolute top-1.5 right-1.5 sm:top-4 sm:right-4 bg-accent-600 text-white px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-2 rounded-full text-[0.8rem] sm:text-sm font-black uppercase tracking-wide transform rotate-12 shadow-lg">
        <Clock className="w-2.5 h-2.5 sm:w-4 sm:h-4 inline-block mr-0.5 sm:mr-2" />
        <span className="whitespace-nowrap">{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
      </div>

      <div className="relative z-10">
        {/* Título */}
        <div className="text-center mb-3 sm:mb-8 pr-10 sm:pr-0">
          <h2 className="text-[0.8rem] sm:text-2xl md:text-3xl lg:text-4xl font-black mb-1.5 sm:mb-3 uppercase break-words">
            OFERTA ESPECIAL DE PAGO
          </h2>
          <p className="text-[0.8rem] sm:text-lg md:text-xl opacity-90 break-words">
            Si pagas en menos de 48 horas, puedes dividir el pago en 3 partes
          </p>
        </div>

        {/* Plan de pagos */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {/* Cuota 1 */}
          {installments.map((installment, index) => {
            if (installment.number === 1) {
              return (
                <div
                  key={installment.number}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className="bg-white text-primary-700 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-black text-lg sm:text-xl flex-shrink-0">
                        {installment.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base sm:text-lg font-bold mb-1 break-words">
                          Cuota {installment.number} - {installment.status}
                        </p>
                        <p className="text-xs sm:text-sm opacity-90 break-words">{installment.description}</p>
                      </div>
                    </div>
                    <div className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl border-2 border-red-500 shadow-lg text-center md:text-right w-full md:w-auto">
                      <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide opacity-90 break-words">
                        Empieza hoy tu desarrollo desde
                      </p>
                      <p className="text-2xl sm:text-3xl font-black mt-1 break-words">${installment.amount} USD</p>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          })}
          
          {/* Texto entre cuota 1 y cuotas 2-3 */}
          <div className="text-center py-3 sm:py-4 border-t border-white/20 border-b border-white/20">
            <p className="text-sm sm:text-base md:text-lg font-semibold opacity-90 break-words px-2">
              Paga el resto en dos cómodas cuotas al terminar cada plataforma
            </p>
          </div>

          {/* Cuotas 2 y 3 */}
          {installments.map((installment, index) => {
            if (installment.number > 1) {
              return (
                <div
                  key={installment.number}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <div className="bg-white text-primary-700 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-black text-lg sm:text-xl flex-shrink-0">
                        {installment.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base sm:text-lg font-bold mb-1 break-words">
                          Cuota {installment.number} - {installment.status}
                        </p>
                        <p className="text-xs sm:text-sm opacity-90 mb-2 break-words">{installment.description}</p>
                        {installment.platform && (
                          <a 
                            href={installment.platform} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-sm break-all"
                          >
                            {installment.platform}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 justify-end md:justify-start">
                      <span className="text-2xl sm:text-3xl font-black break-words">${installment.amount} USD</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>

        {/* Total */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border-2 border-white/30">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
            <span className="text-lg sm:text-xl font-bold break-words">Total del Plan:</span>
            <span className="text-2xl sm:text-3xl font-black break-words">${total} USD</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm opacity-90 mt-2 break-words">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>Mismo precio total, pagado en 3 partes cómodas</span>
          </div>
        </div>

        {/* Condición */}
        <div className="mt-4 sm:mt-6 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-accent-600/30 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-accent-500 max-w-full">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="font-bold text-xs sm:text-sm md:text-base break-words">
              Válido solo si confirmas en menos de 48 horas
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

