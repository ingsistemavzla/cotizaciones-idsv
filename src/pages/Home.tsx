import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Modal } from '../components/ui/Modal'
import { Badge } from '../components/ui/Badge'
import { Plus, Filter } from 'lucide-react'

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Cotizaciones</h1>
          <p className="text-gray-600 mt-1">Gestiona tus cotizaciones de manera eficiente</p>
        </div>
        <Button
          variant="primary"
          size="lg"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2"
        >
          <Plus size={20} />
          Nueva Cotización
        </Button>
      </div>

      {/* Filters Section */}
      <Card>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Buscar cotizaciones..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={18} />
            Filtros
          </Button>
        </div>
      </Card>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} hover className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>Cotización #{item}</CardTitle>
                <Badge variant={item % 2 === 0 ? 'success' : 'warning'}>
                  {item % 2 === 0 ? 'Activa' : 'Pendiente'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-gray-600 mb-2">
                Cliente: Cliente Ejemplo {item}
              </p>
              <p className="text-gray-600 mb-2">
                Fecha: {new Date().toLocaleDateString('es-ES')}
              </p>
              <p className="text-2xl font-bold text-primary-600 mt-4">
                $1,234.{item}0
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2 w-full">
                <Button variant="outline" size="sm" className="flex-1">
                  Ver Detalles
                </Button>
                <Button variant="primary" size="sm" className="flex-1">
                  Editar
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modal Example */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Nueva Cotización"
        size="lg"
      >
        <div className="space-y-4">
          <Input label="Cliente" placeholder="Nombre del cliente" />
          <Input label="Descripción" placeholder="Descripción del proyecto" />
          <Input label="Monto" type="number" placeholder="0.00" />
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Crear Cotización
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

