import { MongoClient } from "mongodb";
import express from 'express';

const uri = "mongodb+srv://mirellalds:iLpVa2zHAYj5NQ3b@cluster0.u4ucdin.mongodb.net/";

const routes = express.Router();
const client = new MongoClient(uri);

const database = client.db("insertDB");
const haiku = database.collection("haiku");


routes.post('/cards', 
    async function store(req, res) {

        const { cardType, cvv, expirationDate, id, name, number } = req.body;

        try {
            if(!cardType || !cvv || !expirationDate || !id || !name || !number) {
                return res.status(400).json({ 'erro': 'Os campos são obrigatórios, verifique e tente novamente!' });
            }

            const card = {
                cardType: cardType,
                cvv: cvv,
                expirationDate: expirationDate,
                id: id,
                name: name,
                number: number,
                createdAt: DateTime()
            }
            
            const result = await haiku.insertOne(doc);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            return res.json(card);

        }
        catch (err) {
            console.dir
            return res.status(400).json({ 'erro': err.message });
        }
        finally {
            await client.close();
        }
    } 
)

// catch 404 and forward to error handler
routes.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  
// Error Handler
routes.use(function(err, req, res, next) {
    console.log(`code: ${err.status} e mensagem: ${err.message}`);
    res.status(err.status || 500);
    res.json({
      error: {
        code: err.status,
        message: err.message
      }
    });
  });

  export {routes};