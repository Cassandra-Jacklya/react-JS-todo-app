const TodoForm = () => {
    return (
        <div >
            <form id="todo-form">
                <input id="todo-input" className="input-field input-field-todo" placeholder="Add new todo" />
                <button id="add-btn" className="button" hidden>Add</button>
            </form>
        </div>
    )
}

export default TodoForm;