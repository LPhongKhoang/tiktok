import { useEffect, useLayoutEffect, useState } from "react";


function ReCount(props) {

	const [counter, setCounter] = useState(0);

	useLayoutEffect(() => {
		console.log('Cb layout effect - counter', counter);

		if(counter > 3) {
			setCounter(0);
		}
	}, [counter]);

	/**
	 * 
	 * @param {React.ChangeEvent<HTMLButtonElement} e 
	 */
	const handleReCount1 = (e) => {
		setCounter((prev) => {
			return prev + 1;
		});
	}

	/**
	 * 
	 * @param {React.ChangeEvent<HTMLButtonElement} e 
	 */
	const handleReCount2 = (e) => {
		if(counter === 3) {
			setCounter(0);
		}else {
			setCounter((prev) => {
				return prev + 1;
			})
		}
	}

	console.log('Mutate virtual DOM - counter', counter);
	return (
		<div>
			<h2>{counter}</h2>
			<button onClick={handleReCount1}>Run</button>
		</div>
	)
}

export default ReCount;

/**
 * 1. useEffect
 * - State change
 * - Mutate virtual DOM
 * - Render UI (component)
 * - Run cleanup func
 * - Run cb func
 * 
 * 2. useLayoutEffect
 * - State change
 * - Mutate virtual DOM
 * - Run cleanup func
 * - Run cb func
 * - Render UI (component)
 * 
 * ==> if use useEffect or useLayoutEffect --> logs are same. But the only difference is actually render UI task
 */