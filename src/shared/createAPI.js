import axios from 'axios';
import qs from 'query-string';
import ExtendableError from 'es6-error';
export class APIError extends ExtendableError {
  constructor(message = '') {
    super(message);
  }
}
// import {
//   Message
// } from '@lingyue/dmo-ui';

function getCookie(cookie_name) {
  let allcookies = document.cookie;
  //索引长度，开始索引的位置
  let cookie_pos = allcookies.indexOf(cookie_name);

  // 如果找到了索引，就代表cookie存在,否则不存在
  if (cookie_pos != -1) {
    // 把cookie_pos放在值的开始，只要给值加1即可
    //计算取cookie值得开始索引，加的1为“=”
    cookie_pos = cookie_pos + cookie_name.length + 1;
    //计算取cookie值得结束索引
    let cookie_end = allcookies.indexOf(";", cookie_pos);

    if (cookie_end == -1) {
      cookie_end = allcookies.length;

    }
    //得到想要的cookie的值
    let value = unescape(allcookies.substring(cookie_pos, cookie_end));
    return value;
  }
  return "";
}

/**
 * 统一的请求拦截器
 * 作用：拦截请求，添加请求token
 */
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  async config => {
      try {
        // const token = await Vue.prototype.$asyncGetStorage({ key: 'token' });
        //
        // config.headers['X-APPLICATION-ID'] = 'DMO';
        // config.headers['Authorization'] = getCookie("LING_YUE_AUTH_TOKEN");
        // config.headers['Authorization']="ed348f27-2460-4e26-a561-406f779f86f1"
        console.log(getCookie())
        return config;
      } catch (ex) {
        console.log(ex);
      }

      return config;
    },
    error => {
      Promise.reject(error);
    },
);

/**
 * 统一的响应拦截器
 * 作用：拦截响应，添加跳转登录
 *
 * 401100: token过期
 * 600004: 切换店铺
 */
axios.interceptors.response.use(
  response => {
    const res = response.data;
    if (!res.success) {
      // Message.error(res.message);
      // reLogin();
      return Promise.reject('error');
    } else {
      return response;
    }
  },
  error => {
    const errorData = error.response || {};

    if (errorData.status === 401100 || errorData.status === 401101) {
      reLogin(errorData);
      return Promise.reject(error);
    }

    // Message.error(errorData.Message || '系统错误，请稍后再试');

    return Promise.reject(error);
  },
);

function reLogin(errorData) {
  // sessionStorage.setItem('LING_YUE_AUTH_TOKEN', '');
  // sessionStorage.setItem('LING_YUE_ORG_ID', '');
  // Message.error(errorData.status === 401100 ? '未登录，即将跳转登录页面' : '登录状态过期，即将跳转登录页面')
}

const VALID_IP_REGEXP = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])/; // eslint-disable-line
const VALID_HOST_REGEXP = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])/; // eslint-disable-line
const getErrorTip = (message, description) => {
  return `
    ${message}
    ${description}
  `;
};

export const getAPIPrefix = str => {
  let val = str || '/';
  if (typeof val === 'string' && protocol !== 'file:') {
    if (/^https?:/.test(val)) {
      // val = val.replace(/^(https?:)/, protocol);
    } else {
      if (VALID_IP_REGEXP.test(val) || VALID_HOST_REGEXP.test(val)) {
        val = `${protocol}//${val}`;
      } else {
        val = val.replace(/^([^/.])/, '/$1');
      }
    }
    val = val.replace(/([^/])$/, '$1/');
  }
  return val;
};
export const getAPIUrl = (prefix, endpoint) => {
  const url = `${prefix}${endpoint}`;
  const re = new RegExp(`/+(${endpoint.replace(/^\/+/, '').replace(/\?.*$/,'')})`);
  return url.replace(re, '/$1');
};
const noop = () => {};
const {
  protocol
} = window.location;
const {
  CancelToken
} = axios;
/**
 * 传入 API 接口的 host 地址，生成一个 API 实例，你可以用这个实例去进行各种 CURD 请求
 *
 * ```js
 * const api = createAPI(process.env.MUJI_APP_API_BASE);
 * const fetchData = async () => {
 *   const data = await api.getJSON('/orders'); // 发起 GET 请求
 *   console.log(data);
 * }
 * ```
 *
 * 默认 createAPI 会将返回结果按搜车标准返回体进行解包，即只返回 `{success: true, data: {...}, code: xxx, msg: xxx}`
 * 中的 data 字段，如果你想要判断接口返回是否成功，可以在 catch 里进行逻辑判断
 * ```js
 * const update = (data) => {
 *   api
 *     .postJSON('/orders', data, {
 *       showNotification: false // 禁用掉默认的错误提示
 *     })
 *     .then((resp) => {
 *       // 请求成功
 *     })
 *     .catch((err) => {
 *       // 请求失败
 *     })
 * }
 * ```
 *
 * @param {string} host 接口 host
 * @param {IRequestConfig} apiConfig 接口请求设置
 */
const createAPI = (host, apiConfig = {}) => {
  const prefix = getAPIPrefix(host);

  function request(endpoint, reqConfig = {}) {
    const config = {
      ...apiConfig,
      ...reqConfig,
    };

    const {
      showNotification = true,
        handleOption,
        handleResp = resp => resp.data,
        ...reqOpts
    } = config;
    const url = getAPIUrl(prefix, endpoint);
    let cancel = noop;
    let opts = {
      withCredentials: true,
      cancelToken: new CancelToken(c => (cancel = c)),
      ...reqOpts,
    };

    if (handleOption) {
      opts = handleOption(opts) || opts;
    }
    const promise = axios(url, opts)
      .then(checkStatus)
      .then(resp => resp.data)
      .then(checkResp)
      .then(resp => handleResp(resp))
      .catch(err => {
        if (axios.isCancel(err)) {
          console.warn(`请求取消：${endpoint}`); // eslint-disable-line
          return;
        }
        console.log(err)
        throw err;
      });
    promise.promise = promise;
    promise.cancel = cancel;
    return promise;

    function checkStatus(resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      if (showNotification) {
        // Message.error(resp.message);
      }
      throw new APIError(`[${resp.status}] 请求错误 ${resp.config.url}`);
    }

    function checkResp(data) {
      if (data.success) {
        return data;
      }
      if (showNotification) {
        const errorTip = getErrorTip(`请求失败 ${data.code}: ${url}`, data.message);
        // Message.error(errorTip);
      }
      throw new APIError(`[${data.code}] 请求失败 ${data.message}`);
    }
  }
  /**
   * 发起 GET 请求
   *
   * @param {string} endpoint
   * @param {Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function getJSON(endpoint, data = {}, config) {
    return request(endpoint, {
      ...config,
      method: 'get',
      params: data,
    });
  }
  /**
   * 发起 POST 请求
   *
   * @param {string} endpoint
   * @param {Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function postJSON(endpoint, data = {}, config) {
    return request(endpoint, {
      ...config,
      method: 'post',
      data,
    });
  }
  /**
   * 以表单形式发起 post 请求，通常用来上传文件
   *
   * 如何使用 postForm 上传文件：
   *
   * ```js
   * const input = document.createElement('input');
   * input.type = 'file';
   * input.click();
   * input.addEventListener('change', () => {
   *   // file 对象代表你从浏览器里选取的文件对象，获取 file 对象的形式多种多样，你也可以使用 antd Upload 组件获取 file 对象
   *   const file = input.files[0];
   *   const formData = new FormData();
   *   formData.append('file', file);
   *   api.postForm('upload', formData);
   * });
   * ```
   *
   * @param {string} endpoint
   * @param {FormData | Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function postForm(endpoint, data = {}, config) {
    return request(endpoint, {
      ...config,
      method: 'post',
      data: data instanceof FormData ? data : qs.stringify(data),
    });
  }
  /**
   *
   * @param {string} endpoint
   * @param {Record<string, File>} files
   * @param {IRequestConfig} config
   */

  function postFile(endpoint, files, config) {
    const isFile = f => Object.prototype.toString.call(f) === '[object File]';
    const fd = new FormData();
    Object.keys(files).forEach(k => {
      if (!isFile(files[k]))
        throw new Error('postFile 方法只接受值为 File 对象的键值对作为参数！');
      fd.append(k, files[k]);
    });
    return postForm(endpoint, fd, config);
  }
  /**
   *
   * @param {string} endpoint
   * @param {Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function putJSON(endpoint, data = {}, config) {
    return request(endpoint, {
      ...config,
      method: 'put',
      data,
    });
  }
  /**
   *
   * @param {string} endpoint
   * @param {Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function patchJSON(endpoint, data = {}, config) {
    return request(endpoint, {
      ...config,
      method: 'patch',
      data,
    });
  }
  /**
   *
   * @param {string} endpoint
   * @param {Record<string, string | number>} data
   * @param {IRequestConfig} config
   */

  function deleteJSON(endpoint, data = {}, config) {
    return request(endpoint, {
      ...config,
      method: 'delete',
      data,
    });
  }

  /**
   * 获取 API 接口 url
   *
   * @param {string} endpoint
   */

  function resovleUrl(endpoint) {
    return getAPIUrl(prefix, endpoint);
  }
  return {
    resovleUrl,
    request,
    getJSON,
    postJSON,
    postForm,
    postFile,
    putJSON,
    patchJSON,
    deleteJSON,
  };
};
export default createAPI;