
let addpr = (a,b)=>{
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
let mulpr = (a,b)=>{
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
let divpr = (a,b)=>{
    return new Promise((resolve,rejects)=>{
        setTimeout(()=>{
            if (typeof a != 'number'||typeof b != 'number'){
                rejects(new Error('The parameter must be number'));
			}
			else if (b==0){
				rejects(new Error('Chia cho 0'));
			}
            else{
                resolve(a/b)
            }
        },0)
    })
}
async function tinhdientich(a,b,h){
	let ab = await addpr(a,b)
	let abh = await mulpr(ab,h)
	let square = await divpr(abh,2)
	
}



