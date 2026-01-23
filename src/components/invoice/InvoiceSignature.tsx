import { brand } from '@/config/brand'

interface InvoiceSignatureProps {
  text?: string
  logo?: string
}

export function InvoiceSignature({
  text = brand.name.full,
  logo = brand.company.logo.main,
}: InvoiceSignatureProps) {
  return (
    <div className="text-right mb-8">
      <div className="mb-2">Firma Autorizada</div>
      <div className="mb-4">{text}</div>
      {logo && (
        <img
          src={logo}
          alt="Firma"
          className="h-20 w-auto inline-block mt-4"
        />
      )}
    </div>
  )
}





