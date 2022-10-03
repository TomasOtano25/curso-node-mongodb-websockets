const store = require("./store");

function addChat(users) {
  if (!users || !Array.isArray(users)) {
    console.error("[messageController]: No hay nombre");
    return Promise.reject("Invalid user list");
  }
  const chat = {
    users: users
  };
  return store.add(chat);
}

function listChats(userId) {
  return store.list(userId);
}


module.exports = {
  addChat,
  listChats
};
