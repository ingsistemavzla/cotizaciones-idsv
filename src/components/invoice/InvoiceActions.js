import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Printer, Download } from 'lucide-react';
import { Button } from '../ui/Button';
export function InvoiceActions({ onPrint, onDownload, invoiceNumber, }) {
    return (_jsxs("div", { className: "flex flex-col md:flex-row justify-center gap-5 my-6 px-6 print:hidden", children: [_jsxs(Button, { variant: "primary", size: "lg", onClick: onPrint, className: "flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow", children: [_jsx(Printer, { size: 20 }), "Imprimir"] }), _jsxs(Button, { variant: "danger", size: "lg", onClick: onDownload, className: "flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700", children: [_jsx(Download, { size: 20 }), "Descargar PDF"] })] }));
}
