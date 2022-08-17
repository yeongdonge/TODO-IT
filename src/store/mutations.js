        const addOneItem = (state, todoItem) => {
          const obj = { completed: false, item: todoItem };
          localStorage.setItem(todoItem, JSON.stringify(obj));
          state.todoItems.push(obj);
        }
        const removeOneItem = (state, payload) => {
            localStorage.removeItem(payload.todoItem);
            state.todoItems.splice(payload.index, 1);
        }
        const toggleCompleteOneItem = (state, payload) => {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            console.log(JSON.stringify(payload.todoItem));
      
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        }
        const clearAllTodo = (state) => {
            localStorage.clear();
            state.todoItems = [];
        }

export { addOneItem, removeOneItem, toggleCompleteOneItem, clearAllTodo }