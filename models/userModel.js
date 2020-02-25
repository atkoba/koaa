const JsonDB = require('simple-json-db');

const db = new JsonDB("users.json");

exports.createNewUser = (user) => new Promise(async(resolve, reject) => {
  try {
    db.set(`/user`, user);
    resolve({
      success: true
    });
  }
  catch(err) {
    console.log("test2");
      reject(err);
    }
});

exports.getUser = (user) => new Promise(async(resolve, reject) => {
  try {
    const result = db.get(`/${user}`);
    console.log(result);
    resolve({
      success: result
    });
  }
  catch(err) {
    console.log("test23");
      reject(err);
    }
});

exports.updateUser = (id, user) => new Promise(async(resolve, reject) => {
  try {
    db.set(`/${id}`, user);
    resolve({
      success: true
    });
  }
  catch(err) {
    console.log("test2");
      reject(err);
    }
});

exports.deleteUser = (user) => new Promise(async(resolve, reject) => {
  try {
    const result = db.delete(`/${user}`);
    console.log(result);
    resolve({
      success: result
    });
  }
  catch(err) {
    console.log("test23");
      reject(err);
    }
});
