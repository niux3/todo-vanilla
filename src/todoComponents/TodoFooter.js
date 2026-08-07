import templateHTML from '../templates/todo-footer.html?raw'
import { TemplateEngine } from '@niuxe/template-engine'


export class TodoFooter extends HTMLElement {

    static get observedAttributes() {
        return ['data']
    }

    constructor() {
        super()
        this.engine = new TemplateEngine()
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
        let html = this.engine.render(templateHTML, { todos: this._todos })
        this.innerHTML = html
    }
}
