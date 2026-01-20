import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function InvoiceTotals({ totals, currency = 'USD' }) {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-VE', {
            style: 'currency',
            currency,
            minimumFractionDigits: 2,
        }).format(amount);
    };
    return (_jsx("div", { className: "flex justify-end mb-8", children: _jsx("table", { className: "w-full max-w-[300px]", children: _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { className: "p-2", children: "Subtotal:" }), _jsx("td", { className: "p-2 text-right", children: formatCurrency(totals.subtotal) })] }), _jsxs("tr", { children: [_jsxs("td", { className: "p-2", children: ["IVA (", totals.taxRate, "%):"] }), _jsx("td", { className: "p-2 text-right", children: formatCurrency(totals.tax) })] }), _jsxs("tr", { className: "border-t-2 border-primary-500", children: [_jsx("td", { className: "p-2 font-bold text-lg", children: "Total:" }), _jsx("td", { className: "p-2 text-right font-bold text-lg", children: formatCurrency(totals.total) })] })] }) }) }));
}
