import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/utils/cn';
export const Input = forwardRef(({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx("label", { htmlFor: inputId, className: "block text-sm font-medium text-gray-700 mb-1.5", children: label })), _jsx("input", { ref: ref, id: inputId, className: cn('w-full px-4 py-2 border rounded-lg transition-colors', 'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent', error
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300', 'disabled:bg-gray-100 disabled:cursor-not-allowed', className), ...props }), error && (_jsx("p", { className: "mt-1.5 text-sm text-red-600", children: error })), helperText && !error && (_jsx("p", { className: "mt-1.5 text-sm text-gray-500", children: helperText }))] }));
});
Input.displayName = 'Input';
