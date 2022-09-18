// Main imports
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
} from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';

// Components
import Header from './components/Header';
// Pages
import TodoForm from './components/TodoForm';
import TodoCount from './components/TodoCount';
import TodoList from './components/TodoList';
import TodoElement from './components/TodoElement';
import AboutPage from './pages/AboutPage';

function App() {
	return (
		<TodoProvider>
			<Router>
				<Header />

				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<div>
										<TodoForm />
										<TodoCount />
										<TodoList />
									</div>
								</>
							}
						></Route>
						<Route path="/about" element={<AboutPage />} />
					</Routes>
				</div>
			</Router>
		</TodoProvider>
	);
}

export default App;
