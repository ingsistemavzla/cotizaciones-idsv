import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Zap, Shield, Code, Layers } from 'lucide-react'

export function About() {
  const features = [
    {
      icon: Zap,
      title: 'Rendimiento Optimizado',
      description: 'Construido con Vite y React para máxima velocidad y eficiencia.',
    },
    {
      icon: Shield,
      title: 'Seguro y Confiable',
      description: 'Implementado con TypeScript para mayor seguridad en el código.',
    },
    {
      icon: Code,
      title: 'Código Moderno',
      description: 'Utiliza las últimas características de React y mejores prácticas.',
    },
    {
      icon: Layers,
      title: 'Componentes Reutilizables',
      description: 'Arquitectura modular con componentes bien estructurados.',
    },
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Acerca del Proyecto</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Sistema de gestión de cotizaciones desarrollado con tecnologías de vanguardia
          para ofrecer la mejor experiencia y rendimiento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card key={index} hover>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary-100 rounded-lg">
                    <Icon className="text-primary-600" size={24} />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Stack Tecnológico</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="primary">React 18</Badge>
            <Badge variant="info">TypeScript</Badge>
            <Badge variant="success">Vite</Badge>
            <Badge variant="warning">Tailwind CSS</Badge>
            <Badge variant="primary">React Router</Badge>
            <Badge variant="info">Lucide Icons</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}





