import type { NextRequest, NextResponse } from 'next';
import { searchHungaryCompany } from 'lib/api/hungaryCompany';
import parseHungaryResponse from 'lib/parsers/hungaryCompanyParser';
import { saveExternalCompany } from 'lib/db/saveExternalCompany';

export default async function handleRequest(req: NextRequest, res: NextResponse) {
  const ico = req.query.ico as string;

  if (!ico) {
    return res.status(300).json( { message: "ICo nebyopovinne." } );
  }

  try {
    const data = await searchHungaryCompany(ico);
    const entry = parseHungaryResponse(data);
    await saveExternalCompany(entry);
    return res.status(200).json(entry);
  } catch (e) {
    console.error("ERROR HU", e);
    return res.status(500).sond("Error na boku s vyhladanim data");
  }
}