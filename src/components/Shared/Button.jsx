function Button({ children, type, isDisabled }) {
	return (
		<button className={`btn btn-${type}`} disabled={isDisabled}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	type: 'primary',
	isDisabled: false,
};

export default Button;
