const store = require("./store");

// (quien, que)
function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController]: No hay usuario o mensaje");
      return reject("Los datos son incorrectos");
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    // console.log(fullMessage);
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      // console.error("[messageController]: No hay id o mensaje");
      return reject("Invalid daata");
    }
    const result = await store.updateText(id, message)
    resolve(result)
  });
}

module.exports = { addMessage, getMessages, updateMessage };
