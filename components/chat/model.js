const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const chatSchema = Schema({
  users: [
    {
      type: Schema.ObjectId,
      ref: 'users'
    }
  ]
});

const model = mongoose.model('chats', chatSchema);
// const model = mongoose.model('Chat', chatSchema);

module.exports = model;