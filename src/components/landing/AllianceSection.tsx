import { brand } from '@/config/brand'

export function AllianceSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-white via-neutral-50 to-white">
      {/* Formas decorativas */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-30 blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-200 rounded-full opacity-30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="block text-primary-800 uppercase">LA ALIANZA IDEAL</span>
            <span className="block text-accent-600 mt-2">PARA ALCANZAR EL MÁXIMO</span>
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r mt-2"
              style={{
                backgroundImage: `linear-gradient(135deg, ${brand.colors.primary[600]}, ${brand.colors.accent[500]})`,
              }}
            >
              POTENCIAL DIGITAL
            </span>
          </h2>
        </div>

        {/* Sistema orbital */}
        <div className="relative h-96 md:h-[500px] max-w-4xl mx-auto mb-12">
          {/* Órbitas */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute w-full h-64 border-2 rounded-full opacity-20"
              style={{
                borderImage: `linear-gradient(90deg, ${brand.colors.primary[400]}, ${brand.colors.accent[500]}) 1`,
                borderStyle: 'dashed',
              }}
            />
            <div
              className="absolute w-3/4 h-48 border-2 rounded-full opacity-30"
              style={{
                borderImage: `linear-gradient(90deg, ${brand.colors.primary[400]}, ${brand.colors.accent[500]}) 1`,
                borderStyle: 'dashed',
              }}
            />
          </div>

          {/* Líneas de conexión SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={brand.colors.primary[400]} stopOpacity="1" />
                <stop offset="100%" stopColor={brand.colors.accent[500]} stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              d="M200,250 Q500,180 800,250"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M200,250 Q500,320 800,250"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
          </svg>

          {/* Logos */}
          <div className="absolute left-[10%] top-1/2 -translate-y-1/2">
            <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-110 transition-transform">
              <img
                src="https://federaciondecoaching.com/wp-content/uploads/2021/09/180.55-01.png"
                alt="ICFM"
                className="w-32 h-auto"
              />
            </div>
          </div>

          <div className="absolute right-[10%] top-1/2 -translate-y-1/2">
            <div className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-110 transition-transform">
              <img
                src={brand.company.logo.main}
                alt="IDSV"
                className="w-32 h-auto"
              />
            </div>
          </div>

          {/* Partículas orbitando */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-400 rounded-full animate-ping" />
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-500 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        </div>

        {/* Descripción */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed">
            La <strong className="text-primary-700">sinergia perfecta</strong> entre{' '}
            <strong>ICFM</strong> e <strong>IDSV</strong> crea un{' '}
            <span
              className="font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${brand.colors.primary[600]}, ${brand.colors.accent[500]})`,
              }}
            >
              sistema orbital digital
            </span>{' '}
            diseñado para potenciar el{' '}
            <strong className="text-primary-700">crecimiento profesional</strong> de coaches y mentores.
          </p>
        </div>
      </div>
    </section>
  )
}





