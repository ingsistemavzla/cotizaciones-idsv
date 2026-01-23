import { ReportSection } from './ReportSection'
import { XCircle } from 'lucide-react'

export function ReportNotExecutedScope() {
  return (
    <ReportSection title="ALCANCE NO EJECUTADO NI FACTURADO" icon={XCircle}>
      <div className="mb-4">
        <h4 className="font-bold text-lg text-primary-800 mb-3">4.1 Reestructuración de la Comunidad de Coaches</h4>
        <p className="mb-4">
          La segunda fase del proyecto contemplaba la reestructuración de la Comunidad de Coaches, incluyendo:
        </p>
        <div className="grid md:grid-cols-3 gap-3 mb-4">
          {[
            'Nuevos estilos visuales',
            'Mejor organización de los miembros',
            'Estructuras dinámicas adaptadas a la nueva línea gráfica',
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-neutral-50 rounded-lg border border-red-200"
            >
              <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span className="text-sm text-neutral-700">{item}</span>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300 mb-4">
          <p className="mb-3 text-sm text-neutral-700">
            Este bloque comprendía <strong className="text-primary-700">5 páginas con más de 20 estructuras cada una</strong>, lo cual representa un valor de los{' '}
            <strong className="text-primary-700">USD 125 restantes</strong> del presupuesto original.
          </p>
          <p className="text-sm text-neutral-700">
            Valoradas de manera muy ajustada en <strong className="text-primary-700">USD 15 por sección</strong>, pero para esta{' '}
            <strong className="text-primary-700">Alianza Estratégica</strong> se decidió implementar el mismo precio que para el Home de{' '}
            <strong className="text-primary-700">USD 10 por sección</strong>, lo que representa un costo justo, coherente y un nivel de trabajo requerido.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 border-2 border-red-300">
        <p className="font-bold text-red-800 mb-2">Sin embargo, esta fase no fue concretada, no pudo ejecutarse debidamente ya que:</p>
        <ul className="space-y-2 text-sm text-neutral-700">
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold">•</span>
            <span>No fue enviado el contenido necesario en el momento indicado</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold">•</span>
            <span>No se definió el orden requerido para la información ni los medios de comunicación correspondientes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 font-bold">•</span>
            <span>No se especificó el alcance exacto de la actualización de los perfiles y secciones así como los contenidos de los mismos</span>
          </li>
        </ul>
        <p className="mt-3 text-sm font-semibold text-red-800">
          Por esta razón, esta parte NO fue cobrada, manteniendo un criterio transparente y ético en la facturación.
        </p>
      </div>
    </ReportSection>
  )
}

