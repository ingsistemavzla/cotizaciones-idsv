import { brand } from '@/config/brand'

interface InvoiceFooterProps {
  currentPage?: number
  totalPages?: number
}

export function InvoiceFooter({
  currentPage = 1,
  totalPages = 1,
}: InvoiceFooterProps) {
  return (
    <div className="text-center py-6 bg-neutral-100 text-sm text-gray-600 border-t border-gray-200">
      <p className="font-semibold">{brand.name.full} | RIF: {brand.company.rif}</p>
      <p className="mt-2">
        Esta factura es válida como documento tributario electrónico según Ley
        venezolana.
      </p>
      <p className="mt-2">
        Página {currentPage} de {totalPages}
      </p>
    </div>
  )
}





