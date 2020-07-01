const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
var nodemailer = require('nodemailer');



//var client = new MongoClient('mongodb://localhost:27017/chatroom', {useNewUrlParser:true})
var client = new MongoClient('mongodb+srv://mohammedrauf:rauf786@cluster0-rsk2r.mongodb.net/medicine_donation?retryWrites=true&w=majority', {useNewUrlParser:true})



var connection;
client.connect((err, con)=>{
        if(!err)
        {
            connection=con;
            console.log("database connected successfully");
        }
        else{
            console.log("database could not connect");
        }
})



const app = express();


app.use(cors());

app.post('/signup', bodyParser.json() ,(req,res)=>{  

    // console.log("signup api called");
    // console.log(req.body);
        const collection = connection.db('medicine_donation').collection('users');

        collection.find({email:req.body.email}).toArray((err,docs)=>{
            if(!err && docs.length>0)
            {
                console.log(docs);
                res.send({status:"failed", data:"already exist"});
            }
            else{
                  collection.insert(req.body, (err,result)=>{
                    if(!err)
                    {
                        res.send({status:"ok", data:"signup successfull for "+req.body.name});
                    }
                    else{
                        res.send({status:"failed", data:"could not register"});
                    }
                })
        

            }
        })

   });
app.post('/signin', bodyParser.json() ,(req,res)=>{ 

        console.log(req.body);

    const collection = connection.db('medicine_donation').collection('users');


    collection.find(req.body).toArray((err,docs)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"ok", data:docs});
        }
        else{
            res.send({status:"failed", data:"some error occured"});
        }
    })

    });




    app.get('/listdonations',(req,res)=>{ 

       

    const collection = connection.db('medicine_donation').collection('doner');


    collection.find().toArray((err,docs)=>{
        if(!err && docs.length>0)
        {
            res.send({status:"ok", data:docs});
        }
        else{
            res.send({status:"failed", data:"some error occured"});
        }
    })

    });


    app.post('/processDonation', bodyParser.json(), (req, res)=>{

        console.log(req.body);
        const collection = connection.db('medicine_donation').collection('doner');

        collection.update({_id:ObjectId(req.body.id)},{$set:{ngoEmail:req.body.ngoEmail, status:1}}, (err, result)=>{
            if(!err)
            {
                res.send({status:"ok", data:"data updated successFully"});
            }
            else{
                res.send({status:"failed", data:err});
            }
        })


    })

   
app.post('/donate', bodyParser.json() ,(req,res)=>{  

        const collection = connection.db('medicine_donation').collection('doner');
    
    
        collection.insert(req.body, (err,result)=>{
            if(!err)
            {

                sendMail("medicinengo@gmail.com", "oimptvxohfyyelij" , req.body.email, "Donation Request Confirmation", `<h3>Hi</h3><br><h6>Thank you for your support. we will process your request soon.</h6>` );
                res.send({status:"ok", data:"donation successfull for "+req.body.name});
            }
            else{
                res.send({status:"failed", data:"could not register"});
            }
        })
    
    
    
    });
    


// get element












// app.post('/signuup', bodyParser.json() ,(req,res)=>{  

//     const collection = connection.db('medicine_donation').collection('users');


//     collection.insert(req.body, (err,result)=>{
//         if(!err)
//         {
//             res.send({status:"ok", data:"signup successfull for "+req.body.name});
//         }
//         else{
//             res.send({status:"failed", data:"could not register"});
//         }
//     })



// });


// app.get('/signuup', bodyParser.json() ,(req,res)=>{ 



// const collection = connection.db('medicine_donation').collection('users');


// collection.find(req.body).toArray((err,docs)=>{
//     if(!err && docs.length>0)
//     {
//         res.send({status:"ok", data:docs});
//     }
//     else{
//         res.send({status:"failed", data:"some error occured"});
//     }
// })

// });



function sendMail(from, appPassword, to, subject,  htmlmsg)
{
    let transporter=nodemailer.createTransport(
        {
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:
            {
             //  user:"weforwomen01@gmail.com",
             //  pass:""
             user:from,
              pass:appPassword
              
    
            }
        }
      );
    let mailOptions=
    {
       from:from ,
       to:to,
       subject:subject,
       html:htmlmsg
    };
    transporter.sendMail(mailOptions ,function(error,info)
    {
      if(error)
      {
        console.log(error);
      }
      else
      {
        console.log('Email sent:'+info.response);
      }
    });
}











app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
    // console.log("got to browser and hit 'localhost:3000'");
})






