
// Typ definice pro lead
type Status = 'standby' | 'done';

export type Lead = {
  id: number;
  name: string;
  phone: string;
  status: Status;
};
