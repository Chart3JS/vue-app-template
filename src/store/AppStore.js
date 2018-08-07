import userAPI from '@/services/InitService'
// import respMock from '@/../mocks/app_mock'

const state = {
  currentLanguage: 'en',
  showSettings: false,
  currentUser: null,
  lastCrosswords: [],
  popularCrosswords: [],
  categories: [],
  categoryMap: null
}
// getters
const getters = {
  userInfo: (state, getters, rootState) => {
    return state.currentUser
  },
  isSettingsShown: () => {
    return state.showSettings
  }
}
// actions
const actions = {
  login ({ commit }, userLogin) {
    return userAPI.login(userLogin).then((result) => {
      if (result.status === 200) {
        commit('setUser', result.data.user)
      } else {
        commit('setUser', null)
      }
    }).catch(() => {
      commit('setUser', null)
    })
  },
  logout ({ commit }) {
    commit('setUser', null)
  },
  setLanguage ({ commit }, lang) {
    commit('setCurrentLanguage', lang)
  },
  setShowSettings ({ commit }, isShown) {
    commit('setShowSettings', isShown)
  }
}
// mutations
const mutations = {
  setUser (state, user) {
    state.currentUser = user
  },
  setCurrentLanguage (state, lang) {
    state.currentLanguage = lang
  },
  setShowSettings (state, isShown) {
    state.showSettings = isShown
  },
  setAppInitData (state, appData) {
    // state.appData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
