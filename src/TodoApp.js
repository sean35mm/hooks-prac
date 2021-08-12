import React, { useState } from 'react';
import { Paper, Typography, AppBar, Toolbar } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
	const initialTodos = [
		{ id: 1, task: 'Clean Office', completed: false },
		{ id: 2, task: 'Wash Car', completed: true },
		{ id: 3, task: 'Grow Beard', completed: false }
	];
	const [todos, setTodos] = useState(initialTodos);

	const addTodo = (newTodoText) => {
		setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
	};

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: 'fafafa'
			}}
			elevation={0}
		>
			<AppBar color='primary' position='static' style={{ height: '64px' }}>
				<Toolbar>
					<Typography color='inherit'>TODOS WITH HOOKS</Typography>
				</Toolbar>
			</AppBar>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} />
		</Paper>
	);
}

export default TodoApp;

// -TodoApp
//  - TodoForm
//  - TodoList
//    - TodoItem

//id, task, completed
