import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from '../components/Shared/Card';
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoItem({ item }) {
	const { deleteTodos, updateTodos } = useContext(TodoContext);

	return (
		<Card>
			<button className="btn-edit" onClick={() => updateTodos(item)}>
				<FaEdit color="#EE6352" size={22}></FaEdit>
			</button>
			<button className="btn-delete" onClick={() => deleteTodos(item.id)}>
				<FaTimes color="#EE6352" size={25}></FaTimes>
			</button>
			<div className="todo-text-item">{item.text}</div>
		</Card>
	);
}

export default TodoItem;
