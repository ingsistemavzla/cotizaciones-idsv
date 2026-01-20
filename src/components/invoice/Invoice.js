import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InvoiceHeader } from './InvoiceHeader';
import { InvoiceInfo } from './InvoiceInfo';
import { InvoiceDetails } from './InvoiceDetails';
import { InvoiceTable } from './InvoiceTable';
import { InvoiceTotals } from './InvoiceTotals';
import { InvoicePaymentInstructions } from './InvoicePaymentInstructions';
import { InvoiceTerms } from './InvoiceTerms';
import { InvoiceSignature } from './InvoiceSignature';
import { InvoiceActions } from './InvoiceActions';
import { InvoiceFooter } from './InvoiceFooter';
import { useRef } from 'react';
export function Invoice({ invoice, onPrint, onDownload }) {
    const invoiceRef = useRef(null);
    const handlePrint = () => {
        if (onPrint) {
            onPrint();
        }
        else {
            window.print();
        }
    };
    const handleDownload = () => {
        if (onDownload) {
            onDownload();
        }
        else {
            // Función de descarga por defecto
            console.log('Descargar PDF no implementado');
        }
    };
    return (_jsxs("div", { className: "w-full max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl print:shadow-none print:rounded-none", children: [_jsxs("div", { ref: invoiceRef, id: "invoice-content", children: [_jsx(InvoiceHeader, { invoiceNumber: invoice.number }), _jsxs("div", { className: "p-8", children: [_jsx(InvoiceInfo, { client: invoice.client }), _jsx(InvoiceDetails, { issueDate: invoice.issueDate, dueDate: invoice.dueDate, paymentMethod: "Transferencia Zelle", currency: invoice.currency }), _jsx(InvoiceTable, { items: invoice.items }), _jsx(InvoiceTotals, { totals: invoice.totals, currency: invoice.currency }), invoice.paymentInstructions && (_jsx(InvoicePaymentInstructions, { instructions: invoice.paymentInstructions })), invoice.terms && _jsx(InvoiceTerms, { terms: invoice.terms }), invoice.signature && (_jsx(InvoiceSignature, { text: invoice.signature.text, logo: invoice.signature.image }))] }), _jsx(InvoiceFooter, {})] }), _jsx(InvoiceActions, { onPrint: handlePrint, onDownload: handleDownload, invoiceNumber: invoice.number })] }));
}
