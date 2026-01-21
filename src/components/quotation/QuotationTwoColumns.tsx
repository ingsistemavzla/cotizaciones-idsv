import { useRef } from 'react'
import { Quotation as QuotationType } from '@/types/quotation'
import { QuotationHeader } from './QuotationHeader'
import { QuotationInfoSection } from './QuotationInfoSection'
import { QuotationObjective } from './QuotationObjective'
import { QuotationAnalysis } from './QuotationAnalysis'
import { QuotationSectionsTwoColumns } from './QuotationSectionsTwoColumns'
import { QuotationModules } from './QuotationModules'
import { QuotationPhases } from './QuotationPhases'
import { QuotationSummary } from './QuotationSummary'
import { QuotationPaymentPlan } from './QuotationPaymentPlan'
import { QuotationConversion } from './QuotationConversion'
import { QuotationFooter } from './QuotationFooter'

interface QuotationTwoColumnsProps {
  quotation: QuotationType
  onPrint?: () => void
  onDownload?: () => void
  onContact?: () => void
}

export function QuotationTwoColumns({
  quotation,
  onPrint,
  onDownload,
  onContact,
}: QuotationTwoColumnsProps) {
  const quotationRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    if (onPrint) {
      onPrint()
    } else {
      window.print()
    }
  }

  const handleDownload = async () => {
    if (onDownload) {
      onDownload()
    } else {
      try {
        const html2pdf = (await import('html2pdf.js')).default
        const element = document.getElementById('quotation-content')

        if (!element) return

        const opt = {
          margin: [10, 10, 10, 10],
          filename: `Cotizacion-${quotation.details.reference}.pdf`,
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
  }

  const totalMarketPrice = quotation.sections.reduce(
    (sum, section) => sum + section.marketPrice,
    0
  )
  const totalAlliancePrice = quotation.sections.reduce(
    (sum, section) => sum + section.alliancePrice,
    0
  )

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

  return (
    <div
      ref={quotationRef}
      id="quotation-content"
      className="bg-gradient-to-br from-neutral-100 via-white to-neutral-50 min-h-screen py-2 sm:py-4 md:py-8 px-0 sm:px-2 md:px-4 print:py-0 print:px-0 print:bg-white overflow-x-hidden"
    >
      <div className="w-full md:max-w-6xl md:mx-auto bg-white sm:rounded-2xl sm:shadow-2xl overflow-hidden print:shadow-none print:rounded-none max-w-full">
        <QuotationHeader
          client={quotation.client}
          details={quotation.details}
          objective={quotation.objective}
        />

        <div className="p-1.5 sm:p-4 md:p-6 lg:p-10 space-y-3 sm:space-y-6 md:space-y-10 print:p-8 animate-fade-in">
          <QuotationInfoSection
            client={quotation.client}
            details={quotation.details}
            objective={quotation.objective}
          />

          <QuotationObjective
            objective={quotation.objective}
            purpose={quotation.purpose}
          />

          <QuotationSectionsTwoColumns
            sections={quotation.sections}
            totalMarketPrice={totalMarketPrice}
            totalAlliancePrice={totalAlliancePrice}
          />

          <QuotationAnalysis
            totalMarketPrice={totalMarketPrice}
            totalAlliancePrice={totalAlliancePrice}
          />

          <QuotationModules modules={quotation.modules} />

          <QuotationPhases phases={quotation.phases} />

          <QuotationSummary summary={quotation.summary} />

          <QuotationPaymentPlan />

          <QuotationConversion />
        </div>

        <div className="p-1.5 sm:p-4 md:p-6 lg:p-10 print:p-8">
          <QuotationFooter
            date={quotation.details.date}
            reference={quotation.details.reference}
            emissionDate={formatEmissionDate()}
            onPrint={handlePrint}
            onDownload={handleDownload}
            onContact={onContact}
          />
        </div>
      </div>
    </div>
  )
}


