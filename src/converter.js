import puppeteer from "puppeteer";
import mammoth from "mammoth";

async function htmlToPdf(html_text){
    let args = [
        "--no-sandbox",
        "--disable-setuid-sandbox"
    ];

    const browser = await puppeteer.launch({ args: args });
    const page = await browser.newPage();
    await page.setContent(html_text, { waitUntil: "networkidle0" });

    return page.pdf().then(async (rawPdf) => {
        await browser.close();
        return Buffer.from(Object.values(rawPdf));
    });
}

