import { InvoiceItem } from '@/types/invoice'

interface InvoiceTableProps {
  items: InvoiceItem[]
}

export function InvoiceTable({ items }: InvoiceTableProps) {
  return (
    <div className="mb-8 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary-500 text-white">
            <th className="p-3 text-left w-[10%]">Cantidad</th>
            <th className="p-3 text-left w-[50%]">Descripción</th>
            <th className="p-3 text-right w-[20%]">Precio Unit.</th>
            <th className="p-3 text-right w-[20%]">Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.id || index}
              className="border-b border-gray-300 last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <td className="p-3">{item.quantity}</td>
              <td className="p-3">
                <div className="font-semibold">{item.description}</div>
                {item.details && item.details.length > 0 && (
                  <div className="text-sm text-gray-600 mt-1 pl-4">
                    {item.details.map((detail, idx) => (
                      <div key={idx}>- {detail}</div>
                    ))}
                  </div>
                )}
              </td>
              <td className="p-3 text-right">${item.unitPrice.toFixed(2)}</td>
              <td className="p-3 text-right font-semibold">
                ${item.total.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}





