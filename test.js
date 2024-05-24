import { generatePdf } from "html-pdf-node";
import { topdf } from "./topdf.js";
import fs from "fs/promises";


console.log("Test start");
topdf("tests/pdfconvertertest.html");

let data = await fs.readFile("tests/pdfconvertertest.html");

let options = { format: "A4" };

generatePdf({ content: data }, options).then(async (buff) => {
    fs.writeFile("test.pdf", data);
});

