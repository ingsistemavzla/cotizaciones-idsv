export interface QuotationSection {
  id: number
  name: string
  marketPrice: number
  alliancePrice: number
}

export interface Phase {
  id: number
  name: string
  duration: string
  tasks: PhaseTask[]
  subtotalHours: number
  subtotalPrice: number
}

export interface PhaseTask {
  description: string
  hours: number
  price: number
}

export interface Quotation {
  client: {
    organization: string
    target: string
    consultant: string
    rif: string
  }
  details: {
    date: string
    validity: string
    reference: string
    currency: string
  }
  objective: string
  purpose: string
  sections: QuotationSection[]
  phases: Phase[]
  summary: {
    phase1: number
    phase2: number
    phase3: number
    total: number
    marketValue2Platforms: number
    alliancePrice: number
    regularPrice: number
  }
  modules: {
    title: string
    description: string
    icon: React.ComponentType<{ className?: string }>
  }[]
}

