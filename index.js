const todos = [
    'Buy groceries',
    'Do laundry',
    'Write code',
    'Make todos'
];

class TodoApp extends HTMLElement {

    static get observedAttributes() {
        return ['text'];
    }

    connectedCallback() {
        this.log('connected', todos);
        this.render();
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.log('attributeChanged', attr, newValue);
        this.render();
    }

    render() {
        this.innerHTML = `
            <todo-list todos="${todos}"></todo-list>
        `;
    }

    disconnectedCallback() {
        this.log('disconnected', todos);
    }

    log(...args) {
        console.log('todo-app', ...args);
    }
}
window.customElements.define('todo-app', TodoApp);