import express from "express";
import fileUpload from "express-fileupload";

import { topdf, topdfStream } from "../src/topdf.js";

const app = express();
app.use(fileUpload({
    debug: true,
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

const PORT = 5000;

app.post("/", async (req, res) => {
    /*
    if (req.files) {
        let files = Array.isArray(req.files.files) ? req.files.files : [req.files.files];
        let newFile = await topdfStream(files[0]);
        res.sendFile(newFile);
    } else {
        console.log("Error?");
    }*/
    console.log("[/] recv");
    if(req.files){
        console.log(req.files);
        console.log("[/] Sending pdf buffer to client...");
        
        let inputFilePath = req.files.files.tempFilePath;
        let pdfBuffer = await topdf(inputFilePath);

        res.setHeader('Content-Type', 'application/pdf');
        res.status(200).send(pdfBuffer);
    } else {
        res.status(400).send("No input files given.");
        console.log("[/] Bad reqest");
    }
    console.log("[/] recv end");
});

app.get("/", (req, res) => { res.sendStatus(400); });

app.get("/test", (req, res) => {
    res.status(200).send("hello");
    console.log("[/test] hello");
});

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });

