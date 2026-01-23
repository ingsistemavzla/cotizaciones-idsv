import { CheckCircle, Globe, Shield, Zap, Smartphone, Search } from 'lucide-react'
import { brand } from '@/config/brand'

interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Globe,
    title: 'Diseño Profesional',
    description: 'Interfaces modernas y atractivas que capturan la esencia de tu marca.',
  },
  {
    icon: Zap,
    title: 'Rendimiento Óptimo',
    description: 'Velocidad y eficiencia garantizadas con tecnología de última generación.',
  },
  {
    icon: Shield,
    title: 'Seguridad Avanzada',
    description: 'Protección completa con SSL, firewalls y backups automáticos.',
  },
  {
    icon: Smartphone,
    title: '100% Responsive',
    description: 'Adaptado perfectamente a todos los dispositivos y tamaños de pantalla.',
  },
  {
    icon: Search,
    title: 'SEO Optimizado',
    description: 'Posicionamiento en buscadores para maximizar tu visibilidad online.',
  },
]

export function FeaturesSection() {
  return (
    <section className="relative overflow-visible py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-800 uppercase relative inline-block mb-4">
            <span
              className="absolute top-1 left-1 text-transparent"
              style={{ WebkitTextStroke: '1px rgba(0, 44, 95, 0.2)' }}
            >
              CARACTERÍSTICAS
            </span>
            CARACTERÍSTICAS
          </h2>
        </div>

        {/* Cards de características */}
        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 1

            return (
              <div
                key={index}
                className={`relative w-full lg:w-3/5 h-auto min-h-[280px] rounded-3xl overflow-visible shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-neutral-50 to-white ${
                  isEven ? 'lg:ml-auto' : ''
                }`}
              >
                {/* Borde lateral animado */}
                <div
                  className={`absolute w-3 h-full top-0 ${isEven ? 'right-0' : 'left-0'} z-[2] rounded-l-3xl ${
                    isEven ? 'rounded-l-none rounded-r-3xl' : ''
                  } transition-all duration-300 hover:w-4`}
                  style={{
                    background: `linear-gradient(to bottom, ${brand.colors.primary[400]}, ${brand.colors.accent[500]})`,
                    boxShadow: isEven
                      ? '-2px 0 8px rgba(0, 116, 228, 0.6), 2px 0 8px rgba(217, 30, 24, 0.6)'
                      : '2px 0 8px rgba(0, 116, 228, 0.6), -2px 0 8px rgba(217, 30, 24, 0.6)',
                  }}
                />

                <div className={`pl-8 ${isEven ? 'pr-4 pl-4' : 'pr-4'} py-12 h-full flex flex-col justify-center`}>
                  <div className="flex items-start gap-6">
                    <div
                      className="p-4 rounded-2xl flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${brand.colors.primary[100]}, ${brand.colors.primary[50]})`,
                      }}
                    >
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary-800 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-neutral-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}





