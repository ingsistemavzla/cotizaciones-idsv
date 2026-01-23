import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { brand } from '@/config/brand'

interface MetaTagsConfig {
  title: string
  description: string
  image?: string
  url?: string
}

export function useMetaTags(config: MetaTagsConfig) {
  const location = useLocation()

  useEffect(() => {
    const baseUrl = window.location.origin + window.location.pathname.replace(/\/$/, '')
    const fullUrl = baseUrl + location.pathname
    const imageUrl = config.image || brand.company.logo.main

    // Actualizar título
    document.title = config.title

    // Función helper para actualizar o crear meta tags
    const updateMetaTag = (property: string, content: string, isProperty = true) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`
      let meta = document.querySelector(selector) as HTMLMetaElement
      
      if (!meta) {
        meta = document.createElement('meta')
        if (isProperty) {
          meta.setAttribute('property', property)
        } else {
          meta.setAttribute('name', property)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    // Open Graph tags
    updateMetaTag('og:title', config.title)
    updateMetaTag('og:description', config.description)
    updateMetaTag('og:image', imageUrl)
    updateMetaTag('og:url', config.url || fullUrl)
    updateMetaTag('og:type', 'website')
    updateMetaTag('og:image:width', '1200')
    updateMetaTag('og:image:height', '630')
    updateMetaTag('og:image:alt', 'IDSV - Ingenieros de Sistema Venezuela')

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', false)
    updateMetaTag('twitter:title', config.title, false)
    updateMetaTag('twitter:description', config.description, false)
    updateMetaTag('twitter:image', imageUrl, false)
    updateMetaTag('twitter:url', config.url || fullUrl, false)
    updateMetaTag('twitter:image:alt', 'IDSV - Ingenieros de Sistema Venezuela', false)

    // Meta description estándar
    updateMetaTag('description', config.description, false)
  }, [location.pathname, config.title, config.description, config.image, config.url])
}

