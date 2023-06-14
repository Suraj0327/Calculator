const express=require ("express");
const bodyparser=require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var opr=req.body.opr;
    var result;
    if(opr==='+'){
         result=num1+num2;
    }
    else if(opr==='-'){
        result=num1-num2;
    }
    else if(opr==='*'){
        result=num1*num2;
    }
    else if(opr==='/'){
        result=num1/num2;
    }
    else {
        result="pressed wrong expression";
    }

  res.send("Calculated value is"+result);
});
app.listen(3000,function(){
    console.log("server is running at 3000");
});