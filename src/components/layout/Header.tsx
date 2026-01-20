import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/Button'
import { cn } from '@/utils/cn'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Cotizaciones IDSV</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Acerca de
            </Link>
            <Link
              to="/invoice"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Factura
            </Link>
            <Link
              to="/landing"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Landing
            </Link>
            <Link
              to="/oferta-web-coaching"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Oferta Web Coaching
            </Link>
            <Button variant="primary" size="sm">
              Nuevo Proyecto
            </Button>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-slide-up">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Acerca de
            </Link>
            <Link
              to="/invoice"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Factura
            </Link>
            <Link
              to="/landing"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Landing
            </Link>
            <Link
              to="/oferta-web-coaching"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Oferta Web Coaching
            </Link>
            <div className="px-4 pt-2">
              <Button variant="primary" size="sm" fullWidth>
                Nuevo Proyecto
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

