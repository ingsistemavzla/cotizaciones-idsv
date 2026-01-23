import { PaymentInstructions } from '@/types/invoice'

interface InvoicePaymentInstructionsProps {
  instructions: PaymentInstructions
}

export function InvoicePaymentInstructions({
  instructions,
}: InvoicePaymentInstructionsProps) {
  return (
    <div className="mb-8">
      <div className="text-lg font-bold text-primary-600 mb-4 pb-2 border-b-2 border-primary-600">
        INSTRUCCIONES DE PAGO ({instructions.method})
      </div>
      <div className="space-y-1 text-gray-800">
        <div>
          <span className="font-semibold">Titular:</span> {instructions.holder}
        </div>
        {instructions.email && (
          <div>
            <span className="font-semibold">Correo:</span> {instructions.email}
          </div>
        )}
        {instructions.account && (
          <div>
            <span className="font-semibold">Cuenta:</span> {instructions.account}
          </div>
        )}
        {instructions.paymentReason && (
          <div>
            <span className="font-semibold">Razón de Pago:</span>{' '}
            {instructions.paymentReason}
          </div>
        )}
      </div>
    </div>
  )
}





