class TodoList extends HTMLElement {

    static get observedAttributes() {
        return ['todos'];
    }

    connectedCallback() {
        const todos = this.getAttribute('todos');
        this.log('connected', todos);
        this.render();
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.log('attributeChanged', attr, newValue);
        this.render();
    }

    render() {
        const todos = this.getAttribute('todos');
        this.innerHTML = todos.split(',').map(t => {
            return `
                <todo-item text="${t}"></todo-item>
            `;
        });
    }

    disconnectedCallback() {
        this.log('disconnected', todos);
    }

    log(...args) {
        console.log('todo-list', ...args);
    }
}
window.customElements.define('todo-list', TodoList);