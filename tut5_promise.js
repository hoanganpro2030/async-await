let aPromise = new Promise((resolve,rejects)=>{
    //resolve("Success");
    rejects(new Error('Fail'))
})
aPromise.then((msg)=>{console.log('Call promise :'+msg)},(msg)=>{console.log('Error :'+msg)})