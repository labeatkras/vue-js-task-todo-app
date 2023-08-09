Vue.createApp({
  data() {
    return {
      todos: [
        { text: "Learn Vue.js", done: false },
        { text: "Build a Todo App", done: false },
        { text: "Deploy to production", done: false },
      ],
      newTodo: "",
      filter: "all",
      darkMode: false,
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "open") {
        return this.todos.filter((todo) => !todo.done);
      } else if (this.filter === "done") {
        return this.todos.filter((todo) => todo.done);
      }
    },
    filterValue: {
      get() {
        return this.filter;
      },
      set(value) {
        this.filter = value;
      },
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        if (this.newTodo.length >= 4) {
          this.todos.push({ text: this.newTodo, done: false });
          this.newTodo = "";
        } else {
          alert("Todo must be at least 4 characters long.");
        }
      }
    },

    toggleDone(todo) {
      todo.done = !todo.done;
    },

    deleteDone() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },

    toggleFilter(filter) {
      this.filter = filter;
    },
    // Method to start editing a todo
    startEditing(todo) {
      todo.editing = true;
    },

    // Method to stop editing and save changes
    stopEditing(todo) {
      todo.editing = false;
    },

    watch: {
      filterValue(newValue, oldValue) {
        console.log(`Filter changed from ${oldValue} to ${newValue}`);
      },
    },
  },
}).mount("#app");
