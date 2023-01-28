import { useEffect, useState } from "react";

function WindowResize(props) {
	const [width, setWidth] = useState(window.innerWidth);

	// Add event lister in callback of useEffect run only one time
	// UseEffect clear listener when component unmount
	useEffect(() => {
		const random = Math.random();
		console.log('useEffect', random);
		const handleResizing = () => {
			console.log('resizing version: ', random);
			setWidth(window.innerWidth);
		}
		window.addEventListener('resize', handleResizing);

		// cleanup function
		return () => {
			console.log('clean up', random);
			window.removeEventListener('resize', handleResizing);
		}
	}, []);

	console.log('WindowResize render');
	return (
		<h1>{width}</h1>
	);
}

export default WindowResize;

/**
 * useEffect:
 * -------
 * 1. How to use?
 * - Callback is invoked after component is render or re-render
 * useEffect(callback)
 * 
 * 
 * - Callback is invoked only after component is render --> like componentDidMount()
 * useEffect(callback, [])
 * 
 * - Callback is invoked after component is render and when dependencies is changed
 * useEffect(callback, [dependencies])
 * 
 * - Use this to handle subscribe/unsubscribe
 * useEffect(() => {
 * // add event listener or subscribe
 * 
 * // return removeListener or unsubscribe
 * }, [])
 * 
 * 
 * 2. Always true
 * - Callback is invoked after component is mounted
 * - Cleanup function is invoked before component is unmounted
 * - Cleanup function is invoked before callback is invoked again (from 2nd call)
 * 
 * ==> 
 * - First time: 
 * 	UI is render -> Cb is invoked 
 * - Next: 
 * 	State change -> Mutate virtual DOM -> UI is re-render -> Dependencies change -> cleanup func is invoked (used previous state) -> Cb is invoked
 * - Final:
 * 	Component is unmounted -> cleanup func is invoked (used current state)
 */