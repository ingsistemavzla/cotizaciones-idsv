import { InvoiceTotals as InvoiceTotalsType } from '@/types/invoice'

interface InvoiceTotalsProps {
  totals: InvoiceTotalsType
  currency?: string
}

export function InvoiceTotals({ totals, currency = 'USD' }: InvoiceTotalsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-VE', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <div className="flex justify-end mb-8">
      <table className="w-full max-w-[300px]">
        <tbody>
          <tr>
            <td className="p-2">Subtotal:</td>
            <td className="p-2 text-right">{formatCurrency(totals.subtotal)}</td>
          </tr>
          <tr>
            <td className="p-2">
              IVA ({totals.taxRate}%):
            </td>
            <td className="p-2 text-right">{formatCurrency(totals.tax)}</td>
          </tr>
          <tr className="border-t-2 border-primary-500">
            <td className="p-2 font-bold text-lg">Total:</td>
            <td className="p-2 text-right font-bold text-lg">
              {formatCurrency(totals.total)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}





