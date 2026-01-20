import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function QuotationModules({ modules }) {
    return (_jsxs("div", { className: "bg-white rounded-2xl shadow-xl p-8 border-2 border-neutral-200", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-black text-primary-800 mb-8", children: "ESTRUCTURA DE M\u00D3DULOS PRINCIPALES" }), _jsx("div", { className: "space-y-4", children: modules.map((module, index) => {
                    const Icon = module.icon;
                    return (_jsx("div", { className: "bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border-2 border-primary-200 hover:border-primary-400 transition-all hover:shadow-lg", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "p-3 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex-shrink-0", children: _jsx(Icon, { className: "w-6 h-6 text-white" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-xl font-bold text-primary-800 mb-2", children: module.title }), _jsx("p", { className: "text-neutral-700 leading-relaxed", children: module.description })] })] }) }, index));
                }) })] }));
}
