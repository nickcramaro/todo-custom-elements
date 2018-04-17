let todos = [
    'Buy groceries',
    'Do laundry',
    'Write code',
    'Make todos'
];

class TodoApp extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.render();
    }

    render() {
        this.innerHTML = `
            <todo-list todos='${JSON.stringify(todos)}'></todo-list>
            <todo-add todos='${JSON.stringify(todos)}'></todo-add>
        `;
    }

    disconnectedCallback() {
    }
}
window.customElements.define('todo-app', TodoApp);