import express from 'express';
import { MongoClient } from "mongodb";
import 'dotenv/config';

const app = express();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(5000, (err, res) => {
	if (err) {
    console.log(err)
    return res.status(500).send(err.message)
} else {
    console.log('[INFO] Server Running on port:', 3000)
}
});

module.exports = app;