let add = (a,b)=>{
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            if (typeof a != 'number'||typeof b != 'number'){
                rejects(new Error('The parameter must be number'));
            }
            else{
                resolve(a+b)
            }
        },0)
    })
}
let mul = (a,b)=>{
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            if (typeof a != 'number'||typeof b != 'number'){
                rejects(new Error('The parameter must be number'));
            }
            else{
                resolve(a*b)
            }
        },0)
    })
}
let div = (a,b)=>{
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            if (typeof a != 'number'||typeof b != 'number'){
                rejects(new Error('The parameter must be number'));
            }
            else if (b==0){
                rejects(new Error('Division for 0'));
            }
            else{
                resolve(a/b)
            }
        },0)
    })
}
let square = (a,b,h)=>{
    return add(a,b)
    .then((result)=>mul(result,h))
    .then((res)=>div(res,2))
}
square(4,6,5)
.then(result=>console.log(result))
.catch(err=>console.log(err+''))