import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function InvoiceDetails({ issueDate, dueDate, paymentMethod, currency, }) {
    const formatDate = (date) => {
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    return (_jsxs("div", { className: "bg-neutral-100 p-4 rounded-lg mb-8 flex flex-col md:flex-row justify-between gap-4 flex-wrap", children: [_jsxs("div", { className: "min-w-[150px]", children: [_jsx("span", { className: "font-bold text-primary-800", children: "Fecha de Emisi\u00F3n:" }), ' ', _jsx("span", { children: formatDate(issueDate) })] }), _jsxs("div", { className: "min-w-[150px]", children: [_jsx("span", { className: "font-bold text-primary-800", children: "Vencimiento:" }), ' ', _jsx("span", { children: formatDate(dueDate) })] }), _jsxs("div", { className: "min-w-[150px]", children: [_jsx("span", { className: "font-bold text-primary-800", children: "Forma de Pago:" }), ' ', _jsx("span", { children: paymentMethod })] }), _jsxs("div", { className: "min-w-[150px]", children: [_jsx("span", { className: "font-bold text-primary-800", children: "Moneda:" }), ' ', _jsx("span", { children: currency })] })] }));
}
