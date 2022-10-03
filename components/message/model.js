const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const messageSchema = Schema({
  chat: {
    type: Schema.ObjectId,
    ref: 'chats'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'users'
  },
  message: {
    type: String,
    required: true
  },
  file: {
    type: String
  },
  date: Date
});

const model = mongoose.model('messages', messageSchema);

module.exports = model;