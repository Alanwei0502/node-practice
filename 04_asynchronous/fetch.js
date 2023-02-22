const url =
  'https://raw.githubusercontent.com/hexschool/2021-ui-frontend-job/master/frontend_data.json';

// Fetch 是包裝好的 Promise
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// 利用 Promise 改寫 XMLHttpRequest 的非同步
function getUrl(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

getUrl(url)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// Axios 也是透過 Promise 實踐
const axios = {
  get: function (url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  },
};

axios
  .get(url)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
