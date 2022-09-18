import { useState, useContext, useEffect } from 'react';
import Card from './Shared/Card';
import Button from './Shared/Button';

function TodoForm() {
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const updateText = (e) => {
		if (text.length >= 10) {
			setBtnDisabled(false);
		}
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit form');
	};

	return (
		<Card>
			<h2>Todo form:</h2>

			<form onSubmit={handleSubmit}>
				<h3>Add a todo:</h3>

				<div className="input-group">
					<input
						type="text"
						placeholder="Enter a todo"
						onChange={updateText}
						value={text}
					/>
					<Button isDisabled={btnDisabled}>Send</Button>
				</div>
			</form>
		</Card>
	);
}

export default TodoForm;
