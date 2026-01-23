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
      let cleanPath = redirectPath.replace(/~and~/g, '&')
      
      // Remove leading slash if present (React Router handles it)
      if (cleanPath.startsWith('/')) {
        cleanPath = cleanPath.slice(1)
      }
      
      // Remove the basename prefix if it's in the path
      if (cleanPath.startsWith('cotizaciones-idsv/')) {
        cleanPath = cleanPath.replace('cotizaciones-idsv/', '')
      }
      
      const normalizedPath = `/${cleanPath}`
      
      console.log('RedirectHandler: Redirecting from', location.pathname, 'search:', location.search, 'to', normalizedPath)
      
      // Navigate to the correct route
      navigate(normalizedPath, { replace: true })
    }
  }, [location, navigate])

  return null
}

function App() {
  useEffect(() => {
    // Debug: Log current path
    console.log('App: Current pathname:', window.location.pathname)
    console.log('App: Current search:', window.location.search)
  }, [])

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
