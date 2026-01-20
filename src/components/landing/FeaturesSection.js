import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Globe, Shield, Zap, Smartphone, Search } from 'lucide-react';
import { brand } from '@/config/brand';
const features = [
    {
        icon: Globe,
        title: 'Diseño Profesional',
        description: 'Interfaces modernas y atractivas que capturan la esencia de tu marca.',
    },
    {
        icon: Zap,
        title: 'Rendimiento Óptimo',
        description: 'Velocidad y eficiencia garantizadas con tecnología de última generación.',
    },
    {
        icon: Shield,
        title: 'Seguridad Avanzada',
        description: 'Protección completa con SSL, firewalls y backups automáticos.',
    },
    {
        icon: Smartphone,
        title: '100% Responsive',
        description: 'Adaptado perfectamente a todos los dispositivos y tamaños de pantalla.',
    },
    {
        icon: Search,
        title: 'SEO Optimizado',
        description: 'Posicionamiento en buscadores para maximizar tu visibilidad online.',
    },
];
export function FeaturesSection() {
    return (_jsx("section", { className: "relative overflow-visible py-12 bg-white", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("div", { className: "text-center mb-16", children: _jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-black text-primary-800 uppercase relative inline-block mb-4", children: [_jsx("span", { className: "absolute top-1 left-1 text-transparent", style: { WebkitTextStroke: '1px rgba(0, 44, 95, 0.2)' }, children: "CARACTER\u00CDSTICAS" }), "CARACTER\u00CDSTICAS"] }) }), _jsx("div", { className: "flex flex-col gap-16 max-w-6xl mx-auto", children: features.map((feature, index) => {
                        const Icon = feature.icon;
                        const isEven = index % 2 === 1;
                        return (_jsxs("div", { className: `relative w-full lg:w-3/5 h-auto min-h-[280px] rounded-3xl overflow-visible shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-gradient-to-br from-neutral-50 to-white ${isEven ? 'lg:ml-auto' : ''}`, children: [_jsx("div", { className: `absolute w-3 h-full top-0 ${isEven ? 'right-0' : 'left-0'} z-[2] rounded-l-3xl ${isEven ? 'rounded-l-none rounded-r-3xl' : ''} transition-all duration-300 hover:w-4`, style: {
                                        background: `linear-gradient(to bottom, ${brand.colors.primary[400]}, ${brand.colors.accent[500]})`,
                                        boxShadow: isEven
                                            ? '-2px 0 8px rgba(0, 116, 228, 0.6), 2px 0 8px rgba(217, 30, 24, 0.6)'
                                            : '2px 0 8px rgba(0, 116, 228, 0.6), -2px 0 8px rgba(217, 30, 24, 0.6)',
                                    } }), _jsx("div", { className: `pl-8 ${isEven ? 'pr-4 pl-4' : 'pr-4'} py-12 h-full flex flex-col justify-center`, children: _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "p-4 rounded-2xl flex-shrink-0", style: {
                                                    background: `linear-gradient(135deg, ${brand.colors.primary[100]}, ${brand.colors.primary[50]})`,
                                                }, children: _jsx(Icon, { className: "w-8 h-8 text-primary-600" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-2xl md:text-3xl font-bold text-primary-800 mb-3", children: feature.title }), _jsx("p", { className: "text-lg text-neutral-700 leading-relaxed", children: feature.description })] })] }) })] }, index));
                    }) })] }) }));
}
