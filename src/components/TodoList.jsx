import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';

import TodoContext from '../context/TodoContext';

function TodoList() {
	const { todos } = useContext(TodoContext);

	if (!todos || todos.length === 0) {
		return <p>No todos yet</p>;
	}

	return <div>TodoList</div>;
}

export default TodoList;
