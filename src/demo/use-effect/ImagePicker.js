import React, { useEffect, useState } from 'react';


function ImagePicker(props) {
	const [avatar, setAvatar] = useState();

	useEffect(() => {
		/**
		* - First time: 
		* 	UI is render -> Cb is invoked 
		* - Next: 
		* 	State change -> Mutate virtual DOM -> UI is re-render 
				-> Dependencies change 
				-> cleanup func is invoked (used previous state) 
				-> Cb is invoked (used latest state)
		* - Final:
		* 	Component is unmounted -> cleanup func is invoked (used current state)
		 */
		console.log('Cb func - Avatar: ', avatar?.preview);

		// clean up func
		return () => {
			console.log('cleanup func - Avatar: ', avatar?.preview);
			avatar && URL.revokeObjectURL(avatar.preview);
		}
	}, [avatar]);

	/**
	 * 
	 * @param {React.ChangeEvent<HTMLInputElement} e 
	 */
	const handleImageChange = (e) => {
		const file = e.target.files[0];

		const newPreviewUrl = URL.createObjectURL(file);

		setAvatar({preview: newPreviewUrl});
	}

	console.log('Function render - Avatar: ', avatar?.preview);

	return (
		<div>
			<input type='file' onChange={handleImageChange}  />
			{avatar && <img src={avatar.preview} alt='my img' width='60%' /> }
		</div>
	)
}

export default ImagePicker;