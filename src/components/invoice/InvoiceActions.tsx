import { Printer, Download } from 'lucide-react'
import { Button } from '../ui/Button'

interface InvoiceActionsProps {
  onPrint: () => void
  onDownload: () => void
  invoiceNumber: string
}

export function InvoiceActions({
  onPrint,
  onDownload,
  invoiceNumber,
}: InvoiceActionsProps) {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 my-6 px-6 print:hidden">
      <Button
        variant="primary"
        size="lg"
        onClick={onPrint}
        className="flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
      >
        <Printer size={20} />
        Imprimir
      </Button>
      <Button
        variant="danger"
        size="lg"
        onClick={onDownload}
        className="flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700"
      >
        <Download size={20} />
        Descargar PDF
      </Button>
    </div>
  )
}





