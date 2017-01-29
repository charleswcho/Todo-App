// ---------------------------------------------------------------
// List classes / your own written libraries here
// ---------------------------------------------------------------

class ToDoApp {
  constructor(store) {
    this.store = store
    this.drapDrop = new DragDropModule(store)

    this.renderTasks()
    this.setListeners()
  }

  renderTasks = (name) => {
    // If there is text in the input we filter our tasks
    let filtered = name ? this.store.filterTasks(name) : this.store.tasks
    // Clear old tasks
    document.querySelector('.tasks').innerHTML = ''
    // Render or rerender tasks
    filtered.forEach((task, idx) => this.renderTask(task, idx))
    // Add drag drop handler
    this.drapDrop.setDragDropListeners()
  }

  renderTask({ name, completed }, idx) {
    const div = document.createElement('div'),
          checked = completed ? 'checked' : '',
          input = `<label><input id=done type=checkbox ${checked}>Completed</label>`

    div.innerHTML = `<li class=task idx=${idx} draggable=true>${name}${input}</li>`
    // Add Task to DOM
    document.querySelector('.tasks').appendChild(div.firstChild)
  }

  // User input handlers
  _handleInput = (e) => {
    const input = document.querySelector('.input-task')
    // If the user submits a new task we create a new task then clear the input
    if (e.keyCode === 13) {
      this.store.createTask(input.value, this.renderTask)
      input.value = ''
    }

    this.renderTasks(input.value)
  }

  _setCompleted = (e) => {
    if (e.target.id === 'done') {
      let idx = e.target.parentElement.parentElement.getAttribute('idx'),
          task = this.store.tasks[parseInt(idx)]

      task.completed = task.completed ? false : true
      // Save new completed state 
      this.store.set()
    }
  }

  setListeners() {
    document.querySelector('.input-task')
            .addEventListener('keyup', this._handleInput)

    document.querySelector('.tasks')
            .addEventListener('click', this._setCompleted.bind(this))
  }
}

class Task {
  constructor(name) {
    this.name = name
    this.completed = false
  }
}

class Store {
  constructor(name) {
    this.name = name
    this.tasks = this.get() || []

    this.set()
  }

  get = () => JSON.parse(sessionStorage.getItem(this.name))

  set() { sessionStorage.setItem(this.name, JSON.stringify(this.tasks)) }

  swap(idx1, idx2) {
    let temp = this.tasks[idx1]

    this.tasks[idx1] = this.tasks[idx2]
    this.tasks[idx2] = temp
  }

  createTask = (name, cb) => {
    if (!name) {
      alert('Task needs name')
    } else {
      const task = new Task(name)
      // Adding Task to Storage
      this.tasks.push(task)
      this.set()
      // Render new Task
      cb(task)
    }
  }

  filterTasks(name) {
    return this.tasks.filter(task => task.name.includes(name))
  }
}

// ---------------------------------------------------------------
// Drag Drop
// ---------------------------------------------------------------

class DragDropModule {
  constructor(store) {
    this.store = store
    this.dragEl = null
  }

  handleDragStart(e) {
    e.target.style.opacity = '0.4';

    this.dragEl = e.target;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  }

  handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  }

  handleDragEnter(e) { this.classList.add('over') }

  handleDragLeave(e) { this.classList.remove('over') }

  handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // Stops some browsers from redirecting.
    }

    // Don't do anything if dropping the same row we're dragging.
    if (this.dragEl != e.target) {
      let dropElIdx = e.target.getAttribute('idx'),
          dragElIdx = this.dragEl.getAttribute('idx')

      this.store.swap(dropElIdx, dragElIdx)
      this.store.set()

      // Set the source row's HTML to the HTML of the column we dropped on.
      this.dragEl.innerHTML = e.target.innerHTML;
      e.target.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
  }

  handleDragEnd(e) {
    this.style.opacity = '1';
    document.querySelectorAll('.task').forEach(task => task.classList.remove('over'))
  }

  setDragDropListeners() {
    document.querySelectorAll('.task').forEach(task => {
      task.addEventListener('dragstart', this.handleDragStart.bind(this), false)
      task.addEventListener('dragenter', this.handleDragEnter, false)
      task.addEventListener('dragover', this.handleDragOver, false)
      task.addEventListener('dragleave', this.handleDragLeave, false)
      task.addEventListener('drop', this.handleDrop.bind(this), false)
      task.addEventListener('dragend', this.handleDragEnd, false)
    })
  }
}

// ---------------------------------------------------------------
// Instantiate and run main app here
// ---------------------------------------------------------------

const store = new Store('tasks')
const todo = new ToDoApp(store)
