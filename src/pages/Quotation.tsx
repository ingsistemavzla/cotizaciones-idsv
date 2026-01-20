import { Quotation } from '../components/quotation/Quotation'
import { Quotation as QuotationType } from '../types/quotation'
import { Layers, Users, BookOpen, Mail, Award } from 'lucide-react'

export function QuotationPage() {
  const quotationData: QuotationType = {
    client: {
      organization: 'Federación de Coaching & Academia',
      target: 'Junta Directiva',
      consultant: 'Ingenieros de Sistemas Venezuela (IDSV)',
      rif: 'J-274030070-0',
    },
    details: {
      date: 'lunes, 19 de enero de 2026',
      validity: '7 días hábiles',
      reference: '#COACH-COT-2025-001',
      currency: 'Dólares Americanos (USD)',
    },
    objective:
      'Transformar 12-15 secciones críticas de cada plataforma (Federación de Coaching y Academia de Coaching) en un ecosistema digital autogestionable, coherente y escalable.\n\nReconstruiremos ambas webs sobre arquitectura moderna, rápida y 100% adaptable a móviles, con SEO profundo, automatizaciones clave (incluyendo WhatsApp) y una organización clara de contenidos para potenciar visibilidad, confianza y conversión.',
    purpose:
      'Esta propuesta tiene como objetivo **transparentar el valor real del desarrollo web profesional** y demostrar cómo nuestra **Alianza Estratégica 2x1** representa un **ahorro significativo** para su institución.',
    sections: [
      { id: 1, name: 'Home Institucional', marketPrice: 40, alliancePrice: 27 },
      { id: 2, name: 'Código de Ética', marketPrice: 35, alliancePrice: 23 },
      { id: 3, name: 'Alianzas Estratégicas', marketPrice: 35, alliancePrice: 23 },
      { id: 4, name: 'Valores/Principios', marketPrice: 30, alliancePrice: 20 },
      { id: 5, name: 'Comunidad 1', marketPrice: 35, alliancePrice: 23 },
      { id: 6, name: 'Comunidad 2', marketPrice: 35, alliancePrice: 23 },
      { id: 7, name: 'Comunidad 3', marketPrice: 35, alliancePrice: 23 },
      { id: 8, name: 'Comunidad 4', marketPrice: 35, alliancePrice: 23 },
      { id: 9, name: 'Comunidad 5', marketPrice: 35, alliancePrice: 23 },
      { id: 10, name: 'Equipo Ejecutivo', marketPrice: 35, alliancePrice: 23 },
      { id: 11, name: 'Directorio Coaches', marketPrice: 40, alliancePrice: 27 },
      { id: 12, name: 'Manuales Coach', marketPrice: 40, alliancePrice: 27 },
      { id: 13, name: 'Repositorio', marketPrice: 40, alliancePrice: 27 },
      { id: 14, name: 'Centro Contacto', marketPrice: 45, alliancePrice: 30 },
      { id: 15, name: 'Sistema Avales', marketPrice: 50, alliancePrice: 33 },
    ],
    modules: [
      {
        title: 'Estructura Institucional',
        description:
          'Home profesional, Código de Ética, Alianzas Estratégicas y Valores/Principios corporativos construidos sobre componentes React reutilizables, con maquetación semántica y Tailwind CSS para garantizar velocidad, orden y fácil mantenimiento.',
        icon: Layers,
      },
      {
        title: 'Ecosistema de Comunidades',
        description:
          'Segmentación técnica de las 5 comunidades (1 al 5) con accesos independientes y gestión granular, desarrollada con rutas dinámicas y estados controlados en React para una navegación fluida y escalable.',
        icon: Users,
      },
      {
        title: 'Gestión de Talento',
        description:
          'Páginas de Equipo ejecutivo y Directorio completo de Coaches certificados optimizadas para SEO y rendimiento, con estructuras de datos tipadas en TypeScript y consultas eficientes para crecimiento futuro.',
        icon: Users,
      },
      {
        title: 'Recursos Técnicos',
        description:
          'Manuales de Coach especializados y Repositorio de formación continua servidos desde interfaces modernas, con carga rápida gracias a Vite y estilos consistentes en todos los dispositivos.',
        icon: BookOpen,
      },
      {
        title: 'Centro de Contacto Inteligente',
        description:
          'Sistema multicanal integrado con routing automático y gestión de tickets, preparado para integrarse con APIs externas (correo, WhatsApp, formularios avanzados) y flujos de automatización.',
        icon: Mail,
      },
      {
        title: 'Sistema de Avales Digital',
        description:
          'Plataforma completa para emisión, validación y revocación de certificaciones basada en componentes seguros y auditables, ideal para integrarse con paneles administrativos y futuros módulos de membresía.',
        icon: Award,
      },
    ],
    phases: [
      {
        id: 1,
        name: 'Auditoría y Arquitectura de Información',
        duration: '5 Días',
        tasks: [
          {
            description:
              'Mapeo de 15 secciones críticas (URLs) para migración',
            hours: 10,
            price: 40,
          },
          {
            description: 'Diseño de flujo de usuario (UX) para Comunidades 1-5',
            hours: 10,
            price: 40,
          },
          {
            description:
              'Estructura técnica de bases de datos de miembros',
            hours: 10,
            price: 40,
          },
        ],
        subtotalHours: 30,
        subtotalPrice: 120,
      },
      {
        id: 2,
        name: 'Desarrollo y Contenidos',
        duration: '5 Días',
        tasks: [
          {
            description: 'Migración de textos y multimedia institucional',
            hours: 30,
            price: 100,
          },
          {
            description:
              'Implementación de Código de Ética y Valores dinámicos',
            hours: 15,
            price: 50,
          },
          {
            description:
              'Configuración de sellos de avales con seguridad digital',
            hours: 20,
            price: 75,
          },
        ],
        subtotalHours: 65,
        subtotalPrice: 225,
      },
      {
        id: 3,
        name: 'Motor de Automatización',
        duration: '5 Días',
        tasks: [
          {
            description: 'Desarrollo de sistema de autogestión de perfiles',
            hours: 20,
            price: 70,
          },
          {
            description:
              'Integración de sistema de soporte y tickets automático',
            hours: 15,
            price: 50,
          },
          {
            description: 'Configuración de pasarela de pago / donaciones',
            hours: 15,
            price: 40,
          },
        ],
        subtotalHours: 50,
        subtotalPrice: 160,
      },
    ],
    summary: {
      phase1: 120,
      phase2: 225,
      phase3: 160,
      total: 565,
      marketValue2Platforms: 1130,
      alliancePrice: 650,
      regularPrice: 1130,
    },
  }

  const handleContact = () => {
    const phoneNumber = '584123563070'
    const message = encodeURIComponent(
      'Hola, me interesa la cotización de Transformación Digital 2x1 para la Federación de Coaching. ¿Podrían proporcionarme más información?'
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Quotation
      quotation={quotationData}
      onContact={handleContact}
    />
  )
}

