import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QuotationTwoColumnsPage } from './pages/QuotationTwoColumns'

function App() {
  return (
    <>
      <BrowserRouter basename="/cotizaciones-idsv">
        <Routes>
          <Route path="/" element={<Navigate to="/oferta-web-icmf-acca" replace />} />
          <Route path="/oferta-web-icmf-acca" element={<QuotationTwoColumnsPage />} />
          <Route path="*" element={<Navigate to="/oferta-web-icmf-acca" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
