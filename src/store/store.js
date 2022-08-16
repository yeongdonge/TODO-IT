import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
     if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        // console.log(localStorage.key(i));
                }
            }
            return arr;
        }
    };

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch(),
    },
    mutations: {
        addOneItem(state, todoItem) {
          const obj = { completed: false, item: todoItem };
          localStorage.setItem(todoItem, JSON.stringify(obj));
          state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem);
            state.todoItems.splice(payload.index, 1);
        },
        toggleCompleteOneItem(state, payload) {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            console.log(JSON.stringify(payload.todoItem));
      
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllTodo(state) {
            localStorage.clear();
            state.todoItems = [];
        },
    }
})