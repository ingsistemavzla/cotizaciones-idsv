import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/utils/cn';
export function Spinner({ size = 'md', className }) {
    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
    };
    return (_jsx("div", { className: cn('animate-spin rounded-full border-2 border-gray-300 border-t-primary-600', sizes[size], className), role: "status", "aria-label": "Cargando", children: _jsx("span", { className: "sr-only", children: "Cargando..." }) }));
}
