import { Invoice as InvoiceType } from '@/types/invoice'
import { InvoiceHeader } from './InvoiceHeader'
import { InvoiceInfo } from './InvoiceInfo'
import { InvoiceDetails } from './InvoiceDetails'
import { InvoiceTable } from './InvoiceTable'
import { InvoiceTotals } from './InvoiceTotals'
import { InvoicePaymentInstructions } from './InvoicePaymentInstructions'
import { InvoiceTerms } from './InvoiceTerms'
import { InvoiceSignature } from './InvoiceSignature'
import { InvoiceActions } from './InvoiceActions'
import { InvoiceFooter } from './InvoiceFooter'
import { useRef } from 'react'

interface InvoiceProps {
  invoice: InvoiceType
  onPrint?: () => void
  onDownload?: () => void
}

export function Invoice({ invoice, onPrint, onDownload }: InvoiceProps) {
  const invoiceRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    if (onPrint) {
      onPrint()
    } else {
      window.print()
    }
  }

  const handleDownload = () => {
    if (onDownload) {
      onDownload()
    } else {
      // Función de descarga por defecto
      console.log('Descargar PDF no implementado')
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl print:shadow-none print:rounded-none">
      <div ref={invoiceRef} id="invoice-content">
        <InvoiceHeader invoiceNumber={invoice.number} />
        
        <div className="p-8">
          <InvoiceInfo client={invoice.client} />
          
          <InvoiceDetails
            issueDate={invoice.issueDate}
            dueDate={invoice.dueDate}
            paymentMethod="Transferencia Zelle"
            currency={invoice.currency}
          />
          
          <InvoiceTable items={invoice.items} />
          
          <InvoiceTotals totals={invoice.totals} currency={invoice.currency} />
          
          {invoice.paymentInstructions && (
            <InvoicePaymentInstructions
              instructions={invoice.paymentInstructions}
            />
          )}
          
          {invoice.terms && <InvoiceTerms terms={invoice.terms} />}
          
          {invoice.signature && (
            <InvoiceSignature
              text={invoice.signature.text}
              logo={invoice.signature.image}
            />
          )}
        </div>
        
        <InvoiceFooter />
      </div>
      
      <InvoiceActions
        onPrint={handlePrint}
        onDownload={handleDownload}
        invoiceNumber={invoice.number}
      />
    </div>
  )
}





