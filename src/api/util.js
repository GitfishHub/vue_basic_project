import createAPI from '@/shared/createAPI';

function finance(baseURL) {
    const API = createAPI(`${baseURL()}`, {
        showNotification: true,
    });

    return function (conf) {
        let { url, method, opts } = conf || {};
        let convertUrl = url.replace(/\{([\s\S]+?)\}/g, ($0, $1) => opts[$1] || '');
        let data = method == 'get' ? { params: opts } : { data: opts };
        return API.request(convertUrl, {
            method,
            ...data,
        });
    };
}

export default {
  finance
};
