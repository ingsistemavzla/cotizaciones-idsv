import { useRef, useEffect } from 'react'
import { ReportHeader } from './ReportHeader'
import { ReportInfoSection } from './ReportInfoSection'
import { ReportSection } from './ReportSection'
import { ReportBudgetSection } from './ReportBudgetSection'
import { ReportExecutedScope } from './ReportExecutedScope'
import { ReportNotExecutedScope } from './ReportNotExecutedScope'
import { ReportClarification } from './ReportClarification'
import { ReportHomePageExplanation } from './ReportHomePageExplanation'
import { ReportCostDetail } from './ReportCostDetail'
import { ReportConclusion } from './ReportConclusion'
import { ReportFooter } from './ReportFooter'
import { Target } from 'lucide-react'
import { useMetaTags } from '@/hooks/useMetaTags'

export function ReportExpenseScope() {
  const reportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('ReportExpenseScope: Component rendered')
  }, [])

  // Configurar meta tags para compartir en redes sociales
  useMetaTags({
    title: 'Informe ICMF web 2025 - IDSV',
    description: 'Informe de Gastos y Alcance de Actualización Parcial - Plataforma Web ICMF. Ingenieros de Sistemas Venezuela (IDSV)',
    image: 'https://federaciondecoaching.com/wp-content/uploads/2025/04/IDSV-LOGO.png',
  })

  const formatEmissionDate = () => {
    const now = new Date()
    return now.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = async () => {
    try {
      const html2pdf = (await import('html2pdf.js')).default
      const element = document.getElementById('report-content')

      if (!element) return

      const opt = {
        margin: [10, 10, 10, 10],
        filename: `Informe-Gastos-Alcance-ICMF.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          scale: 2,
          scrollY: 0,
          useCORS: true,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
      }

      await html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error('Error al generar PDF:', error)
    }
  }

  const handleContact = () => {
    window.open('https://wa.me/584123563070', '_blank')
  }

  return (
    <div
      ref={reportRef}
      id="report-content"
      className="bg-gradient-to-br from-neutral-100 via-white to-neutral-50 min-h-screen py-2 sm:py-4 md:py-8 px-0 sm:px-2 md:px-4 print:py-0 print:px-0 print:bg-white overflow-x-hidden"
    >
      <div className="w-full md:max-w-6xl md:mx-auto bg-white sm:rounded-2xl sm:shadow-2xl overflow-hidden print:shadow-none print:rounded-none max-w-full">
        <ReportHeader
          title="INFORME DE GASTOS Y ALCANCE DE ACTUALIZACIÓN PARCIAL"
          subtitle="PLATAFORMA WEB – ICMF"
        />

        <div className="p-1.5 sm:p-4 md:p-6 lg:p-10 space-y-3 sm:space-y-6 md:space-y-10 print:p-8 animate-fade-in">
          <ReportInfoSection
            target="Junta Directiva"
            entity="Federación de Coaching y Capacitación Americana (ICMF)"
            preparedBy="Equipo de Desarrollo Web"
            concept="Reestructuración y modernización de plataforma web"
            budget="USD 250"
          />

          <ReportSection title="OBJETIVO DEL INFORME" icon={Target}>
            <p className="mb-4">
              El presente informe tiene como objetivo establecer de manera clara y cronológica los sucesos, alcances técnicos y decisiones operativas relacionadas con la actualización parcial de la página web institucional de la ICMF, sobre la cual se emitió un presupuesto total de{' '}
              <strong className="text-primary-700">USD 250</strong>, del cual solo se ejecutó y cobró el{' '}
              <strong className="text-primary-700">50% (USD 125)</strong> correspondiente a la reestructuración integral del Home Page.
            </p>
          </ReportSection>

          <ReportBudgetSection />

          <ReportExecutedScope />

          <ReportNotExecutedScope />

          <ReportClarification />

          <ReportHomePageExplanation />

          <ReportCostDetail />

          <ReportConclusion />
        </div>

        <div className="p-1.5 sm:p-4 md:p-6 lg:p-10 print:p-8">
          <ReportFooter
            date={new Date().toLocaleDateString('es-ES', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            reference="INF-ICMF-2025-001"
            emissionDate={formatEmissionDate()}
            onPrint={handlePrint}
            onDownload={handleDownload}
            onContact={handleContact}
          />
        </div>
      </div>
    </div>
  )
}

