const mongoose = require("mongoose")
const uri = "mongodb+srv://arun12:arun1234@cluster1.bsv56.mongodb.net/testing?retryWrites=true&w=majority";
mongoose.connect(uri,{
    useUnifiedTopology:true
}).then(()=>{
    console.log(`db connection is successful`)
}).catch((e)=>{
    console.log(`db connection failed ${e.message}`)
})