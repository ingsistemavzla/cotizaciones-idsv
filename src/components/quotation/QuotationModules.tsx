interface Module {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

interface QuotationModulesProps {
  modules: Module[]
}

export function QuotationModules({ modules }: QuotationModulesProps) {
  return (
    <div className="bg-white sm:rounded-2xl sm:shadow-xl p-1.5 sm:p-4 md:p-6 lg:p-8 border-2 border-neutral-200 overflow-x-hidden w-full">
      <h2 className="text-[0.8rem] sm:text-2xl md:text-3xl lg:text-4xl font-black text-primary-800 mb-2 sm:mb-6 md:mb-8 break-words">
        ESTRUCTURA DE MÓDULOS PRINCIPALES
      </h2>

      <div className="space-y-2 sm:space-y-4">
        {modules.map((module, index) => {
          const Icon = module.icon
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-2 sm:p-4 md:p-6 border-2 border-primary-200 hover:border-primary-400 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-1.5 sm:gap-3 md:gap-4">
                <div className="p-1.5 sm:p-3 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[0.8rem] sm:text-lg md:text-xl font-bold text-primary-800 mb-1 sm:mb-2 break-words">{module.title}</h3>
                  <p className="text-[0.8rem] sm:text-sm md:text-base text-neutral-700 leading-relaxed break-words">{module.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

