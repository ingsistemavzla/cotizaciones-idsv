import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { brand } from '@/config/brand';
export function InvoiceFooter({ currentPage = 1, totalPages = 1, }) {
    return (_jsxs("div", { className: "text-center py-6 bg-neutral-100 text-sm text-gray-600 border-t border-gray-200", children: [_jsxs("p", { className: "font-semibold", children: [brand.name.full, " | RIF: ", brand.company.rif] }), _jsx("p", { className: "mt-2", children: "Esta factura es v\u00E1lida como documento tributario electr\u00F3nico seg\u00FAn Ley venezolana." }), _jsxs("p", { className: "mt-2", children: ["P\u00E1gina ", currentPage, " de ", totalPages] })] }));
}
