import { TodoManager } from './TodoManager.js'
import { TodoForm } from './TodoForm.js'
import { TodoList } from './TodoList.js'
import { TodoFooter } from './TodoFooter.js'

export class TodoComponent extends HTMLElement {
    constructor() {
        super()
        customElements.define('todo-form', TodoForm)
        customElements.define('todo-list', TodoList)
        customElements.define('todo-footer', TodoFooter)
        this.todoManager = new TodoManager()
    }

    connectedCallback() {
        this.todoManager.load()
        this.insertAdjacentHTML('beforeend', '<todo-form />')
        this.todoForm = this.querySelector('todo-form')
        this.todoForm.addEventListener('add', this.handleAdd.bind(this))
        this.todoForm.addEventListener('toggleAll', this.handleToggleAll.bind(this))

        this.insertAdjacentHTML('beforeend', '<todo-list />')
        this.todoList = this.querySelector('todo-list')
        this.todoList.addEventListener('remove', this.handleRemove.bind(this))
        this.todoList.addEventListener('toggle', event => this.handleToggle(event))

        this.insertAdjacentHTML('beforeend', '<todo-footer />')
        this.todoFooter = this.querySelector('todo-footer')

        this.handleRoute()
    }

    disconnectedCallback() {
        // Supprime les écouteurs pour éviter les fuites mémoire
        window.removeEventListener('load', this._onLoad)
        window.removeEventListener('hashchange', this._onHashChange)
    }

    handleRoute() {
        this._onLoad = () => this.updateListWithCurrentFilter()
        this._onHashChange = () => this.updateListWithCurrentFilter()

        window.addEventListener('load', this._onLoad)
        window.addEventListener('hashchange', this._onHashChange)

        // Appel initial
        this.updateListWithCurrentFilter()
    }


    handleToggleAll(event) {
        let todo = this.todoManager.toggleAll(event.detail.checked)
        this.todoManager.save()
        this.updateListWithCurrentFilter()
    }

    handleAdd(event) {
        let todo = this.todoManager.add(event.detail.title)
        this.todoManager.save()
        this.updateListWithCurrentFilter()
    }

    handleRemove(event) {
        const id = event.detail.id
        this.todoManager.remove(id)
        this.todoManager.save()
        this.updateListWithCurrentFilter()
    }

    handleToggle(event) {
        const id = event.detail.id
        const todo = this.todoManager.toggle(id)
        this.todoManager.save()
        this.updateListWithCurrentFilter()
    }

    updateListWithCurrentFilter() {
        const url = window.location.hash || '#/all'
        let todos
        switch (url) {
            case '#/all':
                todos = this.todoManager.getAll()
                break
            case '#/pending':
                todos = this.todoManager.getPending()
                break
            case '#/completed':
                todos = this.todoManager.getCompleted()
                break
            case '#/clear':
                this.todoManager.clear()
                this.todoManager.save()
                todos = this.todoManager.getAll()
                break
            default:
                todos = this.todoManager.getAll()
        }
        this.updateList(todos)
    }

    updateList(todos) {
        this.todoList.setAttribute('data', JSON.stringify(todos))
        this.todoFooter.setAttribute('data', JSON.stringify(todos))
    }
}
