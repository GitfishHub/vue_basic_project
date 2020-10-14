import axios from 'axios';
// import { Message } from '@lingyue/dmo-ui';
// import { store } from '@/store/index.js';

const Http = axios.create();

const ajax = (url, params = {}) => {
  params.url = url;
  // store.dispatch('updateLoadingSet', true); //显示loading
  return new Promise((resolve, reject) => {
    Http(params)
      .then((res) => {
        // store.dispatch('updateLoadingSet', false); //移除loading
        // console.log(params);
        if (
          (params.data && params.data.export === true) ||
          (params.params && params.params.export === true)
        ) {
          resolve(res.data);
          return;
        }
		//根据接口返回的数据来判断是否token过期
        // if (res.data.code === 401100 || res.data.code === 600004) {
        //   // relogin
        // }
		
		//success为true的时候才返回
        // if (!res.data.success) {
        //   // Message.error(res.message);
        //   reject({
        //     errorMsg: res.data.message || '网络错误',
        //     errorData: res.data,
        //   });
        //   return;
        // }
        resolve(res.data);
      })
      .catch((err) => {
        // store.dispatch('updateLoadingSet', false); //移除loading
        // Message.error(err.Message || '系统错误，请稍后再试');
        reject({
          errorMsg: '网络错误',
          errorData: err,
        });
      });
  });
};

Http.interceptors.request.use(
  //header的设置
  async (config) => {
    try {
		//拦截器设置头部请求头
      config.headers.common['X-APPLICATION-ID'] = 'DMO';
      config.headers['Authorization'] = 'ca58a94e-880f-4b0d-a1f1-af4621436cf2';

      // console.log(config)
      return config;
    } catch (ex) {
      // console.log(ex);
    }
    debugger;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const apiPathWithParams = (url, params) => {
  //适配restful的接口 path/${id}/xxxx
  var regex = /\$\{(.+?)\}/g; // ${} 特殊字符匹配
  let array = url.match(regex) || [];
  array.forEach((item) => {
    let key = item.substring(2, item.length).substring(0, item.length - 3);
    let str = `\\$\\{${key}\\}`;
    let itemRegex = new RegExp(str, 'g');
    url = url.replace(itemRegex, params[key]); //替换对应的字符
    delete params[key];
  });
  return {
    resultUrl: url,
    resultParams: params,
  };
};

export default {
  request(baseURL) {
    return function(params) {
      let apiParams = {};
      params.opts = params.opts || {};

      /* 处理path */
      let { resultUrl, resultParams } = apiPathWithParams(
        baseURL + params.url,
        params.opts
      );
      params.opts = resultParams;

      Http.defaults.withCredentials = true;
      if (params.method === 'get') {
        apiParams = {
          params: params.opts,
          method: params.method,
        };
      } else if (params.method === 'post') {
        apiParams = {
          headers: {
            'content-type': 'application/json',
          },
          data: JSON.stringify(params.opts),
          method: params.method,
        };
      }
      // 使用FormData上传文件时opts为FormData的实例
      if (params.opts instanceof FormData) {
        apiParams = {
          headers: {
            'content-type': 'multipart/form-data',
          },
          data: params.opts,
          method: params.method,
        };
      }

      if (params.opts && params.opts.export === true) {
        apiParams = {
          ...apiParams,
          responseType: 'arraybuffer',
          timeout: 60000,
        };
      }
      return ajax(resultUrl, apiParams);
    };
  },
};
