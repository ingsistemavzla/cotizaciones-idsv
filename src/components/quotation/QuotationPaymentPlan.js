import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Clock, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
export function QuotationPaymentPlan() {
    const installments = [
        {
            number: 1,
            amount: 220,
            description: 'Comienza hoy mismo la evaluación y restructuración de tu plataforma digital y paga el resto en dos cómodas cuotas al finalizar cada entrega.',
            status: 'Inicial',
            platform: null,
        },
        {
            number: 2,
            amount: 215,
            description: 'Al terminar la primera plataforma',
            status: 'Intermedia',
            platform: 'https://federaciondecoaching.com/',
        },
        {
            number: 3,
            amount: 215,
            description: 'Al terminar la segunda plataforma',
            status: 'Final',
            platform: 'https://academiadecoach.com/',
        },
    ];
    const total = installments.reduce((sum, inst) => sum + inst.amount, 0);
    // Contador regresivo de 48 horas
    const [timeLeft, setTimeLeft] = useState(() => {
        // Obtener tiempo guardado en localStorage o iniciar con 48 horas
        const savedTime = localStorage.getItem('paymentPlanCountdown');
        if (savedTime) {
            const parsed = JSON.parse(savedTime);
            const elapsed = Date.now() - parsed.startTime;
            const remaining = parsed.initialTime - elapsed;
            return remaining > 0 ? remaining : 0;
        }
        return 48 * 60 * 60 * 1000; // 48 horas en milisegundos
    });
    useEffect(() => {
        // Guardar tiempo inicial si no existe
        if (!localStorage.getItem('paymentPlanCountdown')) {
            localStorage.setItem('paymentPlanCountdown', JSON.stringify({
                startTime: Date.now(),
                initialTime: 48 * 60 * 60 * 1000
            }));
        }
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0)
                    return 0;
                const newTime = prev - 1000;
                // Actualizar localStorage
                const saved = JSON.parse(localStorage.getItem('paymentPlanCountdown') || '{}');
                const elapsed = Date.now() - saved.startTime;
                const remaining = saved.initialTime - elapsed;
                return remaining > 0 ? remaining : 0;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    return (_jsxs("div", { className: "bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-2xl p-8 border-2 border-primary-800 shadow-2xl relative overflow-hidden", children: [_jsxs("div", { className: "absolute top-4 right-4 bg-accent-600 text-white px-4 py-2 rounded-full text-sm font-black uppercase tracking-wide transform rotate-12 shadow-lg", children: [_jsx(Clock, { className: "w-4 h-4 inline-block mr-2" }), hours.toString().padStart(2, '0'), ":", minutes.toString().padStart(2, '0'), ":", seconds.toString().padStart(2, '0')] }), _jsxs("div", { className: "relative z-10", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-black mb-3 uppercase", children: "OFERTA ESPECIAL DE PAGO" }), _jsx("p", { className: "text-xl opacity-90", children: "Si pagas en menos de 48 horas, puedes dividir el pago en 3 partes" })] }), _jsxs("div", { className: "space-y-4 mb-8", children: [installments.map((installment, index) => {
                                if (installment.number === 1) {
                                    return (_jsx("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 hover:bg-white/15 transition-all", children: _jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [_jsxs("div", { className: "flex items-center gap-4 flex-1", children: [_jsx("div", { className: "bg-white text-primary-700 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl flex-shrink-0", children: installment.number }), _jsxs("div", { className: "flex-1", children: [_jsxs("p", { className: "text-lg font-bold mb-1", children: ["Cuota ", installment.number, " - ", installment.status] }), _jsx("p", { className: "text-sm opacity-90", children: installment.description })] })] }), _jsxs("div", { className: "bg-red-600 text-white px-6 py-3 rounded-2xl border-2 border-red-500 shadow-lg text-right", children: [_jsx("p", { className: "text-xs font-semibold uppercase tracking-wide opacity-90", children: "Empieza hoy tu desarrollo desde" }), _jsxs("p", { className: "text-3xl font-black mt-1", children: ["$", installment.amount, " USD"] })] })] }) }, installment.number));
                                }
                                return null;
                            }), _jsx("div", { className: "text-center py-4 border-t border-white/20 border-b border-white/20", children: _jsx("p", { className: "text-lg font-semibold opacity-90", children: "Paga el resto en dos c\u00F3modas cuotas al terminar cada plataforma" }) }), installments.map((installment, index) => {
                                if (installment.number > 1) {
                                    return (_jsx("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/20 hover:bg-white/15 transition-all", children: _jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4", children: [_jsxs("div", { className: "flex items-center gap-4 flex-1", children: [_jsx("div", { className: "bg-white text-primary-700 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl flex-shrink-0", children: installment.number }), _jsxs("div", { children: [_jsxs("p", { className: "text-lg font-bold mb-1", children: ["Cuota ", installment.number, " - ", installment.status] }), _jsx("p", { className: "text-sm opacity-90 mb-2", children: installment.description }), installment.platform && (_jsx("a", { href: installment.platform, target: "_blank", rel: "noopener noreferrer", className: "inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-sm", children: installment.platform }))] })] }), _jsx("div", { className: "flex items-center gap-3", children: _jsxs("span", { className: "text-3xl font-black", children: ["$", installment.amount, " USD"] }) })] }) }, installment.number));
                                }
                                return null;
                            })] }), _jsxs("div", { className: "bg-white/20 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("span", { className: "text-xl font-bold", children: "Total del Plan:" }), _jsxs("span", { className: "text-3xl font-black", children: ["$", total, " USD"] })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm opacity-90 mt-2", children: [_jsx(CheckCircle2, { className: "w-4 h-4" }), _jsx("span", { children: "Mismo precio total, pagado en 3 partes c\u00F3modas" })] })] }), _jsx("div", { className: "mt-6 text-center", children: _jsxs("div", { className: "inline-flex items-center gap-2 bg-accent-600/30 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-accent-500", children: [_jsx(Clock, { className: "w-5 h-5" }), _jsx("span", { className: "font-bold", children: "V\u00E1lido solo si confirmas en menos de 48 horas" })] }) })] })] }));
}
