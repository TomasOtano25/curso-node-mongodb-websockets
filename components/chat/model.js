const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const chatSchema = Schema({
  users: [
    {
      type: Schema.ObjetId,
      ref: 'users'
    }
  ]
});

const model = mongoose.model('chats', chatSchema);
// const model = mongoose.model('Chat', chatSchema);

module.exports = model;