import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'

export function QuotationConversion() {
  const [timeLeft, setTimeLeft] = useState(48 * 60 * 60 * 1000)

  useEffect(() => {
    // Reiniciar contador siempre que se carga la página
    localStorage.setItem(
      'paymentPlanCountdown',
      JSON.stringify({
        startTime: Date.now(),
        initialTime: 48 * 60 * 60 * 1000,
      })
    )
    setTimeLeft(48 * 60 * 60 * 1000)

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) return 0
        const saved = JSON.parse(localStorage.getItem('paymentPlanCountdown') || '{}')
        if (!saved.startTime || !saved.initialTime) return 0
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

  const handleApprove = () => {
    const phoneNumber = '584123563070'
    const message = encodeURIComponent(
      'Quiero incluir mi desarrollo en la Alianza 2x1. Deseo completar el pago inicial de $220 USD y comenzar mi migración digital.'
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border-2 border-red-500 shadow-2xl">
      {/* Gradiente animado de fondo PREDOMINANTEMENTE ROJO */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800 animate-gradient-shift" />
      <div className="absolute inset-0 bg-gradient-to-tr from-red-800/60 via-red-700/40 to-red-900/60" />
      <div className="absolute inset-0 bg-gradient-to-bl from-red-700/50 via-transparent to-red-900/50" />
      
      {/* Contenido */}
      <div className="relative z-10 p-1.5 sm:p-4 md:p-6 lg:p-8 xl:p-12 text-white overflow-x-hidden w-full">
        {/* Título principal con badge */}
        <div className="text-center mb-3 sm:mb-8">
          <h3 className="text-[0.8rem] sm:text-2xl md:text-3xl lg:text-4xl mb-2 sm:mb-4 leading-tight tracking-wide uppercase break-words">
            <span className="font-black italic">Desarrollo</span>{' '}
            <span className="font-extrabold underline decoration-2 underline-offset-4">web</span>{' '}
            <span className="font-black">profesional</span>{' '}
            <span className="font-extrabold italic underline decoration-2 underline-offset-4">premium</span>
          </h3>
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-red-600/30 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full border-2 border-red-400 shadow-lg mb-1 max-w-full">
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              ¿Sabías que estás obteniendo
            </span>
            <span className="bg-gradient-to-br from-blue-600 to-blue-800 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-3xl font-black text-sm sm:text-base md:text-lg lg:text-xl shadow-xl border-2 border-blue-400/50">
              +60%
            </span>
            <span className="text-xs sm:text-sm md:text-base font-semibold">
              de descuento
            </span>
            <span className="text-xs sm:text-sm opacity-90 italic">
              en tu ecosistema digital?
            </span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="w-full space-y-4 sm:space-y-6">
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 sm:p-6 border-2 border-white/50 shadow-2xl">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center mb-4 sm:mb-6 text-white font-medium break-words">
              Una plataforma profesional con{' '}
              <span className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 rounded-full bg-accent-600/30 border-2 border-accent-500 text-xs sm:text-sm md:text-base font-semibold italic">
                arquitectura moderna, ecosistema optimizado y tecnologías de vanguardia
              </span>{' '}
              tiene un{' '}
              <span className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-1 sm:py-2 rounded-full bg-primary-600/30 border-2 border-primary-400 text-xs sm:text-sm md:text-base font-bold shadow-md">
                valor de mercado entre $500 y $1,000 USD
              </span>{' '}
              en el mercado internacional actual.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {/* Valor real: tarjeta en rojo/vinotinto */}
              <div className="bg-gradient-to-br from-red-500/90 via-red-600/85 to-red-700/90 rounded-xl p-3 sm:p-4 md:p-5 border-3 border-red-300 shadow-2xl">
                <p className="text-[10px] sm:text-[11px] md:text-xs font-semibold mb-2 uppercase tracking-wide text-white break-words">
                  Valor real internacional
                </p>
                <p className="text-xl sm:text-2xl font-black text-white mb-2 break-words">$500 - $1,000 USD</p>
                <p className="text-[9px] sm:text-[10px] md:text-xs text-red-50 font-medium leading-snug break-words">
                  Por cada plataforma, estamos hablando de un promedio de{' '}
                  <span className="font-bold">$750 USD</span> por plataforma construida con estas
                  herramientas de vanguardia que posicionan a tu marca como líder en tu sector.
                </p>
              </div>
              {/* Inversión con alianza: tarjeta destacada en azul */}
              <div className="bg-gradient-to-br from-blue-600/90 via-blue-700/80 to-blue-800/90 rounded-xl p-3 sm:p-4 md:p-5 border-3 border-blue-400 shadow-2xl">
                <p className="text-[10px] sm:text-[11px] md:text-xs font-semibold mb-2 uppercase tracking-wide text-white break-words">
                  Tu inversión con Alianza 2x1
                </p>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-red-200 line-through text-base sm:text-lg font-bold break-words">$650 USD</span>
                  <span className="text-xl sm:text-2xl font-black text-white break-words">$325 USD</span>
                </div>
                <div className="space-y-1.5 text-[9px] sm:text-[10px] md:text-xs text-white break-words">
                  <p className="font-bold">
                    - Por cada plataforma <span className="text-yellow-200">$325 USD</span>
                  </p>
                  <p className="font-semibold mt-2 mb-1">Obtienes:</p>
                  <p className="font-bold">
                    - 2 plataformas por el precio de una <span className="text-yellow-200">$650 USD</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 flex justify-center">
              <span className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full bg-primary-600/30 border-2 border-primary-400 text-xs sm:text-sm md:text-base font-bold shadow-md break-words">
                Págalo en cómodas cuotas
              </span>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 sm:p-6 border-2 border-white/50 shadow-xl">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center text-white space-y-2 sm:space-y-3 break-words">
              <span className="block">
                Los precios reflejados corresponden a{' '}
                <span className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 rounded-full bg-accent-600/30 border-2 border-accent-500 text-xs sm:text-sm md:text-base font-semibold italic">
                  costos de desarrollo en Latinoamérica
                </span>
                .
              </span>
              <span className="block mt-2 sm:mt-3">
                Y aún así, con nuestra{' '}
                <span className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 rounded-full bg-accent-600/30 border-2 border-accent-500 text-xs sm:text-sm md:text-base font-semibold">
                  Alianza Estratégica 2x1, no estás pagando ni el 40% del valor real
                </span>{' '}
                que tendría este proyecto en mercados internacionales.
              </span>
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 sm:p-6 border-2 border-yellow-400/60 shadow-xl">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center leading-relaxed text-white break-words">
              Además, estás{' '}
              <span className="inline-flex flex-wrap items-center justify-center px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white text-xs sm:text-sm md:text-base font-black shadow-xl border-2 border-red-400/60 mx-1">
                ahorrando más del 30%
              </span>{' '}
              comparado con el valor de referencia para desarrollar plataformas de este nivel 
              en la región latinoamericana.
            </p>
          </div>
        </div>

        {/* Botón de acción + contador 48h */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2 sm:gap-3 w-full">
          <button
            onClick={handleApprove}
            className="group relative w-full max-w-xs sm:max-w-sm px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white font-black text-base sm:text-lg md:text-xl rounded-3xl shadow-2xl hover:shadow-blue-700/70 border-2 border-blue-500/80 transform hover:scale-105 transition-all duration-300 animate-bounce-subtle"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="break-words">INICIAR AHORA</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <div className="text-white text-center mb-2 space-y-1 w-full px-2">
            <p className="text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-wider break-words">
              NO DEJES PASAR ESTA OPORTUNIDAD
            </p>
            <p className="text-xs sm:text-sm md:text-base font-bold italic break-words">
              Inicia hoy con la{' '}
              <span className="font-black text-yellow-200 underline decoration-2 underline-offset-2">
                tercera parte
              </span>{' '}
              de este{' '}
              <span className="font-extrabold text-yellow-200">
                gran descuento
              </span>
            </p>
          </div>
          <div className="text-white text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wide mb-1">
            QUEDAN
          </div>
          <div className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-white via-slate-50 to-white border-2 border-red-500 shadow-md">
            <span className="text-red-600 text-lg sm:text-xl md:text-2xl font-black tracking-wider">
              {hours.toString().padStart(2, '0')}:
              {minutes.toString().padStart(2, '0')}:
              {seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Texto de urgencia */}
        <p className="text-center mt-4 sm:mt-6 text-xs sm:text-sm opacity-90 break-words px-2">
          ⚡ Oferta limitada • Confirma en menos de 48 horas para activar tu plan de pago
        </p>
      </div>

      {/* Animación CSS personalizada */}
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
    </div>
  )
}

