import templateHTML from '../templates/todo-footer.html?raw'
import { TemplateEngine } from '@niuxe/template-engine'

export class TodoFooter extends HTMLElement {
    constructor() {
        super()
        this.engine = new TemplateEngine()
        this._filtered_data_len = 0
        this._url = ''
        this._data_len = 0
        this._updateScheduled = false
    }

    set filtered_data_len(value) {
        this._filtered_data_len = value
        this.scheduleRender()
    }

    set data_len(value) {
        this._data_len = value
        this.scheduleRender()
    }

    set url(value) {
        this._url = value
        this.scheduleRender()
    }

    scheduleRender() {
        if (!this._updateScheduled) {
            this._updateScheduled = true
            requestAnimationFrame(() => {
                this._updateScheduled = false
                this.render()
            })
        }
    }

    render() {
        const ctx = {
            data_len: this._data_len,
            filtered_data_len: this._filtered_data_len,
            url: this._url
        }
        this.innerHTML = this.engine.render(templateHTML, ctx)
    }
}
