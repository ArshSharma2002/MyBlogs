const express = require("express")
const connectMongo = require("./db/connection")
const app = express()
const handlebars = require("handlebars")
const port = process.env.PORT || 3000;
const path  = require("path");

var engine = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,"./views"));
handlebars.registerPartial('partials',path.join(__dirname,"./views/partials"));

connectMongo();

app.use(express.json())
app.use("/",require("./routes/homeRoute"))
app.use("/blogs",require("./routes/blogRoutes"))

app.listen(port,()=>{
    console.log(`running on port ${port}`)
    // console.log()
})