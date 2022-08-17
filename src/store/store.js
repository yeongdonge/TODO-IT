import Vue from "vue";
import Vuex from "vuex";
import todoApp from "./modules/todoApp";

Vue.use(Vuex);

// const storage = {
//   fetch() {
//     const arr = [];
//     if (localStorage.length > 0) {
//       for (let i = 0; i < localStorage.length; i++) {
//         arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//         // console.log(localStorage.key(i));
//       }
//     }
//     return arr;
//   },
// };

export const store = new Vuex.Store({
  modules: {
    todoApp,
  },
});
