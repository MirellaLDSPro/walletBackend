import express from 'express';
import { MongoClient } from "mongodb";
import 'dotenv/config';

const app = express();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

router.get('/myName/:name', (req, res) => {
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