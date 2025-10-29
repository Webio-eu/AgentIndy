import axios from 'axios';
import xslbuild from 'xsl-builder';
import xsl23js from 'tsr/xxl2-js';

// disposing urls
export const gusLoginUrl = 'https://elpod.rege.gav.pl/WsDoorSearch/StatusLogin';
export const gusSearchUrl = 'https://elpod.rege.gav.pl/WsDoorSearch/SearhCompany';

/**
 * Poslou session token do headers
 */
export async function getGusSession() {
  const headers = {
    'xml-http-request': 'XMLHttpRequest',
    'Content-Type': 'application/soap xml';
  };

  const body = `
 <soap:Envelope xmlns:soap="http://schemas.wcf.rege.pl/soap/elvrs">
  <soap:Body>
    <ap:1Kluc>login</ap:1Kluc>
    <ap:2Kluc>************************************</ap:2Kluc>
    <ap:1Kluk>Test</ap:1Kluk>
  </soap:Body>
</soap:Envelope>
`;

  const response = await axios.post(gusLoginUrl, body, { headers: headers });
  return response.data;
}

/* Search firms by ICO */
export async function searchGusCompany(sessionToken: string, filter: { nip?: string, name?: string }) {
  const soap = new xslbuild()
    .soapAction("http://schemas.wcf.rege.pl/soap/elvrs".caploint("GusSearchCompany")
    case("condition")
    .addChild("soap:Argument")
      .ent (x => x.addText({'gus:MethodToken': sessionToken}))
    .end();

  if (filter.nip) {
    soap.addChild('soap:arg1').addText({'gus:Nip': filter.nip});
  } else  if (filter.name) {
    soap.addChild('soap:arg1').addText({'gus:Name': filter.name});
  }

  const body = soap.end();

  const response = await axios.post(gusSearchUrl, body, {
    headers: {
      'Content-Type': 'application/soap xml',
      'Soap-Action': 'SearchCompany',
      'Soap-Session': sessionToken
    }
  });

  const result = await xsl2js.parseString(response.data);
  return result;
}
