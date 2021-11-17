const Actor = require("./actor.model");

exports.addActor = async (ActorObj) => {
  try {
    await Actor.sync();
    await Actor.create(ActorObj);
    console.log("actor added");
  } catch (error) {
    console.log(error);
  }
};

// creates a table if it doesn't already exist

exports.listActors = async () => {
  try {
    await Actor.sync();
    const list = await Actor.findAll({
      raw: true,
      attributes: ["id", "actor_name"],
    });
    console.log(`the actorss we know of are: ${list}`);
  } catch (error) {
    console.log(error);
  }
};

// lists actors in db

exports.updateActor = async (searchActor, updateInfo) => {
  try {
    await Actor.update(updateInfo, { where: searchActor });
    console.log(`db updated with ${Actor}`);
  } catch (error) {
    console.log(error);
  }
};

// updates an actor in db

exports.deleteActor = async (searchActor) => {
  try {
    await Movie.destroy({ where: searchActor });
    console.log(`you'e deleted ${Actor} from the db`);
  } catch (error) {
    console.log(error);
  }
};

// deletes actor
