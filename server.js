const express=require("express");
const app=express()
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res) {
    res.sendFile(__dirname+"/index.html");
    
})
app.post("/",function(req,res){
    var num1=Number(req.body.num1)
    var num2=Number(req.body.num2)
   var result=num1+num2;
   res.send("sum is "+result)

});
app.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmivcalculator.html")
})
app.post("/calculatebmi",function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var result=weight/(height*height);
    res.send("your bmi is "+result);
})

app.listen(3000,function(){
    console.log("running");
})