function Header({ reversed, text }) {
	return (
		<header className="header">
			<div className="container">
				<h2>{text}</h2>
			</div>
		</header>
	);
}

Header.defaultProps = {
	reversed: false,
	text: 'Todo-list app',
};

export default Header;
