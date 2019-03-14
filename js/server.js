// load app server using express

const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const path = require('path')

app.use('/html',express.static(__dirname+'/html'))




app.use(morgan('short'))

app.get("/", (request,response)=>{
    console.log("Responding to root route")
    response.send("Hello from root")

})

app.get("/users", (request,response)=>{
    var user1 = {fistName :"Stefon", lastName: "Martin"}
    const user2 = {fistName :"Stefy", lastName: "Mart"}
    

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sep51995',
        database: 'mbti'
    })

    connection.query("SELECT * FROM Login", (err,rows,fields)=>{
        if(err){
           throw err;
        }

        response.json(rows)
        
    })


    //response.send("Nodemon autoupdates all the time")
})


app.listen(3003, () => {
console.log("Server is up and listening on 3003...")

})