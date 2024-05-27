import { topdf } from "../src/topdf.js";

import fs from "fs/promises";


console.log("Test start");

topdf("tests/pdfconvertertest.html");
let data = await fs.readFile("tests/pdfconvertertest.html");

