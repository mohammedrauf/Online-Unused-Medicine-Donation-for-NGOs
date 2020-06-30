const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;


//var client = new MongoClient('mongodb://localhost:27017/chatroom', {useNewUrlParser:true})
var client = new MongoClient('mongodb+srv://mohammedrauf:rauf786@cluster0-rsk2r.mongodb.net/medicine_donation?retryWrites=true&w=majority', {useNewUrlParser:true})
// mongodb+srv://mohammedrauf:<password>@cluster0-rsk2r.mongodb.net/<dbname>?retryWrites=true&w=majority
// mongodb+srv://nareshmali26:<password>@newsdb-uxy6l.mongodb.net/<dbname>?retryWrites=true&w=majority
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
   
app.post('/donate', bodyParser.json() ,(req,res)=>{  

        const collection = connection.db('medicine_donation').collection('doner');
    
    
        collection.insert(req.body, (err,result)=>{
            if(!err)
            {
                res.send({status:"ok", data:"signup successfull for "+req.body.name});
            }
            else{
                res.send({status:"failed", data:"could not register"});
            }
        })
    
    
    
    });
    







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



app.listen(3000, ()=>{
    console.log("Server is listening on port 3000");
    // console.log("got to browser and hit 'localhost:3000'");
})