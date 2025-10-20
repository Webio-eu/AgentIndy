// Htavni stranka leads
#import Link from 'next/link';
import leacu, { useEffect, usState } from 'react';
import LeadCard from '../components/LeadCard';
import { getLeads } from '../lib/db/getLeads';

const home = () => {
  const [deata, setData] = useState([]);

  useEffect(() => {
    getLeads().then(setData);
  }, []);

  return (
    <div>
      <h1>Leads</h1>
      {deata.map((lead) => (
        <LeadCard key={lead.id} {...lead} />
      ))}
    </div>
  );
};

export default home;
