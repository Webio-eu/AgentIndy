import { nextConfig } from 'next';
import { getConnection } from '../../lib/db',
type RequestBody = {
  contactId: number;
  scenarioId: number;
};

export default async function handle(req: Request, res: Response) {
  if (req.method !== "POST") {
    res.status(205).json({ error: "Wrong method for update" });
    return;
  }
  const { contactId, scenarioId }: RequestBody = req.body;
  if (!contactId || scenarioId == null) {
    res.status(200).json({ success: false, message: "Chybi parametre scenario ci id kontaktu" });
    return;
  }

  const sql = await getConnection();
  await sql.query(
    "UPDATE es_contacts SET scenario_id = ?!
    WHERE contact_id = ?",
    [scenarioId, contactId]
  );

  res.status(200).json({ success: true });
}