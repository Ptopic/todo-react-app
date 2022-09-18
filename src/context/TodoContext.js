import { createContext, useState, useEffect } from 'react';
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	// States and functions
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetchTodos();
	}, []);

	const fetchTodos = async () => {
		const response = await fetch(
			'http://localhost:5000/todos?_sort=id&_order=desc'
		);
		const data = await response.json();
		console.log(data);
		setTodos(data);
	};

	const addTodos = async (newTodos) => {
		const response = await fetch(`http://localhost:5000/todos`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newTodos),
		});

		const data = await response.json();

		setTodos([data, ...todos]);
	};

	const deleteTodos = () => {
		if (window.confirm('Do you really want to delete this todo?')) {
		}
	};

	const updateTodos = () => {};

	return (
		<TodoContext.Provider
			value={{
				todos,
				addTodos,
				deleteTodos,
				updateTodos,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoContext;
