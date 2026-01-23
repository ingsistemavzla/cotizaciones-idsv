import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { brand } from '@/config/brand'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Banner Hero */}
      <div
        className="flex min-h-screen bg-cover bg-center bg-fixed relative"
        style={{
          backgroundImage: `linear-gradient(90deg, 
            rgba(0, 31, 63, 0.93) 0%,
            rgba(0, 44, 95, 0.91) 40%,
            rgba(0, 86, 179, 0.89) 100%
          ), url('https://federaciondecoaching.com/wp-content/uploads/2025/04/slide-2-scaled.jpg')`,
        }}
      >
        {/* Overlay adicional */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(
              90deg,
              rgba(0,0,0,0.1) 0%,
              rgba(0,0,0,0) 50%,
              rgba(255,255,255,0.15) 100%
            )`,
          }}
        />

        <div className="container mx-auto px-4 relative z-[3] flex items-center w-full">
          <div className="flex flex-col lg:flex-row-reverse items-center w-full gap-8 py-20">
            {/* Columna de texto */}
            <div className="flex-1 flex items-center px-4 lg:px-10">
              <div className="text-white w-full max-w-2xl mx-auto py-10">
                <div className="relative inline-block mb-6">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 rounded-[60%_40%_40%_60%_/_60%_40%_60%_40%] rotate-[-5deg] -z-10 shadow-lg"
                    style={{
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                    }}
                  />
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight px-6 md:px-10 py-6 text-white uppercase relative z-[1] drop-shadow-lg">
                    LANZA TU WEB PROFESIONAL
                  </h1>
                </div>

                <div className="w-36 md:w-40 h-1.5 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full my-8" />

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-8 text-white drop-shadow-md">
                  POTENCIA TU NEGOCIO ONLINE
                </h2>

                <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                  Crea tu presencia digital profesional con IDSV
                </p>

                <Button
                  variant="danger"
                  size="lg"
                  className="group px-8 py-6 text-lg font-bold uppercase tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  Comenzar Ahora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Columna de imagen */}
            <div className="flex-1 relative flex items-center justify-center px-4 lg:px-10">
              <div
                className="relative w-full max-w-lg aspect-square rounded-[40%_60%_60%_40%_/_50%_50%_50%_50%] overflow-hidden shadow-2xl transition-all duration-500 hover:rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.primary[700]})`,
                  padding: '0.5rem',
                }}
              >
                <div className="w-full h-full rounded-[40%_60%_60%_40%_/_50%_50%_50%_50%] overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <img
                    src="https://federaciondecoaching.com/wp-content/uploads/2025/04/slide-2-scaled.jpg"
                    alt="Hero"
                    className="w-full h-full object-cover scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape inferior */}
        <div className="absolute bottom-0 left-0 w-full h-48 z-[2]">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <path
              d="M0,100 Q300,50 600,100 T1200,100 L1200,200 L0,200 Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}





