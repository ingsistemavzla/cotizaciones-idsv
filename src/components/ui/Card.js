import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/utils/cn';
export function Card({ children, className, hover = false, padding = 'md' }) {
    const paddingStyles = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
    };
    return (_jsx("div", { className: cn('bg-white rounded-xl shadow-sm border border-gray-200', paddingStyles[padding], hover && 'hover:shadow-md transition-shadow duration-200', className), children: children }));
}
export function CardHeader({ children, className }) {
    return (_jsx("div", { className: cn('mb-4', className), children: children }));
}
export function CardTitle({ children, className }) {
    return (_jsx("h3", { className: cn('text-xl font-bold text-gray-900', className), children: children }));
}
export function CardContent({ children, className }) {
    return (_jsx("div", { className: cn('text-gray-700', className), children: children }));
}
export function CardFooter({ children, className }) {
    return (_jsx("div", { className: cn('mt-4 pt-4 border-t border-gray-200', className), children: children }));
}
