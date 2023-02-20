const { v4: uuidv4} = require('uuid');

const obj = {
  title: 'Hello world!',
  id: uuidv4()
}

console.log(obj);