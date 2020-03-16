require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e6281109b06622421d5bf0e',{ completed : false }).then((user)=>{
//     console.log(user)
//     return Task.countDocuments({ completed : false })
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const deleteTaskAndCount = async(id) =>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed : false})
    return count
}

deleteTaskAndCount('5e6281109b06622421d5bf0e').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})