const { log } = require('console');
var path = require('path');

console.log('[抓目錄路徑]', path.dirname('/xx/yy/path.js'));

console.log('[路徑合併]', path.join(__dirname, '/zz'));

console.log('[抓檔名]', path.basename('/xx/yy/path.js'));

console.log('[抓副檔名]', path.extname('/xx/yy/path.js'));

console.log('[分析路徑]', path.parse('/xx/yy/path.js'));

// 參考：Node.js Path API
// https://nodejs.org/api/path.html
