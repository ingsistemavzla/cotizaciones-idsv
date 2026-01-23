interface InvoiceDetailsProps {
  issueDate: Date
  dueDate: Date
  paymentMethod: string
  currency: string
}

export function InvoiceDetails({
  issueDate,
  dueDate,
  paymentMethod,
  currency,
}: InvoiceDetailsProps) {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="bg-neutral-100 p-4 rounded-lg mb-8 flex flex-col md:flex-row justify-between gap-4 flex-wrap">
      <div className="min-w-[150px]">
        <span className="font-bold text-primary-800">Fecha de Emisión:</span>{' '}
        <span>{formatDate(issueDate)}</span>
      </div>
      <div className="min-w-[150px]">
        <span className="font-bold text-primary-800">Vencimiento:</span>{' '}
        <span>{formatDate(dueDate)}</span>
      </div>
      <div className="min-w-[150px]">
        <span className="font-bold text-primary-800">Forma de Pago:</span>{' '}
        <span>{paymentMethod}</span>
      </div>
      <div className="min-w-[150px]">
        <span className="font-bold text-primary-800">Moneda:</span>{' '}
        <span>{currency}</span>
      </div>
    </div>
  )
}





