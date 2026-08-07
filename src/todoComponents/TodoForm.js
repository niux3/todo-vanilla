import templateHTML from '../templates/todo-form.html?raw'


export class TodoForm extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const fragment = document.createRange().createContextualFragment(templateHTML)
        if (fragment) {
            this.appendChild(fragment)
            this.form = this.querySelector('#todo-form')
            this.input = this.querySelector('input[name="newTask"]')
            this.toggleAll = this.querySelector('input[name="toggleAll"]')
            this.button = this.querySelector('button[type="submit"]')

            this.input.addEventListener('input', () => this.validate())
            this.form.addEventListener('submit', (e) => this.handleSubmit(e))
            this.toggleAll.addEventListener('change', () => this.handleToggleAll())
        }
    }

    validate() {
        const hasValue = this.input.value.trim().length > 0
        this.button.disabled = !hasValue
    }

    handleToggleAll() {
        const checked = this.toggleAll.checked
        this.dispatchEvent(new CustomEvent('toggleAll', { detail: { checked }, bubbles: true }))
    }

    handleSubmit(event) {
        event.preventDefault()
        const title = this.input.value.trim()
        if (title) {
            this.dispatchEvent(new CustomEvent('add', {
                detail: { title },
                bubbles: true,
                composed: true
            }))
            this.input.value = ''
            this.validate()
        }
    }
}
