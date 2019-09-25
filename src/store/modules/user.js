import { getUserInfo, login } from '@/api/login'
import { getToken, setToken } from '@/utils/auth'

const state = {
  token: getToken(),
  nickname: '',
  avatar: '',
  signature: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NICKNAME: (state, nickname) => {
    state.nickname = nickname
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_SIGNATURE: (state, signature) => {
    state.signature = signature
  }
}

const actions = {
  async login({ commit }, loginParam) {
    const data = await login(loginParam)
    commit('SET_TOKEN', data.token)
    setToken(data.token)
  },

  async getUserInfo({ commit, state }) {
    const token = state.token

    if (token === undefined) {
      throw Error('getUserInfo: token is undefined')
    }

    const data = await getUserInfo()

    if (!data) {
      throw Error('getUserInfo: please login again')
    }

    const { nickname, avatar, signature } = data

    commit('SET_NICKNAME', nickname)
    commit('SET_AVATAR', avatar)
    commit('SET_SIGNATURE', signature)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
