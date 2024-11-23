const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

app.use(express.json())
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false}));
app.use(cors({
    origin:['https://my-portfolio-frontend-gamma.vercel.app'],
    method:['POST', 'GET'],
    credentials:true,
}));

const port = 5000;
require('./db/conn.js')
const contact = require("./models/contact.js")



app.get('/', (req,res)=>{
    res.send(`app is running on correctly...`)
})


app.get('/user', (req,res)=>{
    res.status(200).json({
        "name":"Arun",
        "age":22,
        "address":"Mumbai",
    })
})

app.post('/contact', async(req,res)=>{
    const {email,subject,message} = req.body;
    try {
        const data = new contact({
            email,
            subject,
            message
        })
        await data.save();
        return res.status(201).json(data);
    } catch (error) {
        if(error.code==11000){
            return res.status(400).json({message:"Email already exist, please enter new email"})
        }
        console.log(`ERROR: ${error}`)
    }
    
})

app.listen(port, ()=>{
    console.log(`app is running on ${port}`)
})
