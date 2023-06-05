import express from 'express';
import { MongoClient } from "mongodb";
import 'dotenv/config';

const app = express();

const uri = process.env.MONGODB_URI;
const client = await (new MongoClient(uri, {})).connect();


app.get('/cards', 
async function allCards(req, res) {
  try {
      
const client = await (new MongoClient(uri, {})).connect();
    const database = client.db("insertDB");
    const movies = database.collection("haiku");
    const result = await movies.find().sort().map(
      function (p) {
        return {
          cardType: p.cardType,
          cvv: p.cvv,
          expirationDate: p.expirationDate,
          id: p.id,
          name: p.name,
          number: p.number,
          createdAt: p.createdAt
        }
      }
    ).toArray();

    console.log(result);
  
    return res.json(result);
  }
  catch (err) {
      console.dir
      return res.status(400).json({ 'erro': err.message });
  }
  finally {
      await client.close();
  }

});

app.get('/cards/:id', 
async function allCards(req, res) {
  try {
    const client = await (new MongoClient(uri, {})).connect();
    const cardIdParam = req.params.id;
    const database = client.db("insertDB");
    const movies = database.collection("haiku");
    const result = await movies.findOne(
      { $or: [ { id: cardIdParam } ] }
    );

    console.log(result);
  
    return res.json(result);
  }
  catch (err) {
      console.dir
      return res.status(400).json({ 'erro': err.message });
  }
  finally {
      await client.close();
  }
});

app.post('/cards', 
async function store(req, res) {

    const { cardType, cvv, expirationDate, id, name, number } = req.body;

    try {
      const client = await (new MongoClient(uri, {})).connect();
      
        const database = client.db("insertDB");
        const haiku = database.collection("haiku");
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
            createdAt: Date.now()
        }
        
        const result = await haiku.insertOne(card);
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
);

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get('/myName/:name', (req, res) => {
  let name = req.params.name;
  res.json({resp: "Bem vindo " + name});

});

app.listen(5000, (err, res) => {
	if (err) {
    console.log(err)
    return res.status(500).send(err.message)
} else {
    console.log('[INFO] Server Running on port:', 3000)
}
});
// Export the Express API
export default app;