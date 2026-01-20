import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { brand } from '@/config/brand';
export function InvoiceHeader({ invoiceNumber, logo = brand.company.logo.icmf, subtitle = brand.name.full, }) {
    return (_jsx("div", { className: "bg-gradient-to-br from-primary-500 to-primary-800 text-white px-6 md:px-8 py-6 md:py-8 relative min-h-[140px] flex items-center", children: _jsxs("div", { className: "flex flex-col md:flex-row items-center md:items-start w-full", children: [_jsx("img", { src: logo, alt: "Logo", className: "h-20 md:h-28 w-auto max-w-[200px] object-contain mb-4 md:mb-0 md:absolute md:left-6 md:top-6" }), _jsxs("div", { className: "md:ml-32 text-center md:text-left", children: [_jsxs("h1", { className: "text-3xl md:text-4xl font-bold mb-2", children: ["FACTURA ", invoiceNumber] }), _jsx("p", { className: "text-base md:text-lg opacity-90", children: subtitle })] })] }) }));
}
