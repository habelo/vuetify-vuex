import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = "https://jsonplaceholder.typicode.com/posts/1"
const headers = {Accept: "application/json"}

export default new Vuex.Store({
  state: {
    role: 'FirstRole',
    allRoles: []
  },
  mutations: {
    //synchronous
    addRole(state, role) {
      state.roles = role;
      state.allRoles.push(role)
    },
  },
  actions: {
    //asynchronous
    async setCurrentRole(state) {
      const newRole = await fetch(url, {headers})
      const r = await newRole.json();
      console.log("Payload:")
      console.log(r)
      console.log(state.state.allRoles)
      const splitRole = r.title.split(" ")[state.state.allRoles.length]
      console.log(splitRole)
      //todo kanske inte fungerar med sdk för det gjorde inte för osss förut. kan fortfarande testa
      state.commit("addRole", splitRole )
    }
  },
  modules: {
  },
  getters: {
    getCurrentRole: state => state.role,
    getRoles: state => state.allRoles
  }
})
