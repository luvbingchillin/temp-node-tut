const {readFileSync, writeFileSync, readFile, writeFile}=require('fs')

readFile('./content/test.txt','utf-8',(err, result)=>{
    if(err){
        return null
    }
    const first = result;
    readFile('./content/result.txt','utf-8',(err, result)=>{
        if(err){
            return null
        }
        const second =result
        writeFile('./content/resultasync.txt', `here is ${first}`,{flag:'a'},(err,result)=>{
            if(err){
                return null
            }
            console.log(result)
        })
    })
})