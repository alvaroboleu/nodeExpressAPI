import express from "express";
import bodyParser from "body-parser";

import usersRoutes from './routes/users.js'

const app = express()
const PORT = 9000; // port changed from 5000 to 9000

app.use(bodyParser.json())

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
  res.send('Hello from My New API Page!')
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})