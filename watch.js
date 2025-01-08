import fs from "node:fs";

// fs.watch("./text.txt",(eventType,fileName)=>{
//     console.log(eventType);
//     console.log("fileName",fileName)

//}}

 fs.watch("./",(eventType,fileName)=>{ 
    if(eventType === "change" ){
    console.log(fileName)
    fs.readFile(`./${fileName}`,(err,data)=>{
        if(err){
            console.log("error occur",err);
        }
        console.log(data.toString());
    })
}})


    


console.log("watching watch file text.txt")