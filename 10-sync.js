const {readFileSync, writeFileSync}=require('fs')

const first = readFileSync('./content/test.txt', 'utf-8')
writeFileSync('./content/result.txt', `here is ${first}`,{flag:'a'})