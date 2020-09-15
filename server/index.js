const express = require('express')
const app = express();
//*
// const db = require('../database')   // by requiring db in server, help db to server? No! model requiring database there to connect
const Controller = require('./Controller.js') // interpreter going Controller
const port = 3000
const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))  // * false -> true


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// With model/conntroller
app.get('api/movies', Controller.getAllMovies);
app.post('/api/movies', Controller.postNewMovie);

// Without model/conntroller
/*
app.get('/api/movies', (req, res) => {
  console.log('req.body', req.body)
  const { title, watched } = req.body

  const q = `INSERT INTO groceries (title, wtched) VALUES (?, ?)`;

  db.connection.query(q, [title, watched], (err, data) => {
    if (err) {
      res.status(400).send();
    } else {
      res.status(201).send()
    }
  })
})
*/


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})