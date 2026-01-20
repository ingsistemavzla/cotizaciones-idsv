import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { InvoicePage } from './pages/Invoice';
import { Landing } from './pages/Landing';
import { QuotationPage } from './pages/Quotation';
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/landing", element: _jsx(Landing, {}) }), _jsx(Route, { path: "/invoice", element: _jsx(InvoicePage, {}) }), _jsx(Route, { path: "/oferta-web-coaching", element: _jsx(QuotationPage, {}) }), _jsx(Route, { path: "/*", element: _jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) })] }) }) })] }) }));
}
export default App;
