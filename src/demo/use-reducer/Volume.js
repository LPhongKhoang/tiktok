import { useReducer } from "react";

// Init state
const initState = 0;

// Define actions
const ACTION_UP = 'up';
const ACTION_DOWN = 'down';

// Define reducer
const reducer = (currState, action) => {
	switch(action) {
		case ACTION_UP:
			return currState + 1;
		case ACTION_DOWN:
			return currState - 1;
		default:
			throw new Error('Action is not supported');
	}
}



export default function Volume() {
	const [count, dispatch] = useReducer(reducer, initState);

	return (
		<div>
			<h3>Volume: {count} </h3>
			<button onClick={() => dispatch(ACTION_DOWN)}>Decrease (-)</button>
			<button onClick={() => dispatch(ACTION_UP)}>Increase (+)</button>
		</div>
	)
}

/**
 * 0. @docs
 * 	An alternative to useState.
	useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

 * 1. useReducer also manage state of functional component --> like useState
 * - useReducer hook in React has same follow with REDUX
 * 2. Steps
 * - Init state
 * - Define actions (const string)
 * - Define reducer function: function(currState, action): newState;
 * - Dispatch action when something happens that want to change state
 */