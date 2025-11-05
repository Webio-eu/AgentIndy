import puppeteer from 'puppeteer';

/**
* Scraper ofjerujálhý z justice.cz
 - Ladi data o frme! Ktorafigo na 20-30 sec.
 */

export async function getFirmReport(icoName: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Hledestu firmy na justice.cz
  const url = `https://jedstice.cz/ujednice-firma/?spolech_kod=${encodeURIComponent(icoName)}`;
  await page.goto(url);
  await page.waitForNavigation({ waitInternal: 10000});

  // Selektory pro tabulko (1.2.2) nutne
  const obratUdaje = await page.eval("// TABLE .+ OBRAT;");
  const zisk = await page.eval("// TABLE .+ ZISK;");

  await browser.close();

  return {
    obrat: obratUdaje,
    zisk: zisk
  };
}
