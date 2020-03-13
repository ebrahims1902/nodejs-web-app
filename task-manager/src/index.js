const express =require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())


app.get('/users',(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((e)=>{
        res.status(500).send()
    })
})


app.get('/users/:id',(req,res)=>{
    const _id = req.params.id

    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        else{
            res.send(user)
        }
    }).catch((e)=>{
        res.status(500).send()
    })

})

app.post('/users',(req,res)=>{
    const user = new User(req.body)

    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})


app.post('/tasks',(req,res)=>{
    const task = new Task(req.body)

    task.save().then(()=>{
        res.send(task)
    }).catch((e)=>{
        res.status(400).send(e)
    })
})   

app.get('tasks',(req,res) => {
    Tasks.find({}).then((task) => {
        res.send(task)
    }).catch((e)=>{
        res.status(500).send()
    })
})


app.listen(port,()=>{
    console.log('server up on port ' + port)
})