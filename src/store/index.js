import Vue from 'vue'
import Vuex from 'vuex'
import teststore from "./teststore"

Vue.use(Vuex)

const url = "https://jsonplaceholder.typicode.com/posts/1"
const headers = {Accept: "application/json"}

//todo kanske använda denna för startup kod samt globala, semi/konstanta variabler
//todo hitta best practice för att ta hand om all kod så att allt inte hamnar här i "fetches" sen
export default new Vuex.Store({
  state: {
    role: '',
    allRoles: [],
    animal: '',
    animals: [],
  },
  mutations: {
    //synchronous
    addRole(state, role) {
      state.role = role;
      state.allRoles.push(role)
    },
    addAnimal(state, animal) {
      console.log("Adding animal: "+ animal)
      state.animal = animal;
      state.animals.push(animal)
      console.log("Animals: " + state.animals)
    }
  },
  actions: {
    //asynchronous
    //todo fixa så att det funkar i explorer
    async setCurrentRole(state) {
      const newRole = await fetch(url, {headers})
      const r = await newRole.json();
      const splitRole = r.title.split(" ")[state.state.allRoles.length]
      state.commit("addRole", splitRole)
    }
    // addRole(state, role) {
    //   state.commit("addRole", role)
    // },
    // addAnimal(state, animal) {
    //   state.commit("addAnimal", animal)
    // },
  },
  modules: {
    teststore
  },
  getters: {
    getCurrentRole: state => state.role,
    getRoles: state => state.allRoles,
    getAnimal: state => state.animal,
    getAnimals: state => state.animals
  }
})
