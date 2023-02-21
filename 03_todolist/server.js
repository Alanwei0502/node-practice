// RESTful API 列表
// GET: {{url}}/todos               取得所有待辦事項
// POST: {{url}}/todos              新增待辦事項
// PATCH: {{url}}/todos/{{uuid}}    編輯指定待辦事項
// DELETE: {{url}}/todos            刪除所有待辦事項
// DELETE: {{url}}/todos/{{uuid}}   刪除指定待辦事項

const http = require('http');
const { v4: uuidv4 } = require('uuid');
const headers = require('./headers');
const errorHandler = require('./errorHandler');
const successHandler = require('./successHandler');

const todos = [];

const requestListener = (req, res) => {
  let body = '';
  req.on('data', (chunk) => (body += chunk));

  const { url, method } = req;

  if (url === '/todos' && method === 'GET') {
    successHandler(res, todos);
  } else if (url === '/todos' && method === 'POST') {
    req.on('end', () => {
      try {
        const { title } = JSON.parse(body);
        if (title) {
          const newTodo = { title, id: uuidv4() };
          todos.push(newTodo);
          successHandler(res, todos);
        } else {
          errorHandler(res);
        }
      } catch (error) {
        errorHandler(res);
      }
    });
  } else if (url === '/todos' && method === 'DELETE') {
    todos.length = 0;
    successHandler(res, todos);
  } else if (url.startsWith('/todos/') && method === 'DELETE') {
    const id = url.split('/').pop();
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      successHandler(res, todos);
    } else {
      errorHandler(res);
    }
  } else if (url.startsWith('/todos/') && method === 'PATCH') {
    req.on('end', () => {
      try {
        const { title } = JSON.parse(body);
        const id = url.split('/').pop();
        const index = todos.findIndex((todo) => todo.id === id);
        if (title && index !== -1) {
          todos[index].title = title;
          successHandler(res, todos);
        } else {
          errorHandler(res);
        }
      } catch (error) {
        errorHandler(res);
      }
    });
  } else if (method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  } else {
    res.writeHead(404, headers);
    res.write(
      JSON.stringify({
        status: 'failed',
        message: '無此網站路由',
      })
    );
    res.end();
  }
};

const server = http.createServer(requestListener);
server.listen(3005);
