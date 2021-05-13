import instance from './instance';
export function test (opts) {
    return instance({
        method: 'get',
        url: '/singlePoetry',
        opts: opts,
    });
}