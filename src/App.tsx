import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { QuotationTwoColumnsPage } from './pages/QuotationTwoColumns'
import { ReportExpenseScopePage } from './pages/ReportExpenseScopePage'

// Component to handle GitHub Pages 404.html redirects
function RedirectHandler() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Check if we're on a path that was redirected from 404.html
    // The 404.html redirects to /?/path, so we need to handle that
    const searchParams = new URLSearchParams(location.search)
    const redirectPath = searchParams.get('/')
    
    if (redirectPath) {
      // Clean up the path - replace ~and~ with & and handle the path
      const cleanPath = redirectPath.replace(/~and~/g, '&')
      const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`
      
      // Navigate to the correct route
      navigate(normalizedPath, { replace: true })
    }
  }, [location, navigate])

  return null
}

function App() {
  return (
    <>
      <BrowserRouter basename="/cotizaciones-idsv">
        <RedirectHandler />
        <Routes>
          <Route path="/" element={<Navigate to="/oferta-web-icmf-acca" replace />} />
          <Route path="/oferta-web-icmf-acca" element={<QuotationTwoColumnsPage />} />
          <Route path="/informe-web-2025" element={<ReportExpenseScopePage />} />
          <Route path="*" element={<Navigate to="/oferta-web-icmf-acca" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
