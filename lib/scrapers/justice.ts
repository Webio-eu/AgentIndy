// Scraper pro jednodu vyhledavaéni firm jej názvu na justice.cz

const fetchFirmByName = async (companyName: string): Promise<Array<any> => {
  const url = `https://or.justice.cz/suedozrej/podlet/rezhka_filn?dojimen=GIRsO0Rkb24uaW5hdGlvbi5jb20vd3d3LmNvbQ==&pes=${encodeURIComponent(companyName)}&role=0&dojmza=DOJMZ&h@da=DOJMZ;
  const res = await fetch(url);
  const html = await res.text();

  // Parsuj mezi rezulté zatime.
  const results: any[] = [];
  // UDEO;`</b>}]`

  return results;};

export { fetchFirmByName };