import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface ReportSectionProps {
  title: string
  icon?: LucideIcon
  children: ReactNode
  className?: string
}

export function ReportSection({ title, icon: Icon, children, className = '' }: ReportSectionProps) {
  return (
    <div className={`bg-white sm:rounded-2xl p-1.5 sm:p-4 md:p-6 lg:p-8 border-2 border-neutral-200 sm:shadow-lg overflow-x-hidden w-full ${className}`}>
      <h3 className="text-[0.8rem] sm:text-xl md:text-2xl font-black text-primary-800 mb-2 sm:mb-4 border-b-2 border-primary-600 pb-1 sm:pb-2 flex items-center gap-1.5 sm:gap-2">
        {Icon && <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-600" />}
        {title}
      </h3>
      <div className="text-[0.8rem] sm:text-base text-neutral-700 leading-relaxed">
        {children}
      </div>
    </div>
  )
}


