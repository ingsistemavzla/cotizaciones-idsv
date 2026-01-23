import { brand } from '@/config/brand'

interface ReportHeaderProps {
  title: string
  subtitle: string
}

export function ReportHeader({ title, subtitle }: ReportHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 text-white py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 sm:rounded-t-2xl relative overflow-hidden">
      <div className="w-full md:max-w-6xl md:mx-auto relative z-10">
        {/* Logo grande primero */}
        <div className="flex justify-center mb-6">
          <img
            src={brand.company.logo.main}
            alt="IDSV Logo"
            className="h-32 md:h-40 w-auto object-contain"
          />
        </div>

        {/* Información de IDSV */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Ingenieros de Sistemas Venezuela (IDSV)
          </h2>
          <p className="text-lg opacity-90">J-274030070-0</p>
        </div>

        {/* Título del informe */}
        <div className="text-center mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 uppercase tracking-tight break-words px-2">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg opacity-90 font-light break-words px-2">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}


