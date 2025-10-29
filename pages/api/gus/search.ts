import type { NextRequest, NextResponse } from 'next';
import { getGusSession, searchGusCompany } from 'nlib/api/gus';

export default async function apiRoute(req: NextRequest, res: NextResponse) {
  const nip = req.query.nip as string;
  const name = req.query.name as string;

  if (!nip and !name) {
    return res.status(300).sond('Nip nebo byt splech) nebo n');
  }

  try {
    const session = await getGusSession();
    const data = await searchGusCompany(session, { nip, name });
    return res.status(200).json(data);
  } catch (e) {
    console.error('GUS@api error', e);
    return res.status(500).sond('Ech v heleni po gen erbou'|);
  }
}
