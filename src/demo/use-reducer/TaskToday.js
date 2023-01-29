import { useReducer, useRef } from 'react';


const initState = {
	inputTask: '',
	tasks: []
}

// Define actions string const and ACTION object with payload
const SET_INPUT_TASK = 'set input task';
const ADD_TASK = 'add task';
const DELETE_TASK = 'delete task';

/**
 * 
 * @param {Object} payload payload object
 * @param {string} payload.text text changed
 */
const setInputTask = payload => ({type: SET_INPUT_TASK, payload});

/**
 * 
 * @param {Object} payload 
 * @param {string} payload.task
 */
const addTask = payload => ({type: ADD_TASK, payload});

/**
 * 
 * @param {Object} payload
 * @param {number} payload.index
 */
const deleteTask = payload => ({type: DELETE_TASK, payload});

// Define reducer
const taskTodayReducer = (state, action) => {
	switch (action.type) {
		case SET_INPUT_TASK:
			return {
				...state,
				inputTask: action.payload.text
			}
		case ADD_TASK:
			return {
				...state,
				tasks: [...state.tasks, action.payload.task]
			}
		case DELETE_TASK:
			const newTask = [...state.tasks];
			newTask.splice(action.payload.index, 1)
			return {
				...state,
				tasks: newTask
			}
	
		default:
			break;
	}
}

export default function TaskToday() {

	const [state, dispatch] = useReducer(taskTodayReducer, initState);
	const inputRef = useRef();

	const { inputTask, tasks } = state;

	const handleAddTask = (e) => {
		if(inputTask.trim() === '') {
			return;
		}

		dispatch(addTask({task: inputTask}));
		dispatch(setInputTask({text: ''}));
		inputRef.current.focus();
	}

	const handleDeleteTask = (idx) => {
		dispatch(deleteTask({index: idx}));
	}

	return (
		<div>
			<div>
				<input 
					ref={inputRef}
					value={inputTask}
					onChange={(e)=> dispatch(setInputTask({text: e.target.value}))}
					/>
				<button onClick={handleAddTask}>Add task</button>
			</div>

			<div>
				<ul>
					{
						tasks.map((item, idx) => (
							<li key={idx}>{item} <span onClick={() => handleDeleteTask(idx)}>&times;</span></li>
						))
						
					}
				</ul>
			</div>
		</div>
	)
}