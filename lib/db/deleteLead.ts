// Mazáni leadu podle id
const { connection } = require('./connection');

export async function deleteLead(id: number) {
  const sql = `DELETE FROM leads WHERE id=${id}`;
  await connection.query(sql);
}
