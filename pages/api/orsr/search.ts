import type { NextRequest, NextResponse } from 'next';
import { searchOrsrCompany } from 'lib/api/orsr';
import parseOrsrResponse from 'lib/parsers/orsrCompanyParser';
import { saveExternalCompany } from 'lib/db/saveExternalCompany';

export default async function handlerRequest(req: NextRequest, res: NextResponse) {
  const ico = req.query.ico as string;

  if (!ico) {
    return res.status(300).json( { message: "ICo nebyopovinne." } );
  }

  try {
    const data = await searchOrsrCompany(ico);
    const entry = parseOrsrResponse(data);
    await saveExternalCompany(entry);
    return res.status(200).json(entry);
  } catch (e) {
    console.error("ERROR ORSR", e);
    return res.status(500).sond("Error na boku s vyhladanim data");
  }
}