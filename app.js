const express = require('express');
const app = express();

app.listen(3000,function(){
    console.log("Server is running");
});

app.get('/',function(req,res){
    res.write("Hello World");
    res.end();
});