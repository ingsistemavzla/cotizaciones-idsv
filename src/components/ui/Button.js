import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/utils/cn';
export function Button({ variant = 'primary', size = 'md', fullWidth = false, className, children, ...props }) {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    const variants = {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
        secondary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 focus:ring-neutral-500',
        outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
        ghost: 'text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500',
        danger: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500',
    };
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };
    return (_jsx("button", { className: cn(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className), ...props, children: children }));
}
