import { Check, X, Search, Play, Bolt } from 'lucide-react'
import { Button } from '../ui/Button'
import { brand } from '@/config/brand'

const comparisonData = [
  {
    feature: 'Precio accesible',
    withoutAlliance: false,
    withAlliance: true,
    bonus: '+ 2 BONOS GRATIS',
  },
  {
    feature: 'Especialización en coaches',
    withoutAlliance: false,
    withAlliance: true,
    bonus: 'Soporte Premium',
  },
  {
    feature: 'Soporte personalizado',
    withoutAlliance: false,
    withAlliance: true,
    bonus: 'Guías Exclusivas',
  },
  {
    feature: 'Dominio y SEO incluido',
    withoutAlliance: false,
    withAlliance: true,
    bonus: 'SEO Avanzado',
  },
  {
    feature: 'Garantía de satisfacción',
    withoutAlliance: false,
    withAlliance: true,
    bonus: '30 días extra',
  },
]

export function ComparisonSection() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-neutral-100 to-white">
      <div className="container mx-auto px-4">
        {/* Título dividido */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <div className="text-3xl md:text-4xl font-black text-neutral-700">
            Sin Alianza
          </div>
          <div
            className="px-6 py-3 rounded-full text-white font-black text-2xl uppercase"
            style={{
              background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.accent[500]})`,
            }}
          >
            VS
          </div>
          <div className="text-3xl md:text-4xl font-black text-primary-700">
            IDSV + ICFM
          </div>
        </div>

        {/* Tabla comparativa */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full max-w-5xl mx-auto border-collapse bg-white rounded-xl overflow-hidden shadow-xl">
            <thead>
              <tr className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <th className="p-4 text-left font-bold">Beneficios</th>
                <th className="p-4 text-center font-bold">Sin Alianza</th>
                <th className="p-4 text-center font-bold">Con Alianza</th>
                <th className="p-4 text-center font-bold">
                  VENTAJAS{' '}
                  <span
                    className="inline-block px-2 py-1 rounded text-xs bg-accent-500 ml-2"
                  >
                    OFERTA
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-neutral-200 ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'} hover:bg-primary-50 transition-colors`}
                >
                  <td className="p-4 font-semibold text-neutral-800">{row.feature}</td>
                  <td className="p-4 text-center">
                    {row.withoutAlliance ? (
                      <Check className="w-6 h-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {row.withAlliance ? (
                      <Check className="w-6 h-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center font-bold text-primary-700">
                    {row.bonus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Comparación de precios */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 max-w-5xl mx-auto">
          {/* Precio antiguo */}
          <div className="text-center">
            <div className="bg-neutral-200 px-8 py-6 rounded-2xl shadow-lg">
              <div className="text-sm font-bold text-neutral-600 mb-2">
                Precio estándar
              </div>
              <div className="text-4xl font-black text-neutral-400 line-through mb-2">
                197$
              </div>
              <div className="text-sm text-neutral-600">
                o 3 cuotas de <span className="font-bold">97$</span>
              </div>
            </div>
          </div>

          <div
            className="w-16 h-16 rounded-full text-white font-black text-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.accent[500]})`,
            }}
          >
            VS
          </div>

          {/* Nueva oferta */}
          <div className="text-center">
            <div
              className="relative px-8 py-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform"
              style={{
                background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.primary[700]})`,
              }}
            >
              <div className="absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-black uppercase">
                SOLO 4
              </div>
              <div className="text-sm font-bold uppercase mb-2 opacity-90">
                OFERTA POR ALIANZA
              </div>
              <div className="text-5xl font-black mb-2">79,99$</div>
              <div className="text-sm font-bold uppercase">UN SOLO PAGO</div>
            </div>
          </div>
        </div>

        {/* Footer de oferta */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary-100 px-8 py-4 rounded-xl mb-4">
            <p className="text-lg font-semibold text-neutral-700">
              Válido para los primeros <span className="font-black text-primary-700">10 coaches</span>
            </p>
            <p className="text-lg font-semibold text-neutral-700">
              miembros de <span className="font-black text-primary-700">ICFM</span>
            </p>
          </div>
          <div className="mt-4">
            <span
              className="inline-block px-6 py-3 rounded-full text-white font-black text-xl uppercase mr-2"
              style={{
                background: `linear-gradient(135deg, ${brand.colors.accent[500]}, ${brand.colors.accent[600]})`,
              }}
            >
              + 2 BONOS
            </span>
            <span
              className="inline-block px-6 py-3 rounded-full text-white font-black text-xl uppercase"
              style={{
                background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.primary[700]})`,
              }}
            >
              GRATIS
            </span>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="outline" size="lg">
            <Search className="mr-2 w-5 h-5" />
            Ver detalles
          </Button>
          <Button variant="secondary" size="lg">
            <Play className="mr-2 w-5 h-5" />
            Ver testimonio
          </Button>
          <Button variant="primary" size="lg">
            <Bolt className="mr-2 w-5 h-5" />
            Quiero mi web
          </Button>
        </div>
      </div>
    </section>
  )
}





