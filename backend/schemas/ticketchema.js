const  mongoose  = require("mongoose")
require("../config")
const ticketSchema=new mongoose.Schema({
    name:String,
    email:String,
    movieName:String,
    ticketPrice:String,
    noOfTickets:String,
    total:String,
    Date:String,
})
module.exports= mongoose.model("tickets",ticketSchema);