let express=require('express')
let app=express()

let port=3000;

app.get('/hello',function(req,res){
    res.send(`Hello FR8 ${req.query.name}`)
})

app.post('/student',(req,res)=>{
    let values=req.body
    let responseValue={}
    for (let key in values){
        let arr= values[key].map((item,key)=>{
            return {
                ...item,
                branchName:values.branch[item.branchId-1].name,
                studentName:values.student[item.studentId-1].name
             }
         })
        
         responseValue={branchStudentMap:arr}
         break;
     }
     res.send(responseValue)
})

app.listen(port,()=>{
    console.log('your server is running on port number 3000')
})