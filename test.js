import { MongoClient } from "mongodb";
// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://mirellalds:iLpVa2zHAYj5NQ3b@cluster0.u4ucdin.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("insertDB");
    const movies = database.collection("haiku");
    const movie = await movies.find().sort().map(
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
    // since this method returns the matched document, not a cursor, print it directly
       movie.forEach(function(name, i){
        console.log(name);
       });
    console.log(movie);
  } catch(err) {
      console.log("Erro na leitura do banco de");
  }
  /*finally {
    await client.close();
  }*/
}
run();