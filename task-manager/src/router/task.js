const express = require('express')
const router = new express.Router()
const Task = require('../models/task')


router.post('/tasks',async(req,res)=>{
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }




    // task.save().then(()=>{
    //     res.send(task)
    // }).catch((e)=>{
    //     res.status(400).send(e)
    // })
})   

router.get('/tasks',async(req,res) => {
    try{
        const tasks = await Tasks.find({})
        res.send(tasks)
    }catch(e){
        res.status(500).send()
    }


    // Tasks.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})


router.get('/tasks/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const task = await Task.findById(_id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }


    // Task.findById(_id).then((task)=>{
    //     if(!task){
    //         return res.status(404).send()
    //     }
    //     else{
    //         res.send(task)
    //     }
    // }).catch((e)=>{
    //     res.status(500).send()
    // })

})


router.patch('/tasks/:id',async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['descripition','completed','password','email','name','age']
    const isValidatorOperation = updates.every((updates) => allowedUpdates.includes(updates))
    
        if(!isValidatorOperation){
            return res.status(400).send({ Error : 'invalid updates!' })
        }
        try{
            const task = await Task.findById(req.params.id)
        
            updates.forEach((updates)=> task [updates] = req.body[updates])
            await task.save()


            // const task = await User.findByIdAndUpdate(req.params.id,req.body,{ new:true, runValidators : true})
            if(!task){
                return res.status(404).send()
            }
            res.send(task)
        }catch(e){
            res.status(400).send(e)
        }
    })

router.delete('/tasks/:id',async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
    if(!task){
        return res.status(404).send()
    }
    res.send(task)
    }catch(e){
        res.status(500).send()
    }
})    

module.exports = router