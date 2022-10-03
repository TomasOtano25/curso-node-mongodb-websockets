const store = require("./store");

// (quien, que)
function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error("[messageController]: No hay usuario o mensaje");
      return reject("Los datos son incorrectos");
    }
    console.log(file)
    let fileUrl = ''
    if (file) {
      fileUrl = 'http://localhost:3000/app/files/' + file.filename;
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      file: fileUrl,
      date: new Date(),
    };
    // console.log(fullMessage);
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filter) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filter));
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

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id invalido");
      return false;
    }
    store.remove(id)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error)
      });
  });
}



module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
