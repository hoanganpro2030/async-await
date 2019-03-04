let add = (a,b)=>{
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            if (typeof a != 'number'||typeof b != 'number'){
                rejects(new Error('The parameter must be number'));
            }
            else{
                resolve(a+b)
            }
        },2000)
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
        },1000)
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
        },3000)
    })
}
Promise.all([add(5,6),mul(5,6),div(8,4)])
.then(res=>console.log(res))
.catch(err=>console.log(err))
Promise.race([add(5,6),mul(5,6),div(8,0)])
.then(res=>console.log(res))
.catch(err=>console.log(err))