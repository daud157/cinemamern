const express=require("express");
const signupSchema = require('./schemas/signupschema');
const ticketSchema=require('./schemas/ticketchema')
const cors =require("cors");
require("./config");

const app =express();

app.use(express.json());
app.get("/", (req, res) => {
    res.json("Hello");
})
app.use(cors(
    {
        origin: ["https://cinemamern-look.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));


app.post("/signup",async(req,res)=>{

    const {name,email,password}=req.body;
 signupSchema.findOne({ email: email })
 .then(user=>{
    if(user){
        res.json({status:"user exists with this mail"})
    }
   else {
    signupSchema.findOne({name:name})
    .then(userByName=>{
        if(userByName){
            res.json({status:"user exists with this username"})
        }
        else{
            signupSchema.create(req.body)
            .then(sig=>res.json({status:"success",user:sig}))
            .catch(err=>console.log(err));
        
        }
    })

   

   }
 })



})
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    
    signupSchema.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                  
                    const userDetails = {
                        userName: user.name,
                        email: user.email,
                       
                    };
                    res.json({ status: "success", user: userDetails });
                } else {
                    res.json({ status: "failure", message: "password is incorrect" });
                }
            } else {
                res.json({ status: "failure", message: "no user found" });
            }
        })
        .catch(error => {
         
            console.error("Error:", error);
            res.status(500).json({ status: "error", message: "Internal Server Error" });
        });
});
app.post("/userdashboard/tickets",(req,res)=>{
  const {email}=req.body
  ticketSchema.find({email:email})
     .then(users=>{

        const userDetailsArray = users.map(user => ({
            name:user.name,
           email:user.email,
           movieName:user.movieName,
           ticketPrice:user.ticketPrice,
            noOfTickets:user.noOfTickets,
           total:user.total,
           Date:user.Date,
           
        } ));
        res.json({status:"success",users:userDetailsArray})
       
     })
     .catch(err=>{

        console.log(err)
     })

})

app.post("/userdashboard/booking",(req,res)=>{
    ticketSchema.create(req.body)
    .then(ticket=>{res.json(ticket)})
    .catch(err=>{console.log(err)})
    })
app.listen(3000,()=>{

    console.log("listening")
});
