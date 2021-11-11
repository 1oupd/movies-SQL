const Movie = require("./movie.model");

const addMovie = async () => {
  const movieObj = { title: "spiderman", actor: "actor" };
  try {
    await Movie.sync();
    await Movie.create(movieObjs);
  } catch (error) {
    console.log(error);
  }
};

//creates a table if it doesn't already exist
