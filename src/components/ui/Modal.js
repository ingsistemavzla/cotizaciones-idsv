import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';
export function Modal({ isOpen, onClose, title, children, size = 'md', showCloseButton = true, }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl',
    };
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fade-in", onClick: onClose, children: _jsxs("div", { className: cn('bg-white rounded-xl shadow-2xl w-full animate-slide-up', sizes[size]), onClick: (e) => e.stopPropagation(), children: [(title || showCloseButton) && (_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [title && (_jsx("h2", { className: "text-xl font-bold text-gray-900", children: title })), showCloseButton && (_jsx("button", { onClick: onClose, className: "p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors", "aria-label": "Cerrar", children: _jsx(X, { size: 20 }) }))] })), _jsx("div", { className: "p-6", children: children })] }) }));
}
