interface InvoiceTermsProps {
  terms?: string[]
}

export function InvoiceTerms({ terms }: InvoiceTermsProps) {
  if (!terms || terms.length === 0) return null

  return (
    <div className="mb-8 text-sm text-gray-600">
      <div className="text-base font-bold text-primary-600 mb-3 pb-2 border-b-2 border-primary-600">
        TÉRMINOS Y CONDICIONES
      </div>
      <div className="space-y-2">
        {terms.map((term, index) => (
          <p key={index}>{term}</p>
        ))}
      </div>
    </div>
  )
}





