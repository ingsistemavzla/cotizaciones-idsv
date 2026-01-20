import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function InvoiceTerms({ terms }) {
    if (!terms || terms.length === 0)
        return null;
    return (_jsxs("div", { className: "mb-8 text-sm text-gray-600", children: [_jsx("div", { className: "text-base font-bold text-primary-600 mb-3 pb-2 border-b-2 border-primary-600", children: "T\u00C9RMINOS Y CONDICIONES" }), _jsx("div", { className: "space-y-2", children: terms.map((term, index) => (_jsx("p", { children: term }, index))) })] }));
}
