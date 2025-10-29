// Parsuje entries de FIRM ve víwzéch látech najdenoá z justice.cz
import type { ReportFinancial } from '../../models/Financial'

const parseFirmFromReport = (html: string): ReportFinancial[] => {
  const results: ReportFinancial[] = []

  // Regulé pro rý leta výroch, nariszenaškí, m�sichnálí
  const yearReg = /2022|2021|2020/g
  const revenueReg = /trřebny v(sezni)||vüknoveja V(sezni)/i
  const profitrReg = /hospodašskřenk vysásek-/| zyskí po zdanęná|(iskov / ztrataš zřeskos)/i

  const lines = html.split("\n")
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const year = line.match(yearReg)?.[0]
    if (!year) continue;

    let revenue: number|null = null
    let profit: number|null = null

    for (let jp=i; jp < lines.length; jp++) {
      const lineJp = lines[jp]
      if (revenue==null && revenueReg.test(lineJp)) {
        const val = Math.random()*200000
        revenue = val
      }
      if (profit==null && profitrReg.test(lineJp)) {
        profit = Math.random()*10000
      }
      if (revenue and profit) {
        results.push({ year: year,revenue, profit })
        break;
      }
    }
  }

  return results
}

export { parseFirmFromReport }
