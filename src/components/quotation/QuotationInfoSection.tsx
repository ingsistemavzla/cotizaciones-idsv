import { User, Calendar, Target, Building2 } from 'lucide-react'
import { brand } from '@/config/brand'

interface QuotationInfoSectionProps {
  client: {
    organization: string
    target: string
    consultant: string
    rif: string
  }
  details: {
    date: string
    validity: string
    reference: string
    currency: string
  }
  objective?: string
}

export function QuotationInfoSection({
  client,
  details,
  objective,
}: QuotationInfoSectionProps) {
  return (
    <div className="bg-white sm:rounded-2xl p-1.5 sm:p-4 md:p-6 lg:p-8 border-2 border-neutral-200 sm:shadow-lg space-y-3 sm:space-y-6 md:space-y-8 overflow-x-hidden w-full">
      {/* EMISOR primero */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-lg p-3 sm:p-6 border border-primary-200">
        <h3 className="text-[0.8rem] sm:text-xl font-bold text-primary-600 mb-2 sm:mb-4 pb-1 sm:pb-2 border-b-2 border-primary-600 flex items-center gap-1.5 sm:gap-2">
          <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
          EMISOR:
        </h3>
        <div className="space-y-1.5 sm:space-y-2 text-[0.8rem] sm:text-base">
          <div>
            <strong className="text-primary-800">{brand.name.full}</strong>
          </div>
          <div>
            <strong className="text-primary-800">RIF:</strong>{' '}
            <span className="text-neutral-700">{brand.company.rif}</span>
          </div>
          <div>
            <strong className="text-primary-800">Tlf:</strong>{' '}
            <span className="text-neutral-700">{brand.company.phone}</span>
          </div>
          <div>
            <strong className="text-primary-800">Email:</strong>{' '}
            <span className="text-neutral-700">{brand.company.email}</span>
          </div>
        </div>
      </div>

      {/* CLIENTE y DETALLES al lado */}
      <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
        {/* Información del Cliente */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-lg p-3 sm:p-6 border border-primary-200">
          <h3 className="text-[0.8rem] sm:text-xl font-bold text-primary-600 mb-2 sm:mb-4 pb-1 sm:pb-2 border-b-2 border-primary-600 flex items-center gap-1.5 sm:gap-2">
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
            CLIENTE:
          </h3>
          <div className="space-y-2 sm:space-y-3 text-[0.8rem] sm:text-base">
            <div>
              <strong className="text-primary-800">Dirigido a:</strong>{' '}
              <span className="text-neutral-700">{client.target}</span>
            </div>
            <div>
              <strong className="text-primary-800">Organización:</strong>{' '}
              <span className="text-neutral-700">{client.organization}</span>
            </div>
            <div>
              <strong className="text-primary-800">Consultoría:</strong>{' '}
              <span className="text-neutral-700">{client.consultant}</span>
            </div>
            {client.rif && (
              <div>
                <strong className="text-primary-800">RIF:</strong>{' '}
                <span className="text-neutral-700">{client.rif}</span>
              </div>
            )}
          </div>
        </div>

        {/* Detalles de la Cotización */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-lg p-3 sm:p-6 border border-primary-200">
          <h3 className="text-[0.8rem] sm:text-xl font-bold text-primary-600 mb-2 sm:mb-4 pb-1 sm:pb-2 border-b-2 border-primary-600 flex items-center gap-1.5 sm:gap-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            DETALLES
          </h3>
          <div className="space-y-2 sm:space-y-3 text-[0.8rem] sm:text-base">
            <div>
              <strong className="text-primary-800">Fecha:</strong>{' '}
              <span className="text-neutral-700">{details.date}</span>
            </div>
            <div>
              <strong className="text-primary-800">Vigencia:</strong>{' '}
              <span className="bg-accent-600 text-white px-2 py-1 rounded font-bold text-sm">
                {details.validity}
              </span>
            </div>
            <div>
              <strong className="text-primary-800">Referencia:</strong>{' '}
              <span className="text-neutral-700">{details.reference}</span>
            </div>
            <div>
              <strong className="text-primary-800">Moneda:</strong>{' '}
              <span className="text-neutral-700">{details.currency}</span>
            </div>
          </div>
        </div>
      </div>

      {/* OBJETIVO abajo completo */}
      {objective && (
        <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-lg p-3 sm:p-6 border border-primary-200">
          <h3 className="text-[0.8rem] sm:text-xl font-bold text-primary-600 mb-2 sm:mb-4 pb-1 sm:pb-2 border-b-2 border-primary-600 flex items-center gap-1.5 sm:gap-2">
            <Target className="w-4 h-4 sm:w-5 sm:h-5" />
            OBJETIVO
          </h3>
          <div className="text-[0.8rem] sm:text-base leading-relaxed space-y-1.5 sm:space-y-2 text-neutral-700">
            {objective.split('\n').map((line, index) => {
              // Palabras clave a destacar con negrita azul oscuro
              const keywords = [
                '12-15 secciones críticas',
                'Federación de Coaching',
                'Academia de Coaching',
                'ecosistema digital autogestionable, coherente y escalable',
                'arquitectura moderna, rápida y 100% adaptable a móviles',
                'SEO profundo',
                'automatizaciones clave',
                'WhatsApp',
                'organización clara de contenidos',
                'visibilidad, confianza y conversión',
              ]
              
              let formattedLine = line
              keywords.forEach((keyword) => {
                const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
                formattedLine = formattedLine.replace(
                  regex,
                  (match) => {
                    // Evitar reemplazar si ya está dentro de un tag strong
                    if (formattedLine.includes(`<strong`)) {
                      const beforeMatch = formattedLine.substring(0, formattedLine.indexOf(match))
                      const afterMatch = formattedLine.substring(formattedLine.indexOf(match) + match.length)
                      if (beforeMatch.includes('<strong') && !beforeMatch.includes('</strong>')) {
                        return match // Ya está dentro de un strong
                      }
                    }
                    return `<strong class="font-bold text-primary-700">${match}</strong>`
                  }
                )
              })
              
              return (
                <p 
                  key={index}
                  dangerouslySetInnerHTML={{ __html: formattedLine }}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

