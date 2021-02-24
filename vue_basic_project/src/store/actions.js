import * as types from './types'
export default {
    isLogin: ({ commit, state }, payload) => {
        commit(types.ISLOGIN, payload)
    },
	test: ({ commit, state }, payload) => {
        commit(types.TEST, payload)
    },
}
