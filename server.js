// load app server using express

const express = require('express')
const app = express()
const morgan = require('morgan')
const mysql = require('mysql')
const bodyParser =require('body-parser')
const path = require('path')

app.use(express.static(__dirname+ '/html'))

app.use(bodyParser.urlencoded({extended:false}))

//console.log (__dirname+'/html')


app.use(morgan('short'))

app.get("/", (request,response)=>{
    console.log("Responding to root route")
    //response.send("Hello from root")
    console.log(response.sendFile(path.join(__dirname+'/html/LoginUI.html')))

})


function getconnection(){


    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sep51995',
        database: 'mbti'
    })
}
app.post('/user_login', (req,res)=>{
    console.log("Trying to login")

    const username = req.body.username;
    const password = req.body.password;

    const queryString = "SELECT L.userName, L.psswrd FROM Login as L WHERE L.userName = ? AND L.psswrd = ?";

    getconnection().query(queryString,[username,password],(err,results,fields)=>{
        if(err){
           throw err;
        }

        if(results[0] === undefined){
            res.send("Password or Username incorrect");
            console.log(results)
            return
        }

        console.log(results)
        //res.redirect('http://google.com')

        res.end()



    })

   
})

app.get("/users", (request,response)=>{
    var user1 = {fistName :"Stefon", lastName: "Martin"}
    const user2 = {fistName :"Stefy", lastName: "Mart"}
    

    const connection = getconnection()

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