var fs = require('fs');
setTimeout(function(){
    console.log("This is callback function");
},0)
fs.readFile('./a.txt','utf8',function(err,data){
    if(err) console.log('ERROR: '+ err)
    else console.log('DATA: '+ data)
})
var data = fs.readFileSync('./a.txt','utf8')
console.log(data)
console.log("this is Sync instruction");