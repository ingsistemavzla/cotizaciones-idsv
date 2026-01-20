import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { User, Calendar, Target, Building2 } from 'lucide-react';
import { brand } from '@/config/brand';
export function QuotationInfoSection({ client, details, objective, }) {
    return (_jsxs("div", { className: "bg-white rounded-2xl p-8 border-2 border-neutral-200 shadow-lg space-y-8", children: [_jsxs("div", { className: "bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-lg p-6 border border-primary-200", children: [_jsxs("h3", { className: "text-xl font-bold text-primary-600 mb-4 pb-2 border-b-2 border-primary-600 flex items-center gap-2", children: [_jsx(Building2, { className: "w-5 h-5" }), "EMISOR:"] }), _jsxs("div", { className: "space-y-2 text-base", children: [_jsx("div", { children: _jsx("strong", { className: "text-primary-800", children: brand.name.full }) }), _jsxs("div", { children: [_jsx("strong", { className: "text-primary-800", children: "RIF:" }), ' ', _jsx("span", { className: "text-neutral-700", children: brand.company.rif })] }), _jsxs("div", { children: [_jsx("strong", { className: "text-primary-800", children: "Tlf:" }), ' ', _jsx("span", { className: "text-neutral-700", children: brand.company.phone })] }), _jsxs("div", { children: [_jsx("strong", { className: "text-primary-800", children: "Email:" }), ' ', _jsx("span", { className: "text-neutral-700", children: brand.company.email })] })] })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-lg p-6 border border-primary-200", children: [_jsxs("h3", { className: "text-xl font-bold text-primary-600 mb-4 pb-2 border-b-2 border-primary-600 flex items-center gap-2", children: [_jsx(User, { className: "w-5 h-5" }), "CLIENTE:"] }), _jsxs("div", { className: "space-y-3 text-base", children: [_jsxs("div", { children: [_jsx("strong", { className: "text-primary-800", children: "Dirigido a:" }), ' ', _jsx("span", { className: "text-neutral-700", children: client.target })] }), _jsxs("div", { children: [_jsx("strong", { className: "text-primary-800", children: "Organizaci\u00F3n:" }), ' ', _jsx("span", { className: "text-neutral-700", children: client.organization })] }), _jsxs("div", { children: [_jsx("strong", { className: "text-primary-800", children: "Consultor\u00EDa:" }), ' ', _jsx("span", { className: "text-neutral-700", children: client.consultant })] }), client.rif && (_jsxs("div", { children: [_jsx("strong", { className: "text-primary-800", children: "RIF:" }), ' ', _jsx("span", { className: "text-neutral-700", children: client.rif })] }))] })] }), _jsxs("div", { className: "bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-lg p-6 border border-primary-200", children: [_jsxs("h3", { className: "text-xl font-bold text-primary-600 mb-4 pb-2 border-b-2 border-primary-600 flex items-center gap-2", children: [_jsx(Calendar, { className: "w-5 h-5" }), "DETALLES"] }), _jsxs("div", { className: "space-y-3 text-base", children: [_jsxs("div", { children: [_jsx("strong", { className: "text-primary-800", children: "Fecha:" }), ' ', _jsx("span", { className: "text-neutral-700", children: details.date })] }), _jsxs("div", { children: [_jsx("strong", { className: "text-primary-800", children: "Vigencia:" }), ' ', _jsx("span", { className: "bg-accent-600 text-white px-2 py-1 rounded font-bold text-sm", children: details.validity })] }), _jsxs("div", { children: [_jsx("strong", { className: "text-primary-800", children: "Referencia:" }), ' ', _jsx("span", { className: "text-neutral-700", children: details.reference })] }), _jsxs("div", { children: [_jsx("strong", { className: "text-primary-800", children: "Moneda:" }), ' ', _jsx("span", { className: "text-neutral-700", children: details.currency })] })] })] })] }), objective && (_jsxs("div", { className: "bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-lg p-6 border border-primary-200", children: [_jsxs("h3", { className: "text-xl font-bold text-primary-600 mb-4 pb-2 border-b-2 border-primary-600 flex items-center gap-2", children: [_jsx(Target, { className: "w-5 h-5" }), "OBJETIVO"] }), _jsx("div", { className: "text-base leading-relaxed space-y-2 text-neutral-700", children: objective.split('\n').map((line, index) => {
                            // Palabras clave a destacar con negrita azul oscuro
                            const keywords = [
                                '12-15 secciones críticas',
                                'Federación de Coaching',
                                'Academia de Coaching',
                                'ecosistema digital autogestionable, coherente y escalable',
                                'arquitectura moderna, rápida y 100% adaptable a móviles',
                                'SEO profundo',
                                'automatizaciones clave',
                                'WhatsApp',
                                'organización clara de contenidos',
                                'visibilidad, confianza y conversión',
                            ];
                            let formattedLine = line;
                            keywords.forEach((keyword) => {
                                const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                                formattedLine = formattedLine.replace(regex, (match) => {
                                    // Evitar reemplazar si ya está dentro de un tag strong
                                    if (formattedLine.includes(`<strong`)) {
                                        const beforeMatch = formattedLine.substring(0, formattedLine.indexOf(match));
                                        const afterMatch = formattedLine.substring(formattedLine.indexOf(match) + match.length);
                                        if (beforeMatch.includes('<strong') && !beforeMatch.includes('</strong>')) {
                                            return match; // Ya está dentro de un strong
                                        }
                                    }
                                    return `<strong class="font-bold text-primary-700">${match}</strong>`;
                                });
                            });
                            return (_jsx("p", { dangerouslySetInnerHTML: { __html: formattedLine } }, index));
                        }) })] }))] }));
}
