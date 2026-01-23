import { brand } from '@/config/brand'

export function PowerSection() {
  return (
    <section className="relative overflow-hidden py-8 bg-gradient-to-b from-white to-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center min-h-[70vh] py-12">
          <div className="flex-1 px-4 lg:px-12 relative z-[3]">
            <div className="relative inline-block mb-4">
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-black leading-none text-primary-800 uppercase relative"
                style={{
                  WebkitTextStroke: '1px rgba(0, 44, 95, 0.3)',
                }}
              >
                <span className="absolute top-1 left-1 text-transparent" style={{ WebkitTextStroke: '1px rgba(0, 44, 95, 0.3)' }}>
                  POTENCIA
                </span>
                POTENCIA
              </h2>
            </div>

            <h3 className="text-4xl md:text-5xl lg:text-6xl text-accent-500 mb-6 leading-none font-black -mt-2">
              TU PRESENCIA DIGITAL
            </h3>

            {/* Domain showcase */}
            <div className="flex flex-wrap items-center justify-center gap-2 my-8 -rotate-2">
              <span className="text-2xl md:text-3xl font-bold text-primary-800 inline-block">
                tu
              </span>
              <span
                className="text-3xl md:text-4xl font-bold text-white px-6 py-4 rounded-full inline-block shadow-xl rotate-2 scale-105 mx-1"
                style={{
                  background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.primary[400]})`,
                  boxShadow: '0 10px 30px rgba(0, 116, 228, 0.3)',
                }}
              >
                dominio.com
              </span>
              <span className="text-xl md:text-2xl font-bold italic bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent inline-block">
                profesional
              </span>
            </div>

            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed max-w-2xl">
              Crea tu sitio web profesional con las mejores herramientas y tecnologías
              de vanguardia. Potencia tu marca digital con IDSV.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}





