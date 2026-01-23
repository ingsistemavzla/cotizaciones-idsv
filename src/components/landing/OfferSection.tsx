import { Zap, Clock } from 'lucide-react'
import { Button } from '../ui/Button'
import { brand } from '@/config/brand'

export function OfferSection() {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Formas decorativas de fondo */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200 rounded-full opacity-20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-black text-primary-800 uppercase mb-4">
            OFERTA ÚNICA
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Columna izquierda - Beneficios */}
          <div className="text-center md:text-left">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white px-8 py-6 rounded-2xl shadow-xl mb-6 inline-block">
              <h3 className="text-2xl font-bold uppercase tracking-wide">
                ALOJAMIENTO + DOMINIO
              </h3>
            </div>
            <div className="inline-block">
              <div
                className="px-8 py-4 rounded-full text-white font-black text-2xl uppercase shadow-lg transform rotate-[-5deg]"
                style={{
                  background: `linear-gradient(135deg, ${brand.colors.accent[500]}, ${brand.colors.accent[600]})`,
                }}
              >
                GRATIS
              </div>
            </div>
          </div>

          {/* Columna derecha - Precio */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-black text-primary-800 mb-8 uppercase">
              <span className="text-accent-600">OBTÉN</span>{' '}
              <span className="text-primary-600">HOY</span> TU{' '}
              <span className="text-accent-600">WEB</span>
            </h3>

            <div
              className="relative inline-block p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              style={{
                background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.primary[700]})`,
              }}
            >
              <div className="text-white">
                <div className="text-lg font-bold uppercase mb-2 opacity-90">
                  SOLO POR
                </div>
                <div className="text-4xl font-black uppercase mb-2">
                  OFERTA
                </div>
                <div className="text-7xl font-black mb-2">
                  79,99<span className="text-4xl">$</span>
                </div>
                <div className="text-xl font-bold uppercase opacity-90">
                  UN SOLO PAGO
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="danger"
            size="lg"
            className="px-10 py-6 text-xl font-bold uppercase shadow-xl hover:shadow-2xl"
          >
            <Zap className="mr-2 w-6 h-6" />
            QUIERO APROVECHAR ESTA OFERTA
          </Button>
          <p className="mt-4 text-neutral-600 flex items-center justify-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">Oferta válida solo por tiempo limitado</span>
          </p>
        </div>
      </div>
    </section>
  )
}





