const express = require("express");
const app = express();
// const dotenv = require("dotenv").config();
// const http = require("http");




const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

const authRoute = require("./routes/auth");
const authuser = require("./routes/user");
const authpost = require("./routes/post");
const authcat = require("./routes/category");

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
    .connect("mongodb://localhost/Blog-App", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// console.log("This App is Running port 5000");
// app.set('port', process.env.PORT || 3000);
// const server = http.createServer(app);
// server.listen(process.env.PORT || 3000);


const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
    destination: (req, file, callb) => {
        callb(null, "images");
    },
    filename: (req, file, callb) => {
        //callb(null, "file.png")
        callb(null, req.body.name);
    },
});
const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

app.use("/auth", authRoute);
app.use("/users", authuser);
app.use("/posts", authpost);
app.use("/category", authcat);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});