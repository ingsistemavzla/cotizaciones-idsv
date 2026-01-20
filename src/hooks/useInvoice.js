import { useState, useCallback } from 'react';
export function useInvoice(initialInvoice) {
    const [invoice, setInvoice] = useState(initialInvoice);
    const updateInvoice = useCallback((updates) => {
        setInvoice((prev) => ({ ...prev, ...updates }));
    }, []);
    const addItem = useCallback((item) => {
        setInvoice((prev) => ({
            ...prev,
            items: [...prev.items, item],
            totals: {
                ...prev.totals,
                subtotal: prev.totals.subtotal + item.total,
                total: prev.totals.subtotal + item.total + prev.totals.tax,
            },
        }));
    }, []);
    const removeItem = useCallback((itemId) => {
        setInvoice((prev) => {
            const item = prev.items.find((i) => i.id === itemId);
            if (!item)
                return prev;
            return {
                ...prev,
                items: prev.items.filter((i) => i.id !== itemId),
                totals: {
                    ...prev.totals,
                    subtotal: prev.totals.subtotal - item.total,
                    total: prev.totals.subtotal - item.total + prev.totals.tax,
                },
            };
        });
    }, []);
    const calculateTotals = useCallback(() => {
        setInvoice((prev) => {
            const subtotal = prev.items.reduce((sum, item) => sum + item.total, 0);
            const tax = subtotal * (prev.totals.taxRate / 100);
            return {
                ...prev,
                totals: {
                    ...prev.totals,
                    subtotal,
                    tax,
                    total: subtotal + tax,
                },
            };
        });
    }, []);
    return {
        invoice,
        updateInvoice,
        addItem,
        removeItem,
        calculateTotals,
    };
}
