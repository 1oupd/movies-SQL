const Movie = require("./movie.model");

exports.addMovie = async (movieObj) => {
  try {
    await Movie.sync();
    await Movie.create(movieObjs);
    console.log("movie added");
  } catch (error) {
    console.log(error);
  }
};

// creates a table if it doesn't already exist

exports.listMovies = async () => {
  try {
    await Movie.sync();
    const list = await Movie.findAll({
      raw: true,
      attributes: ["id", "title", "actor"],
    });
    console.log(`the movies we have are: ${list}`);
  } catch (error) {
    console.log(error);
  }
};

// lists movies in db

exports.updateMovie = async (searchMovie, updateInfo) => {
  try {
    await Movie.update(updateInfo, { where: searchMovie });
    console.log(`db updated with ${movie}`);
  } catch (error) {
    console.log(error);
  }
};

// updates a movie in db

exports.deleteMovie = async (searchMovie) => {
  try {
    await Movie.destroy({ where: searchMovie });
    console.log(`you'e deleted ${movie} from the db`);
  } catch (error) {
    console.log(error);
  }
};
