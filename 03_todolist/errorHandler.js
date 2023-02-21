const headers = require('./headers');

function errorHandler(res) {
  res.writeHead(400, headers);
  res.write(
    JSON.stringify({
      status: 'failed',
      message: '欄位錯誤',
    })
  );
  res.end();
}

module.exports = errorHandler;
