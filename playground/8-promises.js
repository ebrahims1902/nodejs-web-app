// const doWorkPromises = new Promise((resole,reject)=>{
//     setTimeout(() => {
//         // resole([1,2,3,4,5])
//         reject('This things are error')
//     },2000)
// })
// doWorkPromises.then((result) => {
//     console.log(result)
// }).catch((error)=>{
//     console.log('Error!!!  ',error)
// })


const add = (a,b) => {
    return new Promise((resole,reject)=>{
        setTimeout(()=>{
            resole(a+b)
        },2000)
})
}


// add(1,2).then((sum)=>{
//     console.log(sum)

//     add(sum,5).then((sum2)=>{
//         console.log(sum2)
//     })
// }).catch((e)=>{
//     console.log(e)
// })

add(1,1).then((sum)=>{
    console.log(sum)

    return add(sum,4)
}).then((sum2)=>{
    console.log(sum2)
}).catch((e)=>{
    console.log(e)
})