import * as express from "express";

var app = express();
app.use(express.static("public"));
app.listen(3000);
