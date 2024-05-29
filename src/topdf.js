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

export async function topdfStream(inputFile){
    const ext = "pdf";
    const { fileType } = inputFile.file;
    return "TESTING";
    return libreoffice.convertAsync(inputFile.file.data, ext, undefined);
}

