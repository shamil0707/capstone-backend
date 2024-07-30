require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const productRoutes = require ('./routes/productRoutes')
const categoryRoutes = require ('./routes/categoryRoutes')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/products',productRoutes)
app.use('/categories',categoryRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



main().then(()=>console.log("db connected")).catch(err => console.log(err));

async function main() {
  const url = process.env.DB_URL
  const password = process.env.DB_PASSWORD
  const urlWithPassword = url.replace('<password>',password)
  await mongoose.connect(urlWithPassword);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}