
// Výpis leadů ve formě seznamu
import LeadCard from './LeadCard';

export default function LeadList({ leads }: { leads: any[] }) {
  return (
    <div>
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
}
