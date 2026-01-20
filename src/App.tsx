import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { InvoicePage } from './pages/Invoice'
import { Landing } from './pages/Landing'
import { QuotationPage } from './pages/Quotation'
import { QuotationTwoColumnsPage } from './pages/QuotationTwoColumns'

function App() {
  return (
    <>
      <BrowserRouter basename="/cotizaciones-idsv">
        <Routes>
          <Route path="/" element={<Navigate to="/oferta-web-icmf-acca" replace />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/invoice" element={<InvoicePage />} />
          <Route path="/oferta-web-coaching" element={<QuotationPage />} />
          <Route path="/oferta-web-icmf-acca" element={<QuotationTwoColumnsPage />} />
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
