var add = (a,b,cb) => {
    setTimeout(()=>{
        let err,result;
        if (typeof a != 'number' ||typeof b != 'number'){
            err= new Error('The parameter must be number');
            cb(err, result);
        }
        else{
            result = a+b;
            cb(err,result)
        }
    },0)
}
function mul(a,b,cb){
    setTimeout(()=>{
        let err, result;
        if(typeof a != 'number'|| typeof b != 'number'){
            err= new Error('The parameter must be number');
            cb(err,result);
        }
        else{
            result = a*b;
            cb(err, result)
        }
    },0)
}
function div(a,b,cb){
    setTimeout(()=>{
        let err, result;
        if(typeof a != 'number'|| typeof b != 'number'){
            err= new Error('The parameter must be number');
            cb(err,result);
        }
        else if(b==0){
            err = new Error('Division for 0');
            cb(err, result);
        }
        else{
            result = a/b;
            cb(err, result)
        }
    },0)
}
function Square(a,b,h,cb){
    add(a,b,(err,sum)=>{
        if (err) cb(err)
        else{
            mul(sum,h,(errMsg,tich)=>{
                if(errMsg) cb(errMsg)
                else{
                    div(tich,2,(error,ketqua)=>{
                        if(error) cb(error)
                        else{
                            cb(error,ketqua)
                        }
                    })
                }
            })
        }
    })
}
Square(3,4,5,(err,result)=>{
    if(err) console.log(err+'')
    else console.log(result)
})
// add(4,'5',(err,result)=>{
//     if(err) console.log('Error'+err);
//     else{
//         console.log(result);
//     }
// })
console.log('a')