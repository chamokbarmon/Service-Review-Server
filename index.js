const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.db_USER}:${process.env.db_PASSWORD}@cluster0.qfamszy.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run(){
    try{
       const serviceCollection =client.db('services').collection('userdata')
       app.get('/services', async(req,res)=>{
         
          const cursor = serviceCollection.find(query)
          const services = await cursor.toArray();
          res.send(services)
       });
       app.get('/services/:id', async(req,res)=>{
          const id = req.params.id;
          const query = {_id: ObjectId(id)}
          const service = await serviceCollection.findOne(query);
          res.send(service)
       })
       app.get('/review/:id', async(req,res)=>{
          const id = req.params.id;
          const query = {_id: ObjectId(id)}
          const service = await serviceCollection.findOne(query);
          res.send(service)
       })
    }  
    finally{

    }
}

run().catch(error=>console.log(error))

app.get('/',(req,res)=>{
    res.send('hello server is running ');
})
app.listen(port,()=>{
    console.log(`services server side is running ${port}`)
})