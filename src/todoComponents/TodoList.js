import templateHTML from '../templates/todo-list.html?raw'
import { TemplateEngine } from '@niuxe/template-engine'


export class TodoList extends HTMLElement {
    static get observedAttributes() {
        return ['data']
    }

    constructor() {
        super()
        this.engine = new TemplateEngine()
        this.li = null
        this._todos = []
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'data' && newValue) {
            try {
                this._todos = JSON.parse(newValue)
                // console.log('Loaded todos', this._todos)
                this.render()
            } catch (e) {
                console.error('Invalid JSON in data attribute', e)
            }
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const ctx = { todos: this._todos }
        this.innerHTML = this.engine.render(templateHTML, ctx)
        this.li = this.querySelectorAll('li')
        this.li.forEach((li) => {
            li.querySelector('button').addEventListener('click', this.handleRemove.bind(this))
            li.addEventListener('change', this.handleToggle.bind(this))
        })
    }

    disconnectedCallback() {
        this.li.forEach((li) => {
            li.querySelector('button').removeEventListener('click', this.handleRemove.bind(this))
            li.querySelector('input[type="checkbox"]').removeEventListener('click', this.handleToggle.bind(this))
        })
    }

    handleRemove(event) {
        const button = event.target
        if (button) {
            event.preventDefault()
            const li = button.closest('li')
            if (li) {
                const id = li.dataset.id
                this.dispatchEvent(new CustomEvent('remove', { detail: { id }, bubbles: true, composed: true }))
            }
        }
    }

    handleToggle(event) {
        const input = event.target
        if (input) {
            const id = event.target.closest('li').dataset.id
            this.dispatchEvent(new CustomEvent('toggle', { detail: { id }, bubbles: true }))
        }
    }

    set data(value) {
        this._todos = value || []
        this.render()
    }
}
