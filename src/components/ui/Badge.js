import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/utils/cn';
export function Badge({ children, variant = 'primary', className }) {
    const variants = {
        primary: 'bg-primary-100 text-primary-800',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        danger: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800',
    };
    return (_jsx("span", { className: cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', variants[variant], className), children: children }));
}
