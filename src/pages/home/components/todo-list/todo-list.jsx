import { Button } from "../../../../shared/components";

const TodoList = ({ items = [], onToggle, onDelete }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Button className="btn-icon" onClick={() => onToggle(item.id)}>✅</Button>
            <span style={{textDecoration: item.complete ? 'line-through' : 'none'}}>
              {item.value}
            </span>
            <Button className="btn-icon" onClick={() => onDelete(item.id)} >🗑️</Button>
          </li>
        );
      })}
    </ul>
  )
}

export default TodoList;
