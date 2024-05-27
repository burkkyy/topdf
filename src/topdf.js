import fs from "fs/promises";
import puppeteer from "puppeteer";
import mammoth from "mammoth";

async function docxToHtml(filepath){
    let res = await mammoth.convertToHtml(filepath);
    console.log(res);
}

async function htmlToPdf(file){
    let args = [
        "--no-sandbox",
        "--disable-setuid-sandbox"
    ];

    const browser = await puppeteer.launch({ args: args });
    const page = await browser.newPage();
    await page.setContent(file, { waitUntil: "networkidle0" });
    // await page.goto(file.url, { waitUntil: [ "load", "networkidle0" ] });
    
    return page.pdf({ path: "test123.pdf" }).then(async (data) => {
            await browser.close();
            return Buffer.from(Object.values(data));
    });
}

export async function topdf(filepath){
    const file = await fs.readFile(filepath, "utf8");
    var ret = await htmlToPdf(file);
    return ret;
}

