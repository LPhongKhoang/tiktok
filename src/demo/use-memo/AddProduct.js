import { useState, useMemo, useRef } from "react"

function AddProduct(props) {
	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState('');

	const [products, setProducts] = useState([]);

	const inputNameRef = useRef();

	const handleAddProduct = () => {
		setProducts([...products, {
			name: productName,
			price: +productPrice
		}]);

		setProductName('');
		setProductPrice('');
		inputNameRef.current.focus();
	}

	// ---- Wasted calculation
	// const totalPrice = products.reduce((sum, item) => {
	// 	console.log('Calculating total price...');
	// 	return sum + item.price
	// }, 0);

	
	const totalPrice = useMemo(() => {
		console.log('useMemo cb run')
		return products.reduce((sum, item) => {
				console.log('Calculating total price...');
				return sum + item.price
			}, 0);
	}, [products]);

	console.log('AddProduct component run');

	return (
		<div>
			<input 
				ref={inputNameRef}
				value={productName} 
				placeholder='Enter product name...' 
				onChange={(e) => setProductName(e.target.value)}
			/>
			<br/>
			<input 
				value={productPrice} 
				placeholder='Enter product price...' 
				onChange={(e) => setProductPrice(e.target.value)}
			/>
			<br/>
			<button onClick={handleAddProduct}>Add new product</button>
			<br/>
			<h3>Total price:  {totalPrice}</h3>

			<div style={{marginTop: '20px'}}>
				<ul>
				{
					products.map((item, idx) => (
						<li key={idx}>
							{item.name}: {item.price}
						</li>
					))
				}
				</ul>
			</div>
		</div>
	)
}

export default AddProduct;