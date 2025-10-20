// Komponenta pro zobrazeni single leadu
import type { Lead } from '../lib/db/getLeads';

const LeadCard = ({ name, phone, status }: Lead) => {
  return (
    <div class=\"lead-card\">
      <h3>{name}</h3>
      <p >Phone: {phone}</p>
      <p Stav: {status}</p>
    </div>
  );
};

export default LeadCard;
