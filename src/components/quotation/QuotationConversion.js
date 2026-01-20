import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
export function QuotationConversion() {
    const [timeLeft, setTimeLeft] = useState(48 * 60 * 60 * 1000);
    useEffect(() => {
        // Reiniciar contador siempre que se carga la página
        localStorage.setItem('paymentPlanCountdown', JSON.stringify({
            startTime: Date.now(),
            initialTime: 48 * 60 * 60 * 1000,
        }));
        setTimeLeft(48 * 60 * 60 * 1000);
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 0)
                    return 0;
                const saved = JSON.parse(localStorage.getItem('paymentPlanCountdown') || '{}');
                if (!saved.startTime || !saved.initialTime)
                    return 0;
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
    const handleApprove = () => {
        const phoneNumber = '584123563070';
        const message = encodeURIComponent('Quiero incluir mi desarrollo en la Alianza 2x1. Deseo completar el pago inicial de $220 USD y comenzar mi migración digital.');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };
    return (_jsxs("div", { className: "relative overflow-hidden rounded-2xl border-2 border-red-500 shadow-2xl", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800 animate-gradient-shift" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-red-800/60 via-red-700/40 to-red-900/60" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-bl from-red-700/50 via-transparent to-red-900/50" }), _jsxs("div", { className: "relative z-10 p-8 md:p-12 text-white", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsxs("h3", { className: "text-3xl md:text-4xl mb-4 leading-tight tracking-wide uppercase", children: [_jsx("span", { className: "font-black italic", children: "Desarrollo" }), ' ', _jsx("span", { className: "font-extrabold underline decoration-2 underline-offset-4", children: "web" }), ' ', _jsx("span", { className: "font-black", children: "profesional" }), ' ', _jsx("span", { className: "font-extrabold italic underline decoration-2 underline-offset-4", children: "premium" })] }), _jsxs("div", { className: "inline-flex flex-wrap items-center justify-center gap-2 bg-red-600/30 backdrop-blur-md px-6 py-3 rounded-full border-2 border-red-400 shadow-lg mb-1", children: [_jsx("span", { className: "text-sm md:text-base font-semibold", children: "\u00BFSab\u00EDas que est\u00E1s obteniendo" }), _jsx("span", { className: "bg-gradient-to-br from-blue-600 to-blue-800 text-white px-2 py-1 rounded-3xl font-black text-lg md:text-xl shadow-xl border-2 border-blue-400/50", children: "+60%" }), _jsx("span", { className: "text-sm md:text-base font-semibold", children: "de descuento" }), _jsx("span", { className: "text-xs md:text-sm opacity-90 italic", children: "en tu ecosistema digital?" })] })] }), _jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [_jsxs("div", { className: "bg-black/40 backdrop-blur-md rounded-xl p-6 border-2 border-white/50 shadow-2xl", children: [_jsxs("p", { className: "text-lg md:text-xl leading-relaxed text-center mb-6 text-white font-medium", children: ["Una plataforma profesional con", ' ', _jsx("span", { className: "inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent-600/30 border-2 border-accent-500 text-sm md:text-base font-semibold italic", children: "arquitectura moderna, ecosistema optimizado y tecnolog\u00EDas de vanguardia" }), ' ', "tiene un", ' ', _jsx("span", { className: "inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-600/30 border-2 border-primary-400 text-sm md:text-base font-bold shadow-md", children: "valor de mercado entre $500 y $1,000 USD" }), ' ', "en el mercado internacional actual."] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "bg-gradient-to-br from-red-500/90 via-red-600/85 to-red-700/90 rounded-xl p-5 border-3 border-red-300 shadow-2xl", children: [_jsx("p", { className: "text-[11px] md:text-xs font-semibold mb-2 uppercase tracking-wide text-white", children: "Valor real internacional" }), _jsx("p", { className: "text-2xl font-black text-white mb-2", children: "$500 - $1,000 USD" }), _jsxs("p", { className: "text-[10px] md:text-xs text-red-50 font-medium leading-snug", children: ["Por cada plataforma, estamos hablando de un promedio de", ' ', _jsx("span", { className: "font-bold", children: "$750 USD" }), " por plataforma construida con estas herramientas de vanguardia que posicionan a tu marca como l\u00EDder en tu sector."] })] }), _jsxs("div", { className: "bg-gradient-to-br from-blue-600/90 via-blue-700/80 to-blue-800/90 rounded-xl p-5 border-3 border-blue-400 shadow-2xl", children: [_jsx("p", { className: "text-[11px] md:text-xs font-semibold mb-2 uppercase tracking-wide text-white", children: "Tu inversi\u00F3n con Alianza 2x1" }), _jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("span", { className: "text-red-200 line-through text-lg font-bold", children: "$650 USD" }), _jsx("span", { className: "text-2xl font-black text-white", children: "$325 USD" })] }), _jsxs("div", { className: "space-y-1.5 text-[10px] md:text-xs text-white", children: [_jsxs("p", { className: "font-bold", children: ["- Por cada plataforma ", _jsx("span", { className: "text-yellow-200", children: "$325 USD" })] }), _jsx("p", { className: "font-semibold mt-2 mb-1", children: "Obtienes:" }), _jsxs("p", { className: "font-bold", children: ["- 2 plataformas por el precio de una ", _jsx("span", { className: "text-yellow-200", children: "$650 USD" })] })] })] })] }), _jsx("div", { className: "mt-4 flex justify-center", children: _jsx("span", { className: "inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-600/30 border-2 border-primary-400 text-sm md:text-base font-bold shadow-md", children: "P\u00E1galo en c\u00F3modas cuotas" }) })] }), _jsx("div", { className: "bg-black/50 backdrop-blur-md rounded-xl p-6 border-2 border-white/50 shadow-xl", children: _jsxs("p", { className: "text-base md:text-lg leading-relaxed text-center text-white space-y-3", children: [_jsxs("span", { className: "block", children: ["Los precios reflejados corresponden a", ' ', _jsx("span", { className: "inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent-600/30 border-2 border-accent-500 text-sm md:text-base font-semibold italic", children: "costos de desarrollo en Latinoam\u00E9rica" }), "."] }), _jsxs("span", { className: "block mt-3", children: ["Y a\u00FAn as\u00ED, con nuestra", ' ', _jsx("span", { className: "inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent-600/30 border-2 border-accent-500 text-sm md:text-base font-semibold", children: "Alianza Estrat\u00E9gica 2x1, no est\u00E1s pagando ni el 40% del valor real" }), ' ', "que tendr\u00EDa este proyecto en mercados internacionales."] })] }) }), _jsx("div", { className: "bg-black/50 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/60 shadow-xl", children: _jsxs("p", { className: "text-lg md:text-xl font-bold text-center leading-relaxed text-white", children: ["Adem\u00E1s, est\u00E1s", ' ', _jsx("span", { className: "inline-flex items-center px-4 py-2 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white text-sm md:text-base font-black shadow-xl border-2 border-red-400/60 mx-1", children: "ahorrando m\u00E1s del 30%" }), ' ', "comparado con el valor de referencia para desarrollar plataformas de este nivel en la regi\u00F3n latinoamericana."] }) })] }), _jsxs("div", { className: "mt-8 flex flex-col items-center gap-3", children: [_jsxs("button", { onClick: handleApprove, className: "group relative px-10 py-5 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white font-black text-xl rounded-3xl shadow-2xl hover:shadow-blue-700/70 border-2 border-blue-500/80 transform hover:scale-105 transition-all duration-300 animate-bounce-subtle", children: [_jsxs("span", { className: "relative z-10 flex items-center gap-3", children: [_jsx(MessageCircle, { className: "w-6 h-6" }), "INICIAR AHORA"] }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" })] }), _jsxs("div", { className: "text-white text-center mb-2 space-y-1", children: [_jsx("p", { className: "text-xs md:text-sm font-extrabold uppercase tracking-wider", children: "NO DEJES PASAR ESTA OPORTUNIDAD" }), _jsxs("p", { className: "text-sm md:text-base font-bold italic", children: ["Inicia hoy con la", ' ', _jsx("span", { className: "font-black text-yellow-200 underline decoration-2 underline-offset-2", children: "tercera parte" }), ' ', "de este", ' ', _jsx("span", { className: "font-extrabold text-yellow-200", children: "gran descuento" })] })] }), _jsx("div", { className: "text-white text-xs md:text-sm font-bold uppercase tracking-wide mb-1", children: "QUEDAN" }), _jsx("div", { className: "inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-white via-slate-50 to-white border-2 border-red-500 shadow-md", children: _jsxs("span", { className: "text-red-600 text-xl md:text-2xl font-black tracking-wider", children: [hours.toString().padStart(2, '0'), ":", minutes.toString().padStart(2, '0'), ":", seconds.toString().padStart(2, '0')] }) })] }), _jsx("p", { className: "text-center mt-6 text-sm opacity-90", children: "\u26A1 Oferta limitada \u2022 Confirma en menos de 48 horas para activar tu plan de pago" })] }), _jsx("style", { children: `
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
      ` })] }));
}
