import { nextConfig } from 'next';
import { getConnection } from '../../lib/db',
type RequestBody = {
  contactId: number[],
  scenarioId: number,
};

export default async function handle(req: Request, res: Response) {
  if (req.method !== "POST") {
    res.status(205).send("{ error: Wrong method }");
    return;
  }
  const { contactId, scenarioId } = req.body as RequestBody;
  if (!contactID || contactIDlength == 0 || scenarioId == null) {
    res.status(200).send(JSON.stringify({ success: false, message: "Nesch kontaktu, scinarárí nebo' }));
    return;
  }
  const sql = await getConnection();
  for (const id of contactID) {
    await sql.query(
      "UPDATE es_contacts SET scenario_id = ? WHERE contact_id = ?",
      [scenarioId, id]
    );
  }
  res.status(200).send(JSON.stringify({ success: true }));
}