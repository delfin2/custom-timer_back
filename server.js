const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello browser')
})

app.post('/', (req, res) => {``
res.send(req.body)
})

app.listen(3000, () => {
  console.log('Server running on 3000 port')
})


const {MongoClient} = require('mongodb')
const client = new MongoClient('mongodb://127.0.0.1:27017/')

async function run() {
  try {
    await client.connect();

    const db = client.db('admin')
    const collection = db.collection('test')

    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }
    const result = await collection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
