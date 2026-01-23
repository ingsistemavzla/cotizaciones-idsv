import { InvoiceClient } from '@/types/invoice'
import { brand } from '@/config/brand'

interface InvoiceInfoProps {
  client: InvoiceClient
}

export function InvoiceInfo({ client }: InvoiceInfoProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
      {/* Emisor */}
      <div className="flex-1 min-w-[300px]">
        <div className="text-lg font-bold text-primary-600 mb-4 pb-2 border-b-2 border-primary-600">
          EMISOR:
        </div>
        <div className="space-y-1 text-gray-800">
          <div className="font-bold">{brand.name.full}</div>
          <div>RIF: {brand.company.rif}</div>
          <div>Tlf: {brand.company.phone}</div>
          <div>Email: {brand.company.email}</div>
        </div>
      </div>

      {/* Cliente */}
      <div className="flex-1 min-w-[300px]">
        <div className="text-lg font-bold text-primary-600 mb-4 pb-2 border-b-2 border-primary-600">
          CLIENTE:
        </div>
        <div className="space-y-1 text-gray-800">
          <div className="font-bold">{client.name}</div>
          {client.address?.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          {client.rif && <div>RIF: {client.rif}</div>}
          {client.paymentReason && (
            <div className="mt-2 pt-2 border-t border-gray-200">
              <span className="font-semibold">Razón de Pago:</span> {client.paymentReason}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}





