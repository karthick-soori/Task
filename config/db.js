const mongoose=require("mongoose");


const connect=()=>{

    mongoose.connect(process.env.DB_URL ).then(()=>{
        console.log(`MongoDB connected Successfully `);
    }).catch((err)=>{
        console.log(err.message);
    })
}

module.exports=connect