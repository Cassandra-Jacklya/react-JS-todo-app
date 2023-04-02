import DateField from "./DateField";
import IconMiddle from "./IconMiddle";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const ContentBlock= ({ children }) => {
    return (
        <div className="mid-block">
            <div className="d-flex justify-space-between">
                <h2>Today</h2>
                <DateField>
                </DateField>
            </div>
            <TodoForm>
            </TodoForm>
            <IconMiddle>
            </IconMiddle>
            <TodoList>
            </TodoList>
        </div>
    )
}

export default ContentBlock;