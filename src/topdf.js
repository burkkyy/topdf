import fs from "fs/promises";
import unoconv from "unoconv";

export async function topdf(inputPath, outputPath){
    //let pdfBuffer = await docxToPdf(inputPath);
    //await fs.writeFile(outputPath, pdfBuffer);
    unoconv.convert(inputPath, 'pdf', function (err, result) {
	    // result is returned as a Buffer
	    fs.writeFile(outputPath, result);
    });
}

