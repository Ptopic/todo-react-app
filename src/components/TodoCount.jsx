import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoCount() {
	const { todos } = useContext(TodoContext);
	return (
		<div className="todos-count">
			Total todos:<h4>{todos.length}</h4>
		</div>
	);
}

export default TodoCount;
