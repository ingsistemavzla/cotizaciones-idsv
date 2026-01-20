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
    <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-8 border-2 border-primary-800 shadow-2xl relative overflow-hidden">
      {/* Badge de tiempo limitado con contador */}
      <div className="absolute top-4 right-4 bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-black uppercase tracking-wide transform rotate-12 shadow-lg">
        <Clock className="w-4 h-4 inline-block mr-2" />
        {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>

      <div className="relative z-10">
        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black mb-3 uppercase">
            OFERTA ESPECIAL DE PAGO
          </h2>
          <p className="text-xl opacity-90">
            Si pagas en menos de 48 horas, puedes dividir el pago en 3 partes
          </p>
        </div>

        {/* Plan de pagos */}
        <div className="space-y-4 mb-8">
          {/* Cuota 1 */}
          {installments.map((installment, index) => {
            if (installment.number === 1) {
              return (
                <div
                  key={installment.number}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="bg-white text-primary-700 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl flex-shrink-0">
                        {installment.number}
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-bold mb-1">
                          Cuota {installment.number} - {installment.status}
                        </p>
                        <p className="text-sm opacity-90">{installment.description}</p>
                      </div>
                    </div>
                    <div className="bg-red-600 text-white px-6 py-3 rounded-2xl border-2 border-red-500 shadow-lg text-right">
                      <p className="text-xs font-semibold uppercase tracking-wide opacity-90">
                        Empieza hoy tu desarrollo desde
                      </p>
                      <p className="text-3xl font-black mt-1">${installment.amount} USD</p>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          })}
          
          {/* Texto entre cuota 1 y cuotas 2-3 */}
          <div className="text-center py-4 border-t border-white/20 border-b border-white/20">
            <p className="text-lg font-semibold opacity-90">
              Paga el resto en dos cómodas cuotas al terminar cada plataforma
            </p>
          </div>

          {/* Cuotas 2 y 3 */}
          {installments.map((installment, index) => {
            if (installment.number > 1) {
              return (
                <div
                  key={installment.number}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 hover:bg-white/15 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="bg-white text-primary-700 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl flex-shrink-0">
                        {installment.number}
                      </div>
                      <div>
                        <p className="text-lg font-bold mb-1">
                          Cuota {installment.number} - {installment.status}
                        </p>
                        <p className="text-sm opacity-90 mb-2">{installment.description}</p>
                        {installment.platform && (
                          <a 
                            href={installment.platform} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-sm"
                          >
                            {installment.platform}
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black">${installment.amount} USD</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>

        {/* Total */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl font-bold">Total del Plan:</span>
            <span className="text-3xl font-black">${total} USD</span>
          </div>
          <div className="flex items-center gap-2 text-sm opacity-90 mt-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Mismo precio total, pagado en 3 partes cómodas</span>
          </div>
        </div>

        {/* Condición */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-accent-600/30 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-accent-500">
            <Clock className="w-5 h-5" />
            <span className="font-bold">
              Válido solo si confirmas en menos de 48 horas
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

