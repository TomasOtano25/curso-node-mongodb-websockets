// const db = require('mongoose');
const Model = require('./model')

// conection
// db.Promise = global.Promise;
// db.connect('mongodb://localhost:27017/telegrom').then(() => {
//   console.log(">>> DB is connected");
// });


const list = [];

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages(filterUser) {
  let filter = {}
  if (filterUser !== null) {
    filter = { user: filterUser }
  }
  const messages = await Model.find(filter)
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    '_id': id
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({
    '_id': id
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //get:
  updateText: updateText,
  remove: removeMessage
};
