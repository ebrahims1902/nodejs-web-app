const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback(undefined,'this my error')
        callback(undefined,[1, 5, 6])
    }, 2000)
}
doWorkCallback((error,result) => {
    if(error){
        return console.log(error)
    }
    console.log(result)
})