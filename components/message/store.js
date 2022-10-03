const Model = require('./model');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

function getMessages(filters) {
  return new Promise((resolve, reject) => {
    let filter = {}
    if (filters.user !== null) {
      filter = { user: filters.user }
    }
    if (filters.chat !== null) {
      filter = { ...filter, chat: filters.chat }
    }
    const messages = Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated)
      });
    // resolve(messages);
  });
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
