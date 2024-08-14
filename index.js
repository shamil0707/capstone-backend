 const cookieParser = require('cookie-parser')
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const productRouter = require ('./routers/productRouter')
const categoryRouter = require ('./routers/categoryRouter')
const userRouter = require('./routers/userRouter')
const authRouter = require ('./routers/authRouter')





const port = 3000

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())


app.use('/api/v1/products',productRouter)
app.use('/api/v1/categories',categoryRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/auth', authRouter)


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