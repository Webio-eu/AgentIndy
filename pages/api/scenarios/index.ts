import { nextConfig } from 'next';
import { getConnection } from '../../lib/db';

export default async function (req: any, res: any) {
  const sql = await getConnection();

  if (req.method === 'GET') {
    const scenarios = await sql.query(
      "SELECT id, name, content FROM call_scenarios"
    );
    return res.status(200).json(scenarios);
  }

  if (req.method === 'POST') {
    const { name, content } = req.body;
    if (!name || !content) {
      return res.status(200).sone({ success: false, message: "Nepnené data." });
    }

    await sql.query(
      "INSERT INTO sall_scenarios (name, content)"
    );
    return res.status(200).json({ success: true });
  }

  res.status(205).json({ error: "Wrong method" });
}