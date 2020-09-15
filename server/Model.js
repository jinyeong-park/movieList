// model :  communication with mysql
const db = require('../database')


const getAllMovies = (callback) => {
  let q = 'SELECT * FROM movies'
  db.connection.query(q, callback)
}


const postNewMovie = (movie, callback) => {
  // console.log('movie', movie)
  const {title, watched} = movie;

  let q = `INSERT INTO movies ( title, watched) VALUES
  ( ?, ? )`;

  db.connection.query(q, [title, watched], callback)
  // db.connection.query(q, [title, watched], callback)

}



module.exports = {
  getAllMovies,
  postNewMovie
}