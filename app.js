const express = require("express");
const app = express();


var port = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("<h1>hello<h1>")
})

app.listen(port,()=>{
    console.log(`Runinng on port ${port}`);
})


