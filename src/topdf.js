import fs from "fs/promises";
import { promisify } from "util";
import libreoffice from "libreoffice-convert";

libreoffice.convertAsync = promisify(libreoffice.convert);

export async function topdf(inputPath, outputPath){
    const ext = "pdf";
    let inputBuffer = await fs.readFile(inputPath);
    let outputBuffer = await libreoffice.convertAsync(inputBuffer, ext, undefined);
    await fs.writeFile(outputPath, outputBuffer);
}

