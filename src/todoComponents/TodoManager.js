export class TodoManager {
    constructor() {
        this.todos = []
        this.nextId = 1
    }

    add(title, description = '') {
        const todo = {
            id: this.nextId++,
            title,
            description,
            completed: false,
            createdAt: new Date(),
        }

        this.todos.push(todo)
        return todo
    }

    toggleAll(checked) {
        this.todos = [...this.todos.map((todo) => ({ ...todo, completed: checked }))]
    }

    remove(id) {
        this.todos = [...this.todos.filter((todo) => todo.id !== parseInt(id, 10))]
    }

    update(id, updates) {
        const todo = this.todos.find((todo) => todo.id === id)

        if (!todo) {
            return null
        }

        Object.assign(todo, updates)
        return todo
    }

    toggle(id) {
        this.todos = [...this.todos.map((todo) =>
            todo.id === parseInt(id, 10) ? { ...todo, completed: !todo.completed } : todo
        )]
    }

    get(id) {
        return this.todos.find((todo) => todo.id === id) || null
    }

    getAll() {
        return [...this.todos]
    }

    getCompleted() {
        return [...this.todos.filter((todo) => todo.completed)]
    }

    getPending() {
        return [...this.todos.filter((todo) => !todo.completed)]
    }

    clear() {
        this.todos = [...this.todos.filter((todo) => !todo.completed)]
    }

    save(key = 'todos') {
        try {
            const data = JSON.stringify({ todos: this.todos, nextId: this.nextId })
            localStorage.setItem(key, data)
            return true
        } catch (err) {
            console.error('Failed to save todos:', err)
            return false
        }
    }

    load(key = 'todos') {
        const data = localStorage.getItem(key)

        if (!data) {
            return false
        }

        try {
            const parsed = JSON.parse(data)
            this.todos = parsed.todos || []
            this.nextId = parsed.nextId || 1
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    getCount() {
        return this.todos.length
    }
}

