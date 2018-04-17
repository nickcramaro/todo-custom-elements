class TodoAdd extends HTMLElement {

    connectedCallback() {
        this.render();
        this.registerHandlers();
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.render();
    }

    registerHandlers() {
        let todos = JSON.parse(this.getAttribute('todos'));
        let todoForm = document.getElementById('todoForm');
        todoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log(e);
        });
    }

    render() {
        const text = this.getAttribute('text');
        this.innerHTML = `
            <form id="todoForm">
                <label for="addTodo">Todo:</label>
                <input type="text" id="addTodo" name="addTodo" />
                <button type="submit">Add</button>
            </form>
        `;
    }

    disconnectedCallback() {
    }
}
window.customElements.define('todo-add', TodoAdd);