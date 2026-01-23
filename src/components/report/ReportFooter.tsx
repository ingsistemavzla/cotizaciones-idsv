import { Printer, Download, MessageCircle, FileSignature } from 'lucide-react'
import { Button } from '../ui/Button'
import { brand } from '@/config/brand'

interface ReportFooterProps {
  date: string
  reference: string
  emissionDate: string
  onPrint?: () => void
  onDownload?: () => void
  onContact?: () => void
}

export function ReportFooter({
  date,
  reference,
  emissionDate,
  onPrint,
  onDownload,
  onContact,
}: ReportFooterProps) {
  return (
    <div className="space-y-8">
      {/* Firma y Aceptación */}
      <div className="bg-gradient-to-br from-primary-50 to-neutral-50 rounded-2xl p-8 border-2 border-primary-200">
        <h3 className="text-2xl font-black text-primary-800 mb-4 flex items-center gap-3">
          <FileSignature className="w-7 h-7 text-primary-600" />
          FIRMA Y ACEPTACIÓN
        </h3>
        <div className="h-0.5 bg-gradient-to-r from-primary-600 to-primary-400 my-6" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-bold text-xl mb-2 text-primary-700">
              {brand.name.full}
            </p>
            <p className="text-neutral-700">
              RIF: {brand.company.rif} | Tlf: {brand.company.phone}
            </p>
            <p className="text-neutral-700">{brand.company.email}</p>
          </div>
          <div className="text-center md:text-right">
            <img
              src={brand.company.logo.main}
              alt="IDSV Logo"
              className="h-20 w-auto mx-auto md:mx-0 mb-2"
            />
            <p className="text-neutral-600 text-sm">Fecha: {date}</p>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
        <Button
          variant="primary"
          size="lg"
          onClick={onPrint}
          className="shadow-xl hover:shadow-2xl transition-all"
        >
          <Printer className="mr-2 w-5 h-5" />
          IMPRIMIR INFORME
        </Button>
        <Button
          variant="danger"
          size="lg"
          onClick={onDownload}
          className="bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 shadow-xl hover:shadow-2xl transition-all"
        >
          <Download className="mr-2 w-5 h-5" />
          DESCARGAR PDF
        </Button>
        <Button
          variant="secondary"
          size="lg"
          onClick={onContact}
          className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all"
        >
          <MessageCircle className="mr-2 w-5 h-5" />
          HABLAR CON ASESOR
        </Button>
      </div>

      {/* Footer final */}
      <div className="bg-gradient-to-r from-primary-800 to-primary-700 text-white rounded-b-2xl p-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-600 to-accent-500" />
        <div className="relative z-10 text-center">
          <p className="font-semibold text-lg mb-2">
            {brand.name.full.toUpperCase()} | RIF: {brand.company.rif}
          </p>
          <p className="text-sm opacity-90 mb-2">
            Este informe es válido como documento técnico-profesional según estándares
            internacionales de consultoría TI.
          </p>
          <p className="text-xs opacity-80">
            Página 1 de 1 | Emisión: {emissionDate} | Referencia: {reference}
          </p>
        </div>
      </div>
    </div>
  )
}


