const { createNewUser, getUser, updateUser, deleteUser } = require('../models/userModel');

exports.addTask = (ctx) => new Promise(async(resolve, reject) => {
  try {
    const { body } = ctx.request;

    createNewUser(body);
    resolve({
      success: true
    });
  }
  catch(err) {
    console.log("test2");
      reject(err);
    }
});

exports.getTask = (ctx) => new Promise(async(resolve, reject) => {
  try {
    const { id } = ctx.params;

    const result = await getUser(id);
    resolve({
      success: result
    });
  }
  catch(err) {
    console.log("test23");
      reject(err);
    }
});

exports.updateTask = (ctx) => new Promise(async(resolve, reject) => {
  try {
    const { id } = ctx.params;
    const { body } = ctx.request;

    const result = await updateUser(id, body);
    resolve({
      success: result
    });
  }

  catch(err) {
    console.log("test2");
      reject(err);
    }
});

exports.deleteTask = (ctx) => new Promise(async(resolve, reject) => {
  try {
    const { id } = ctx.params;

    const result = await deleteUser(id);
    resolve({
      success: result
    });
  }

  catch(err) {
    console.log("test2");
      reject(err);
    }
  });
