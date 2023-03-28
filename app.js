const express=require("express")
const QRCode = require('qrcode')
const ejs=require("ejs")
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');

app.get("/",(req,res)=>{
    res.render("index")
    })

app.post("/",(req,res)=>{
   
    const data = {
        name:req.body.name,
        case:req.body.case,
        phone:req.body.phone,
        age:req.body.age,
        address:req.body.address,
        fatherPhone:req.body.fphone
    }
    let stringdata = JSON.stringify(data)


    QRCode.toDataURL(stringdata, function (err, code) {
        if(err) return console.log("error occurred")
     
        
res.render("result",{code})
    })



})



app.get("*",(req,res)=>{
res.send("No Data")
})



app.listen(3000)