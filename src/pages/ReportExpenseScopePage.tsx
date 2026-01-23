import { useEffect } from 'react'
import { ReportExpenseScope } from '../components/report/ReportExpenseScope'

export function ReportExpenseScopePage() {
  useEffect(() => {
    console.log('ReportExpenseScopePage: Component rendered')
  }, [])

  return <ReportExpenseScope />
}


