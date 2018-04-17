class TodoList extends HTMLElement {

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
        let todos = JSON.parse(this.getAttribute('todos'));
        todos.forEach((t, i) => {
            this.insertAdjacentHTML('beforeend',`
                <todo-item text="${t}"></todo-item>
            `);
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