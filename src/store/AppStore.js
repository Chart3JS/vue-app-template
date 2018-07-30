import userAPI from '@/services/InitService'
// import respMock from '@/../mocks/app_mock'

const state = {
  // currentUser: respMock.user,
  // sites: respMock.sites,
  // devices: respMock.devices,
  // meters: respMock.meters
  currentLanguage: 'en',
  showSettings: false,
  currentUser: null,
  sites: [],
  devices: [],
  meters: []
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
        commit('setUserData', result.data)
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
  setUserData (state, data) {
    let { sites, devices, meters } = data
    sites.forEach((site) => {
      site.devices = devices.filter(d => d.device_site_id === site.site_id)
      site.devices.forEach((device) => {
        device.meters = meters.filter(m => m.collector_device_serial_number === device.device_serial_number)
      })
    })
    state.sites = sites
    state.devices = devices
    state.meters = meters
  },
  setCurrentLanguage (state, lang) {
    state.currentLanguage = lang
  },
  setShowSettings (state, isShown) {
    state.showSettings = isShown
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
