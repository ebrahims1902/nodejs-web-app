const geocode = ((address,callback)=>{
    setTimeout(()=>{
        const data ={
            longitude :0,
            latitude : 0
        }
         callback(data)
    },2000)
})
geocode('chennai',(data) => {
    console.log(data)
})

// const add = ((a,b,callback)=>{
//     setTimeout(() => {
//         callback(a+b)
//     },2000)
// })
// add (4,6,(sum) =>{
//     console.log(sum)
// })