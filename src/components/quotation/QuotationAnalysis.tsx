import { TrendingDown, CheckCircle } from 'lucide-react'

interface QuotationAnalysisProps {
  totalMarketPrice: number
  totalAlliancePrice: number
}

export function QuotationAnalysis({ totalMarketPrice, totalAlliancePrice }: QuotationAnalysisProps) {
  const savings = totalMarketPrice - totalAlliancePrice
  const savingsPercentage = ((savings / totalMarketPrice) * 100).toFixed(1)

  return (
    <div className="bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-lg">
      <h3 className="text-2xl md:text-3xl font-black text-primary-800 mb-6 border-b-2 border-primary-600 pb-2">
        CONTRASTE: VALOR REAL VS OFERTA
      </h3>

      {/* Panorama Situacional - Contraste */}
      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-200 mb-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Valor Real del Mercado */}
          <div className="bg-white rounded-lg p-5 border-2 border-red-300">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="w-6 h-6 text-red-600" />
              <h4 className="text-lg font-bold text-red-800">VALOR REAL DEL MERCADO</h4>
            </div>
            <p className="text-base text-neutral-700 mb-3">
              Una plataforma profesional de este tipo, desarrollada bajo estándares de mercado,
              tiene un <strong className="text-red-700">valor comercial real de ${totalMarketPrice} USD</strong> por plataforma.
            </p>
            <p className="text-sm text-neutral-600">
              Esto representa el costo real que cualquier empresa pagaría en el mercado actual
              por un desarrollo de esta envergadura y calidad profesional.
            </p>
          </div>

          {/* Valor de la Oferta */}
          <div className="bg-white rounded-lg p-5 border-2 border-primary-300">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-6 h-6 text-primary-600" />
              <h4 className="text-lg font-bold text-primary-800">VALOR DE LA OFERTA</h4>
            </div>
            <p className="text-base text-neutral-700 mb-3">
              Con nuestra <strong className="text-primary-700">Alianza Estratégica 2x1</strong>,
              el valor por plataforma se reduce a <strong className="text-primary-700">${totalAlliancePrice} USD</strong>.
            </p>
            <p className="text-sm text-neutral-600">
              Representa un ahorro del <strong className="text-primary-700">{savingsPercentage}%</strong> por plataforma,
              manteniendo la misma calidad y estándares profesionales.
            </p>
          </div>
        </div>

        {/* Comparativa Visual */}
        <div className="mt-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-4 text-center">
          <p className="font-bold mb-2">COMPARATIVA:</p>
          <div className="flex items-center justify-center gap-4 text-xl">
            <span className="line-through opacity-75">${totalMarketPrice} USD</span>
            <span className="text-2xl">→</span>
            <span className="text-3xl font-black">${totalAlliancePrice} USD</span>
          </div>
          <p className="text-sm mt-2 opacity-90">
            Ahorro de ${savings} USD por plataforma • Total: ${savings * 2} USD de ahorro en ambas plataformas
          </p>
        </div>
      </div>

      {/* Valoración Justa Incluye */}
      <div>
        <p className="font-bold text-lg text-primary-800 mb-4">
          VALORACIÓN JUSTA INCLUYE:
        </p>
        <p className="text-sm text-neutral-700 mb-4">
          En la práctica, esta oferta deja instalada una{' '}
          <strong>base tecnológica lista para crecer</strong>: preparada para campañas de marketing
          digital, automatización de procesos, nuevos servicios online y ampliación de comunidades,
          reduciendo al mínimo los costos futuros de mantenimiento y re-desarrollo.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Implementación técnica de alto desempeño',
            'Posicionamiento orgánico avanzado en buscadores',
            'Experiencias de usuario orientadas a conversión',
            'Integración orquestada de servicios y flujos digitales',
            'Validación, pruebas continuas y monitoreo de calidad',
            'Manuales operativos y guías técnicas para el equipo interno',
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary-50 to-red-50 rounded-lg border border-primary-200"
            >
              <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
              <span className="text-neutral-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

