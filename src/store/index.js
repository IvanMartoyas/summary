import { createStore } from 'vuex'

export default createStore({
  state: {
    editData: false,
    works: [
      {"nameCompany":"Альфа Банк","descriptionWorck":"Консультирование по кредитным продуктам.","dataStart":"2020-03-03","dataEnd":"2020-08-30"},
      {"nameCompany":"РАНО \"Управление образованием\"","descriptionWorck":"Работал системным администратором, настраивал: ЕЦП, расшаривал принтера по сети, устранял неисправности в локальных сетях, заменял ПО и комплектующие на рабочих ПК более чем 130 сотрудников. ","dataStart":"2019-05-01","dataEnd":"2019-08-30"}
    ],
    education:  [
      {"nameCompany":"МИВлГУ Специальность \"Техник программист\"","descriptionWorck":"Изучил языки С++, C#, js, css, html.\nПисал программы на WPF, Win Form.\nИзучил Git Hub.  ","dataStart":"2015-09-01","dataEnd":"2019-07-24"}, 
      {"nameCompany":"Самообучение","descriptionWorck":"Изучил работу с Bitrix 1c, word press, webpack, jquery, vue js, node express, REST API, PHP, Red bean PHP( ORM для работы с MYSQL), SQL. ","dataStart":"2016-02-27","dataEnd":"2021-06-25"}
    ],
    message: ''
  },
  mutations: {
    editData({state}) {
      return this.state.editData = !this.state.editData;
    },
    saveWorkData({state}, data) {
      this.state.works = [...this.state.works, ...data]
    },
    educationData({state}, data) {
      this.state.education = [...this.state.education, ...data]      
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
        console.log("saveData ",data.data)
      }
      if(data.kind == 'education_data') {
        console.log("data ", data.data)
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
