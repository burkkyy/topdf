import express from "express";
import fileUpload from "express-fileupload";

const app = express();
app.use(fileUpload());

const PORT = 5000;

app.post("/", (req, res) => {
    console.log("POST recv");
    console.log(`req.body: ${req.json}`)
    res.status(200).send("hello");
});

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
    
