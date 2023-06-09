import express from 'express';
import { MongoClient } from "mongodb";
import 'dotenv/config';

const router = express();
router.use(express.json());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

router.get('/cards', 
async function allCards(req, res) {
  try {
      
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

});

router.get('/cards/:id', 
async function allCards(req, res) {
  try {
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


router.post('/cards', 
    async function store(req, res) {

        const { cardType, cvv, expirationDate, id, name, number } = req.body;

        try {
          
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
)

router.get('/', () => {
  
  res.json({resp: "Bem vindo "});
})

router.get('/myName/:name', (req, res) => {
  let name = req.params.name;
  res.json({resp: "Bem vindo " + name});

});
module.exports = router;
// server.use(router);
// router.listen(8080, (err, res) => {
// 	if (err) {
//     console.log(err)
//     return res.status(500).send(err.message)
// } else {
//     console.log('[INFO] Server Running on port:', 3000)
// }
// });