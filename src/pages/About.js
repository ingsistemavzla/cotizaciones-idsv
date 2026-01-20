import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Zap, Shield, Code, Layers } from 'lucide-react';
export function About() {
    const features = [
        {
            icon: Zap,
            title: 'Rendimiento Optimizado',
            description: 'Construido con Vite y React para máxima velocidad y eficiencia.',
        },
        {
            icon: Shield,
            title: 'Seguro y Confiable',
            description: 'Implementado con TypeScript para mayor seguridad en el código.',
        },
        {
            icon: Code,
            title: 'Código Moderno',
            description: 'Utiliza las últimas características de React y mejores prácticas.',
        },
        {
            icon: Layers,
            title: 'Componentes Reutilizables',
            description: 'Arquitectura modular con componentes bien estructurados.',
        },
    ];
    return (_jsxs("div", { className: "space-y-8 animate-fade-in", children: [_jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Acerca del Proyecto" }), _jsx("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto", children: "Sistema de gesti\u00F3n de cotizaciones desarrollado con tecnolog\u00EDas de vanguardia para ofrecer la mejor experiencia y rendimiento." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (_jsxs(Card, { hover: true, children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "p-3 bg-primary-100 rounded-lg", children: _jsx(Icon, { className: "text-primary-600", size: 24 }) }), _jsx(CardTitle, { children: feature.title })] }) }), _jsx(CardContent, { children: _jsx("p", { className: "text-gray-600", children: feature.description }) })] }, index));
                }) }), _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { children: "Stack Tecnol\u00F3gico" }) }), _jsx(CardContent, { children: _jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { variant: "primary", children: "React 18" }), _jsx(Badge, { variant: "info", children: "TypeScript" }), _jsx(Badge, { variant: "success", children: "Vite" }), _jsx(Badge, { variant: "warning", children: "Tailwind CSS" }), _jsx(Badge, { variant: "primary", children: "React Router" }), _jsx(Badge, { variant: "info", children: "Lucide Icons" })] }) })] })] }));
}
