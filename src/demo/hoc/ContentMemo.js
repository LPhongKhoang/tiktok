import { memo } from 'react';

function ContentMemo({counter, user}) {

	console.log('Mutate virtual DOM - ContentMemo ');

	return (
		<div>
			<h2>Hello {user.name} pro - This is memo component - counter: {counter}</h2>
		</div>
	);
}

export default memo(ContentMemo);

/**
 * The ContentMemo component use in demo/use-state/Counter component
 * 
 * 
 * 1. React.memo --> HOC
 * - remember props of component. Make component render only and only if their props are changed
 * - use logical comparator '===' for comparing 
 * 
 * 
 * 2. useCallback ---> Hook
 * - Return cb function for variable. Create cb functions only dependencies changed
 * - ==> When use useCallback in parent component and pass cb function Ref to child component
 * --> child component must use React.memo (HOC) to make child component avoid re-render. Otherwise, child component still re-render if no props changed
 */