const express = require('express')
const auth = require('../middleware/auth')
const Task = require('../models/task')

const router = new express.Router()

router.post('/tasks',auth,async(req,res)=>{
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
})   

// GET /tasks?completed=true
// GET /tasks?limit=10&skip=5
// GET /tasks?sortBy=


router.get('/tasks',auth,async(req,res) => {
    const match = {}
    const sort = {}

    if(req.query.completed){
        match.completed = req.query.completed === 'true'
    }

    if(req.query.sortBy){
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try{
        
        await req.user.Populate({
            path : 'tasks',
            match,
            options : {
                limit: parseInt(req.query.limit),
                skip : parseInt(req.query.skip),
                sort 
            }
        }).execPopulate()
        res.send(tasks)
    }catch(e){
        res.status(500).send()
    }

})


router.get('/tasks/:id',auth,async(req,res)=>{
    const _id = req.params.id
    try{
       
        const task = await Task.findOne({ _id,owner: req.user._id })

        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }

})


router.patch('/tasks/:id',auth,async(req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['descripition','completed']
    const isValidatorOperation = updates.every((updates) => allowedUpdates.includes(updates))
    
        if(!isValidatorOperation){
            return res.status(400).send({ Error : 'invalid updates!' })
        }
        try{
            const task = await Task.findOne({ _id:req.params.id,owner:req.user._id })
        
            if(!task){
                return res.status(404).send()
            }
            res.send(task)
        }catch(e){
            res.status(400).send(e)
        }
    })

router.delete('/tasks/:id',auth,async(req,res)=>{
    try{

        const task = await Task.findOneAndDelete({ id:req.params.id, owner:req.user._id })
    //     const task = await Task.findByIdAndDelete(req.params.id)
    if(!task){
        return res.status(404).send()
    }
    res.send(task)
    }catch(e){
        res.status(500).send()
    }
})    

module.exports = router