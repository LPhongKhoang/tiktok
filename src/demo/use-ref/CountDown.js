import { useEffect, useRef, useState } from "react";

function CountDown(props) {
	const [counter, setCounter] = useState(10);

	const timerId = useRef(); // Store value is created during previous invocations 

	const prevCounter = useRef(); // Store previous state

	const h2Ref = useRef(); // useRef: store DOM element

	useEffect(() => {
		prevCounter.current = counter;

		if (counter === 0) {
			clearInterval(timerId.current);
			timerId.current = undefined;
		}
	}, [counter]);

	useEffect(() => {
		console.log('h2 ref: ', h2Ref.current);
	});

	const handleStartCounter = (e) => {
		if (!timerId.current) {
			if (counter === 0) {
				setCounter(10);
			}

			timerId.current = setInterval(() => {
				setCounter(prev => prev - 1);
			}, 1000);
		}
	}

	const handleStopCounter = (e) => {
		clearInterval(timerId.current);
		timerId.current = undefined;

	}

	console.log('Mutate virtual DOM (function component run)', counter, prevCounter.current)

	return (
		<div>
			<h2 ref={h2Ref}>{counter}</h2>
			<button onClick={handleStartCounter}>Start</button>
			<button onClick={handleStopCounter}>Stop</button>
		</div>
	)
}

export default CountDown;

/**
 * 	const timerId = useRef(); // Store value is created during previous invocations 

	const prevCounter = useRef(); // Store previous state

	const h2Ref = useRef(); // useRef: store DOM element
 */