const doWorkPromises = new Promise((resole,reject)=>{
    setTimeout(() => {
        // resole([1,2,3,4,5])
        reject('This things are error')
    },2000)
})
doWorkPromises.then((result) => {
    console.log(result)
}).catch((error)=>{
    console.log('Error!!!  ',error)
})