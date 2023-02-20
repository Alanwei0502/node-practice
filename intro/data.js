var data = 2;

// 這兩個意思一樣
// exports.data = 2;
// module.exports = { data: 2 };

// 上面寫法不能跟 module.exports 共用，會被覆蓋
module.exports = {
  content: data,
  title: 'title',
  bark(){
    console.log('woof!!')
  }
};