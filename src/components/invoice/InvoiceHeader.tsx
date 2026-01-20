import { brand } from '@/config/brand'

interface InvoiceHeaderProps {
  invoiceNumber: string
  logo?: string
  subtitle?: string
}

export function InvoiceHeader({
  invoiceNumber,
  logo = brand.company.logo.icmf,
  subtitle = brand.name.full,
}: InvoiceHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-primary-500 to-primary-800 text-white px-6 md:px-8 py-6 md:py-8 relative min-h-[140px] flex items-center">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full">
        <img
          src={logo}
          alt="Logo"
          className="h-20 md:h-28 w-auto max-w-[200px] object-contain mb-4 md:mb-0 md:absolute md:left-6 md:top-6"
        />
        <div className="md:ml-32 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">FACTURA {invoiceNumber}</h1>
          <p className="text-base md:text-lg opacity-90">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

