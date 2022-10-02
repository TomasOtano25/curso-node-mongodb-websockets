const db = require('mongoose');
const Model = require('./model')

// conection
db.Promise = global.Promise;
db.connect('mongodb://localhost:27017/telegrom').then(() => {
  console.log(">>> DB is connected");
});


const list = [];

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  const messages = await Model.find()
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

async function deleteMessage(message) {

}

module.exports = {
  add: addMessage,
  list: getMessages,
  //get:
  updateText: updateText
  //delete:
};
