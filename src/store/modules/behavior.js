import { USER_BEHAVIOR } from '@/utils/constant'
import { getBehaviorCounts } from '@/api/behavior'

const state = {
  // 想读
  wantRead: 0,
  // 在读
  reading: 0,
  // 已读
  read: 0,
  // 想看电影
  wantWatch: 0,
  // 在看电影
  watching: 0,
  // 已看电影
  watched: 0,
  // 想追剧
  wantFollow: 0,
  // 在追剧
  following: 0,
  // 已追剧
  followed: 0
}

const mutations = {
  SET_BEHAVIOR_NUM: (state, value, type) => {
    state[type] = value
  },
  SET_BEHAVIOR_NUM_ALL: (state, value) => {
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        state[USER_BEHAVIOR[key]] = value[key]
      }
    }
  }
}
const actions = {
  async getBehaviorCounts({ commit }) {
    const { data } = await getBehaviorCounts()
    commit('SET_BEHAVIOR_NUM_ALL', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

