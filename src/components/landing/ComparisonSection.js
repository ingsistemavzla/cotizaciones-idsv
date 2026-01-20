import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check, X, Search, Play, Bolt } from 'lucide-react';
import { Button } from '../ui/Button';
import { brand } from '@/config/brand';
const comparisonData = [
    {
        feature: 'Precio accesible',
        withoutAlliance: false,
        withAlliance: true,
        bonus: '+ 2 BONOS GRATIS',
    },
    {
        feature: 'Especialización en coaches',
        withoutAlliance: false,
        withAlliance: true,
        bonus: 'Soporte Premium',
    },
    {
        feature: 'Soporte personalizado',
        withoutAlliance: false,
        withAlliance: true,
        bonus: 'Guías Exclusivas',
    },
    {
        feature: 'Dominio y SEO incluido',
        withoutAlliance: false,
        withAlliance: true,
        bonus: 'SEO Avanzado',
    },
    {
        feature: 'Garantía de satisfacción',
        withoutAlliance: false,
        withAlliance: true,
        bonus: '30 días extra',
    },
];
export function ComparisonSection() {
    return (_jsx("section", { className: "relative py-16 bg-gradient-to-b from-neutral-100 to-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-4 mb-12", children: [_jsx("div", { className: "text-3xl md:text-4xl font-black text-neutral-700", children: "Sin Alianza" }), _jsx("div", { className: "px-6 py-3 rounded-full text-white font-black text-2xl uppercase", style: {
                                background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.accent[500]})`,
                            }, children: "VS" }), _jsx("div", { className: "text-3xl md:text-4xl font-black text-primary-700", children: "IDSV + ICFM" })] }), _jsx("div", { className: "overflow-x-auto mb-12", children: _jsxs("table", { className: "w-full max-w-5xl mx-auto border-collapse bg-white rounded-xl overflow-hidden shadow-xl", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-gradient-to-r from-primary-600 to-primary-700 text-white", children: [_jsx("th", { className: "p-4 text-left font-bold", children: "Beneficios" }), _jsx("th", { className: "p-4 text-center font-bold", children: "Sin Alianza" }), _jsx("th", { className: "p-4 text-center font-bold", children: "Con Alianza" }), _jsxs("th", { className: "p-4 text-center font-bold", children: ["VENTAJAS", ' ', _jsx("span", { className: "inline-block px-2 py-1 rounded text-xs bg-accent-500 ml-2", children: "OFERTA" })] })] }) }), _jsx("tbody", { children: comparisonData.map((row, index) => (_jsxs("tr", { className: `border-b border-neutral-200 ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'} hover:bg-primary-50 transition-colors`, children: [_jsx("td", { className: "p-4 font-semibold text-neutral-800", children: row.feature }), _jsx("td", { className: "p-4 text-center", children: row.withoutAlliance ? (_jsx(Check, { className: "w-6 h-6 text-green-500 mx-auto" })) : (_jsx(X, { className: "w-6 h-6 text-red-500 mx-auto" })) }), _jsx("td", { className: "p-4 text-center", children: row.withAlliance ? (_jsx(Check, { className: "w-6 h-6 text-green-500 mx-auto" })) : (_jsx(X, { className: "w-6 h-6 text-red-500 mx-auto" })) }), _jsx("td", { className: "p-4 text-center font-bold text-primary-700", children: row.bonus })] }, index))) })] }) }), _jsxs("div", { className: "flex flex-col md:flex-row items-center justify-center gap-8 mb-12 max-w-5xl mx-auto", children: [_jsx("div", { className: "text-center", children: _jsxs("div", { className: "bg-neutral-200 px-8 py-6 rounded-2xl shadow-lg", children: [_jsx("div", { className: "text-sm font-bold text-neutral-600 mb-2", children: "Precio est\u00E1ndar" }), _jsx("div", { className: "text-4xl font-black text-neutral-400 line-through mb-2", children: "197$" }), _jsxs("div", { className: "text-sm text-neutral-600", children: ["o 3 cuotas de ", _jsx("span", { className: "font-bold", children: "97$" })] })] }) }), _jsx("div", { className: "w-16 h-16 rounded-full text-white font-black text-xl flex items-center justify-center", style: {
                                background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.accent[500]})`,
                            }, children: "VS" }), _jsx("div", { className: "text-center", children: _jsxs("div", { className: "relative px-8 py-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform", style: {
                                    background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.primary[700]})`,
                                }, children: [_jsx("div", { className: "absolute -top-4 -right-4 bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-black uppercase", children: "SOLO 4" }), _jsx("div", { className: "text-sm font-bold uppercase mb-2 opacity-90", children: "OFERTA POR ALIANZA" }), _jsx("div", { className: "text-5xl font-black mb-2", children: "79,99$" }), _jsx("div", { className: "text-sm font-bold uppercase", children: "UN SOLO PAGO" })] }) })] }), _jsxs("div", { className: "text-center mb-12", children: [_jsxs("div", { className: "inline-block bg-primary-100 px-8 py-4 rounded-xl mb-4", children: [_jsxs("p", { className: "text-lg font-semibold text-neutral-700", children: ["V\u00E1lido para los primeros ", _jsx("span", { className: "font-black text-primary-700", children: "10 coaches" })] }), _jsxs("p", { className: "text-lg font-semibold text-neutral-700", children: ["miembros de ", _jsx("span", { className: "font-black text-primary-700", children: "ICFM" })] })] }), _jsxs("div", { className: "mt-4", children: [_jsx("span", { className: "inline-block px-6 py-3 rounded-full text-white font-black text-xl uppercase mr-2", style: {
                                        background: `linear-gradient(135deg, ${brand.colors.accent[500]}, ${brand.colors.accent[600]})`,
                                    }, children: "+ 2 BONOS" }), _jsx("span", { className: "inline-block px-6 py-3 rounded-full text-white font-black text-xl uppercase", style: {
                                        background: `linear-gradient(135deg, ${brand.colors.primary[500]}, ${brand.colors.primary[700]})`,
                                    }, children: "GRATIS" })] })] }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsxs(Button, { variant: "outline", size: "lg", children: [_jsx(Search, { className: "mr-2 w-5 h-5" }), "Ver detalles"] }), _jsxs(Button, { variant: "secondary", size: "lg", children: [_jsx(Play, { className: "mr-2 w-5 h-5" }), "Ver testimonio"] }), _jsxs(Button, { variant: "primary", size: "lg", children: [_jsx(Bolt, { className: "mr-2 w-5 h-5" }), "Quiero mi web"] })] })] }) }));
}
