const express = require('express')
const multer = require('multer')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')

router.get('/users/me', auth,async(req,res)=>{
    res.send(req.user)
})

router.get('/users/:id',async(req,res)=>{
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)

    }catch(e){
        res.status(500).send()
    }
})

router.post('/users/login',async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()

        res.send({ user:user, token })
    }catch(e){
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async(req,res)=>{
    try{
        console.log(">>>HEADERS",auth,req.user)
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})

router.post('/users/logoutAll',auth,async(req,res)=>{
  
    try{

        req.user.tokens = []
        await req.send.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})


router.patch('/users/me',async(req,res)=>{
const updates = Object.keys(req.body)
const allowedUpdates = ['name', 'age', 'email', 'password']
const isValidatorOperation = updates.every((updates) => allowedUpdates.includes(updates))

    if(!isValidatorOperation){
        return res.status(400).send({ Error : 'invalid updates!' })
    }
    try{
        
        updates.forEach((updates)=> req.user[updates] = req.body[updates])
        await req.user.save()

        // const user = await User.findByIdAndUpdate(req.params.id,req.body,{ new:true, runValidators : true})
       req.send(req.user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete('/users/me',auth,async(req,res)=>{
    try{
        await req.user.remove()
        
        res.send(req.user)
    }catch(e){
        res.status(500).send()
    }
})




router.post('/users',async (req,res)=>{
    const user = new User(req.body)

    try{
        await user.save()
        const token = await user.generateAuthToken()

        res.status(201).send({ user, token })
    }catch(e){
        res.status(400).send(e)
    }
})

const upload = multer({
    dest: 'avatars'
})
router.post('user/me/avatar',upload.single('avatar'),(req,res)=>{
    res.send()
})
module.exports = router