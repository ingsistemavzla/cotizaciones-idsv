import { useState, useCallback } from 'react'
import { Invoice as InvoiceType } from '@/types/invoice'

export function useInvoice(initialInvoice: InvoiceType) {
  const [invoice, setInvoice] = useState<InvoiceType>(initialInvoice)

  const updateInvoice = useCallback((updates: Partial<InvoiceType>) => {
    setInvoice((prev) => ({ ...prev, ...updates }))
  }, [])

  const addItem = useCallback((item: InvoiceType['items'][0]) => {
    setInvoice((prev) => ({
      ...prev,
      items: [...prev.items, item],
      totals: {
        ...prev.totals,
        subtotal: prev.totals.subtotal + item.total,
        total: prev.totals.subtotal + item.total + prev.totals.tax,
      },
    }))
  }, [])

  const removeItem = useCallback((itemId: string) => {
    setInvoice((prev) => {
      const item = prev.items.find((i) => i.id === itemId)
      if (!item) return prev
      return {
        ...prev,
        items: prev.items.filter((i) => i.id !== itemId),
        totals: {
          ...prev.totals,
          subtotal: prev.totals.subtotal - item.total,
          total: prev.totals.subtotal - item.total + prev.totals.tax,
        },
      }
    })
  }, [])

  const calculateTotals = useCallback(() => {
    setInvoice((prev) => {
      const subtotal = prev.items.reduce((sum, item) => sum + item.total, 0)
      const tax = subtotal * (prev.totals.taxRate / 100)
      return {
        ...prev,
        totals: {
          ...prev.totals,
          subtotal,
          tax,
          total: subtotal + tax,
        },
      }
    })
  }, [])

  return {
    invoice,
    updateInvoice,
    addItem,
    removeItem,
    calculateTotals,
  }
}





