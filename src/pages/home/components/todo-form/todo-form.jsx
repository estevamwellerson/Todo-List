import { Button } from "../../../../shared/components";

const TodoForm = ({ value, onTypeTodo, onAddTodo }) => {
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Qual o planejamento de hoje?"
        value={value}
        onChange={(e) => onTypeTodo(e.target.value)}
      />
      <Button onClick={() => onAddTodo()}>
        Add
      </Button>
    </div>
  )
}

export default TodoForm;
