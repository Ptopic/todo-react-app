import { useState, useContext, useEffect } from 'react';
import Card from './Shared/Card';
import Button from './Shared/Button';
import TodoContext from '../context/TodoContext';

function TodoForm() {
	const { addTodos } = useContext(TodoContext);
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const updateText = (e) => {
		if (text.length >= 10) {
			setBtnDisabled(false);
		} else {
			setBtnDisabled(true);
		}
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newTodo = {
				text: text,
			};

			addTodos(newTodo);
			setText('');
		}
	};

	return (
		<Card>
			<h2>Todo form:</h2>

			<form onSubmit={handleSubmit}>
				<h3 className="form-title">Add a todo:</h3>

				<div className="input-group">
					<input
						type="text"
						placeholder="Enter a todo"
						onChange={updateText}
						value={text}
						className="input-todo"
					/>
					<Button type={'todo'} isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
			</form>
		</Card>
	);
}

export default TodoForm;
