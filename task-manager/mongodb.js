// CRUD create read update delete

// const {MongoClient,ObjectID} = require('mongodb')


// const connectionURL = 'mongodb://27.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error,client) => {
//     if(error){
//     return console.log('Unable to connect database!')
//     }
//     const db = client.db(databaseName)

//                 // #Creating Documents...

//     db.collection('users').insertOne({
//         Name : 'Ebrahim',
//         Age : 18
//     },(error,result)=>{
//         if(error){
//             return console.log('Unable to insert user')
//         }
//         console.log(result.ops)
//     })

//     db.collection('users').insertMany([
//         {
//             Name : 'Ebrahim',
//             Age : 18
//         },
//         {
//             Name : 'Bilal',
//             Age : 24
//         }
//     ],(error, result) => {
//         if(error){
//         return console.log('Unable to insert document')
//         }
//         console.log(result.ops)
//     })

//     db.collection('task').insertMany([
//         {
//             description : 'clean the house',
//             completed : true
//         },{
//             description :'house rent',
//             completed : false
//         },{
//             description :'Bike service',
//             completed:false
//         }
//     ],(error, result) => {
//         if(error){
//             return console.log('Unable to insert document')
//         }
//         console.log(result.ops)
//     })

             // # Reading Documents...

    // db.collection('users').findOne({ _id : new ObjectID("5e5131bc444ac07f9fc813ff")}, (error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    // console.log(user)
    // })

    // db.collection('users').find({Age:18}).toArray((error,user)=>{
    //     console.log(user)
    // })
    
    // db.collection('task').findOne({ _id:new ObjectID("5e513378bd714501370d2e21") },(error,tasks) => {
    //     if(error){
    //         return console.log('Unable to find the Document id')
    //     }
    //     console.log(tasks)
    // })
    // db.collection('task').find({ completed:true }).toArray((error,tasks)=>{
    //     console.log(tasks)
    // })

                // #Updating Documents...

    // db.collection('users').updateOne({
    //     _id : new ObjectID("5e5131bc444ac07f9fc813ff")
    // },{
    //     $inc:{
    //         Age : 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })            


    // db.collection('task').updateMany({
    //     completed : false
    // },{
    //     $set : {
    //         completed : true
    //     }
    // }).then((result)=>{
    //     console.log(result.modifiedCount)
    // }).catch((error)=>{
    //     console.log(error)
    // })


            // #Deleting Document...


    // db.collection('users').deleteMany({
    //    Age : 19
    // }).then((result)=>{
    //    console.log(result)
    // }).catch((error)=>{
    //    console.log(error)
    // })

    // db.collection('task').deleteOne({
    //     description : "clean the house"
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
// })
