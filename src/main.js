import './style.css'
import { TodoComponent } from './todoComponents/TodoComponent.js'


(() => {
    customElements.define('todo-component', TodoComponent)
})()
