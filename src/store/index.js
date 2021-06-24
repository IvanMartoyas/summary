import { createStore } from 'vuex'

export default createStore({
  state: {
    editData: false,
    works: [],
    education: [],
    message: ''
  },
  mutations: {
    editData({state}) {
      return this.state.editData = !this.state.editData;
    },
    saveWorkData({state}, data) {
      // console.log('data ', data)
      this.state.works = data
      // return  console.log('state.works ', this.state.works)
    },
    educationData({state}, data) {
      // console.log('data ', data)
      this.state.education = data
      
    },
    MessageAdd({state}, data) {
      this.state.message = data
      console.log('data ',this.state.message )
    },
    MessageDestroy({state}, data) {
      this.state.message = ''
    }
  },
  actions: {
    editData ({commit}) {
      commit('editData')
    },
    saveDataForm({commit}, data ) {
 
      if(data.kind == 'worck_data') {
        commit('saveWorkData', data.data)
      }
      if(data.kind == 'education_data') {
        commit('educationData', data.data)
      }
    },
    Message({commit}, data ) {
      commit('MessageAdd', data)
      
      setTimeout(function () {
        commit('MessageDestroy')
      }, 3000);

    }
  },
  modules: {
  },
  getters: {
    editData(s) {
      return s.editData
    },
    workData(s) {
      return s.works;
    },
    educationData(s) {
      return s.education;
    },
    Message(s) {
      return s.message;
    }
  }
})
