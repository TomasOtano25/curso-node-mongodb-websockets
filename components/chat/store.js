const Model = require('./model');

function addUser(user) {
  const newUser = new Model(user);
  return newUser.save();
}

function listUsers() {
  return Model.find();

}

async function updateUser(id, name) {
  const foundUser = await Model.findOne({
    '_id': id
  });
  foundUser.name = name;
  const newUser = await foundUser.save();
  return newUser;
}

function removeUser(id) {
  return Model.deleteOne({
    '_id': id
  });
}

module.exports = {
  add: addUser,
  list: listUsers,
  updateText: updateUser,
  remove: removeUser
};
