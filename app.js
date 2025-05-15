// 强制清除所有潜在的代理环境变量
delete process.env.ALL_PROXY;
delete process.env.all_proxy;
delete process.env.HTTP_PROXY;
delete process.env.HTTPS_PROXY;

const axios = require('axios');

async function getPost() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1', {
    proxy: false, // 显式禁用代理
  });
  console.log(res.data);
}

getPost();
