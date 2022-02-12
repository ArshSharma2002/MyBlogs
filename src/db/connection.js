const mongoose = require("mongoose")

const connectMongo=async ()=>{

    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/blogAPI")
        if (!connection) {
            console.log("an error occcured");
        }else{
            console.log("successfully connected to DB");
        }
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectMongo