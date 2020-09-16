//
const Model = require('./Model.js')

const getAllMovies = (req, res) => {
  Model.getAllMovies((err, response)=> {
    if (err) {
      console.log('CONTROLLER GET MOVIES ERROR', err)
      res.status(400);
    } else {
      console.log('CONTROLLER GET MOVIES SUCCESS', response)
      res.status(200).send(response)
    }
  })
}

const postNewMovie = (req, res) => {
  console.log('req.body', req.body)
  // console.log('newMovie IN CONTROLLER', movie);
  // let movie = req.body;
  Model.postNewMovie(req.body, (err, response) => {
    if (err) {
      console.log('CONTROLLER POST MOVIES ERROR', err)
      res.status(400).send();
    } else {
      console.log('CONTROLLER POST MOVIES SUCCESS- response')
      res.status(200).send('post success');
    }
  })
}

const searchMovies = (req, res) => {
  console.log('req.query', req.query)

  Model.searchMovies(req.query, (err, response) => {
    if (err) {
      console.log('CONTROLLER search MOVIES ERROR', err)
      res.status(400).send();
    } else {
      console.log('CONTROLLER search MOVIES SUCCESS- response')
      res.status(200).send('search success', response);
    }
  })
}

module.exports = {
  getAllMovies,
  postNewMovie
}
