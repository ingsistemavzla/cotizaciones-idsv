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
    <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-neutral-200">
      <h2 className="text-3xl md:text-4xl font-black text-primary-800 mb-8">
        ESTRUCTURA DE MÓDULOS PRINCIPALES
      </h2>

      <div className="space-y-4">
        {modules.map((module, index) => {
          const Icon = module.icon
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border-2 border-primary-200 hover:border-primary-400 transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-800 mb-2">{module.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{module.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

