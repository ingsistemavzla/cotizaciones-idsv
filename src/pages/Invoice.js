import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Invoice } from '../components/invoice/Invoice';
export function InvoicePage() {
    const [invoice] = useState({
        id: '1',
        number: '#001-2025',
        issueDate: new Date(),
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 días
        currency: 'USD',
        client: {
            name: 'ICMF',
            address: [
                '8400 NW 36th St Ste 450',
                'Miami, FL 33166-6606',
                'Estados Unidos',
            ],
            paymentReason: '50%- Actualización Web',
        },
        items: [
            {
                id: '1',
                quantity: 1,
                description: 'Actualización Web (50% presupuesto)',
                details: [
                    'Optimización de bases de datos',
                    'Actualización de seguridad (SSL, firewalls)',
                ],
                unitPrice: 65.0,
                total: 65.0,
            },
            {
                id: '2',
                quantity: 1,
                description: 'Esquematización y Rediseño',
                details: [
                    'Diagramación UML de procesos',
                    'Rediseño de interfaz UX/UI',
                ],
                unitPrice: 35.0,
                total: 35.0,
            },
            {
                id: '3',
                quantity: 1,
                description: 'Optimización y Conceptualización (50%)',
                details: [
                    'Auditoría de performance',
                    'Minificación de assets (CSS/JS)',
                    'Implementación de caché',
                ],
                unitPrice: 30.0,
                total: 30.0,
            },
        ],
        totals: {
            subtotal: 130.0,
            tax: 0.0,
            taxRate: 0,
            total: 130.0,
        },
        paymentInstructions: {
            method: 'ZELLE',
            holder: 'Dr. Gustavo Yasin',
            email: 'gustavoyasin@gmail.com',
            paymentReason: 'Apoyo Institucional',
        },
        terms: [
            'El pago debe realizarse dentro de los 5 días hábiles posteriores a la emisión de esta factura.',
            'Cualquier modificación al alcance del trabajo requerirá un nuevo presupuesto.',
            'Se entregarán reportes técnicos semanales del avance del proyecto.',
        ],
        signature: {
            text: 'IDSV - Ingenieros de Sistema Venezuela',
            image: 'https://federaciondecoaching.com/wp-content/uploads/2025/04/IDSV-LOGO.png',
        },
    });
    const handlePrint = () => {
        window.print();
    };
    const handleDownload = async () => {
        try {
            // Lazy load html2pdf solo cuando sea necesario
            const html2pdf = (await import('html2pdf.js')).default;
            const element = document.getElementById('invoice-content');
            if (!element) {
                console.error('No se encontró el contenido de la factura');
                return;
            }
            // Ocultar botones temporalmente
            const buttons = document.querySelector('.print\\:hidden');
            if (buttons) {
                ;
                buttons.style.display = 'none';
            }
            const opt = {
                margin: [5, 5, 5, 5],
                filename: `Factura-IDSV-${invoice.number.replace('#', '')}.pdf`,
                image: { type: 'jpeg', quality: 1 },
                html2canvas: {
                    scale: 2,
                    scrollY: 0,
                    windowHeight: element.scrollHeight + 50,
                    useCORS: true,
                    allowTaint: true,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait',
                    compress: true,
                },
            };
            await html2pdf().set(opt).from(element).save();
            // Restaurar botones
            if (buttons) {
                ;
                buttons.style.display = '';
            }
        }
        catch (error) {
            console.error('Error al generar PDF:', error);
            alert('Error al generar el PDF. Por favor, intente nuevamente.');
        }
    };
    useEffect(() => {
        // Agregar estilos de impresión
        const style = document.createElement('style');
        style.textContent = `
      @media print {
        body {
          padding: 0;
          background: white;
        }
        
        .print\\:hidden {
          display: none !important;
        }
        
        .invoice-container {
          box-shadow: none;
          border-radius: 0;
        }
      }
    `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);
    return (_jsx("div", { className: "min-h-screen bg-gray-100 py-8 px-4 print:py-0 print:px-0 print:bg-white", children: _jsx(Invoice, { invoice: invoice, onPrint: handlePrint, onDownload: handleDownload }) }));
}
