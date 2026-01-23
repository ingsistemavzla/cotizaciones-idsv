export interface InvoiceItem {
  id: string
  quantity: number
  description: string
  details?: string[]
  unitPrice: number
  total: number
}

export interface InvoiceClient {
  name: string
  address?: string[]
  rif?: string
  paymentReason?: string
}

export interface InvoiceTotals {
  subtotal: number
  tax: number
  taxRate: number
  total: number
}

export interface PaymentInstructions {
  method: string
  holder: string
  email?: string
  account?: string
  paymentReason?: string
}

export interface Invoice {
  id: string
  number: string
  issueDate: Date
  dueDate: Date
  currency: string
  items: InvoiceItem[]
  client: InvoiceClient
  totals: InvoiceTotals
  paymentInstructions?: PaymentInstructions
  terms?: string[]
  signature?: {
    text: string
    image?: string
  }
}





