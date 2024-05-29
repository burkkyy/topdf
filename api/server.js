import express from "express";
import fileUpload from "express-fileupload";
import { topdf } from "../src/topdf.js";

const app = express();
app.use(fileUpload());

const PORT = 5000;

app.post("/", async (req, res) => {
    console.log("POST recv");
    /*
    if (req.files) {
        let files = Array.isArray(req.files.files) ? req.files.files : [req.files.files];
        let newFile = await topdfStream(files[0]);
        res.sendFile(newFile);
    } else {
        console.log("Error?");
    }*/
    
    res.status(200).send("hello");
});

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
    
