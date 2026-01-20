import { Rocket } from 'lucide-react'
import { brand } from '@/config/brand'

export function BoostSection() {
  return (
    <section className="relative overflow-hidden py-8 bg-gradient-to-b from-neutral-100 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] py-12 relative">
          {/* Columna de imagen */}
          <div className="flex-1 relative h-full min-h-[600px] flex justify-center items-center z-[2] overflow-visible">
            {/* Formas decorativas */}
            <div
              className="absolute w-[90%] h-[60%] left-[5%] top-[20%] rounded-[60%_40%_70%_30%_/_50%_60%_40%_50%] shadow-2xl animate-pulse"
              style={{
                background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.primary[700]})`,
                boxShadow: '0 40px 80px rgba(0, 44, 95, 0.4)',
              }}
            />

            <div className="absolute w-44 h-44 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full opacity-70 top-[5%] left-[5%] animate-bounce" style={{ animationDuration: '15s' }} />
            <div className="absolute w-44 h-44 bg-gradient-to-br from-neutral-100 to-white rounded-full opacity-90 bottom-[5%] right-[5%] animate-bounce" style={{ animationDuration: '12s', animationDelay: '3s' }} />

            {/* Imagen principal */}
            <img
              src="https://federaciondecoaching.com/wp-content/uploads/2025/04/slide-2-scaled.jpg"
              alt="Boost"
              className="relative z-10 w-[70%] max-w-lg h-auto object-contain drop-shadow-2xl animate-float"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
              }}
            />
          </div>

          {/* Columna de texto */}
          <div className="flex-1 px-4 lg:px-12 relative z-[3] mt-12 lg:mt-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-primary-800 mb-6 uppercase">
              IMPULSA
            </h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              <span
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.primary[700]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                TU MARCA
              </span>
            </h3>
            <p className="text-xl text-accent-600 italic font-semibold mb-6 inline-block">
              Al siguiente nivel
            </p>

            <div className="space-y-4 text-lg text-neutral-700">
              <p>
                Con las herramientas más avanzadas y un equipo experto, llevamos tu
                presencia digital al siguiente nivel.
              </p>
              <p>
                Diseño profesional, rendimiento optimizado y resultados que marcan la diferencia.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Rocket className="w-12 h-12 text-accent-500" />
              <span className="text-xl font-bold text-primary-700">
                Tecnología de vanguardia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

