import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { brand } from '@/config/brand';
export function InvoiceSignature({ text = brand.name.full, logo = brand.company.logo.main, }) {
    return (_jsxs("div", { className: "text-right mb-8", children: [_jsx("div", { className: "mb-2", children: "Firma Autorizada" }), _jsx("div", { className: "mb-4", children: text }), logo && (_jsx("img", { src: logo, alt: "Firma", className: "h-20 w-auto inline-block mt-4" }))] }));
}
