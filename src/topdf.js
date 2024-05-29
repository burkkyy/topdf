import fs from "fs/promises";
import { promisify } from "util";
import libreoffice from "libreoffice-convert";

libreoffice.convertAsync = promisify(libreoffice.convert);

/**
 * Converts file to pdf
 * @param inputPath Filepath to file to be converted
 * @param outputPath Filepath to dump the pdf after converted 
 * @return None
 */
export async function topdf(inputPath, outputPath){
    const ext = "pdf";

    let inputBuffer = await fs.readFile(inputPath);
    let outputBuffer = await libreoffice.convertAsync(inputBuffer, ext, undefined);
    
    await fs.writeFile(outputPath, outputBuffer);
}

/**
 * Converts a file to pdf from a buffer
 * @param inputBuffer Buffer of input file to convert to pdf
 * @return outputBuffer Buffer to pdf
 */
export async function topdfStream(inputBuffer){
    const ext = "pdf";
    
    let outputBuffer = await libreoffice.convertAsync(inputBuffer, ext, undefined);
    return outputBuffer;
}

