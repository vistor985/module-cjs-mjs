const axios = require('axios');
const { SocksProxyAgent } = require('socks-proxy-agent');

// 替换为你的 SOCKS 代理地址
const agent = new SocksProxyAgent('socks://127.0.0.1:7891/');

async function getPost() {
  try {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        proxy: false, // 禁用 axios 内置代理设置，防止环境变量或默认代理逻辑影响
        httpAgent: agent, // 针对 HTTP 请求
        httpsAgent: agent, // 针对 HTTPS 请求
      }
    );
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
}

getPost();
