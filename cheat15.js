import React from 'react';
import './App.css';
import Coursesales from './Coursesales';

function App() {
	var courses = [
		{ name: 'A complete web dev course', price: 299 },
		{ name: 'A complete android dev course', price: 399 },
		{ name: 'A complete C# dev course', price: 559 },
		{ name: 'A complete python dev course', price: 199 },
	];
	return (
		<div className="App">
			<p>Welcome to the Jungle!</p>
			<Coursesales items={courses} />
		</div>
	);
}

export default App;
