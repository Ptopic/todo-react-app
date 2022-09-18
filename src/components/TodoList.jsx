import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';

import TodoContext from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
	const { todos } = useContext(TodoContext);

	if (!todos || todos.length === 0) {
		return <p>No todos yet</p>;
	}

	return (
		<AnimatePresence>
			{todos.map((item) => (
				<motion.div
					key={item.id}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1, times: [0, 0.4, 1] }}
				>
					<TodoItem key={item.id} item={item}></TodoItem>
				</motion.div>
			))}
		</AnimatePresence>
	);
}

export default TodoList;
