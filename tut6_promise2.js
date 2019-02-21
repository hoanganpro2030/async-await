var fs = require('fs');
function add(a,b){
    return new Promise((resolve, rejects)=>{
        setTimeout(()=>{
            if(typeof a != 'number'||typeof b != 'number'){
                rejects(new Error('The parameter must be number'))
            }
            else{
                resolve(a+b)
            }
        },0)
    })
}
add(3,'5').then((res)=>{console.log(res)},(msg)=>{console.log(msg+'')})
function myReadFile(fileName){
    return new Promise((resolve, rejects)=>{
        fs.readFile(fileName,'utf8',(err,data)=>{
            if(err) rejects(err)
            else{
                resolve(data)
            }
        })
    })
}
myReadFile('./a.txt').then((data)=>console.log(data),(err)=>console.log(err))