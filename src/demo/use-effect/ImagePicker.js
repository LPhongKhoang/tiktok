import React, { useEffect, useState } from 'react';


function ImagePicker(props) {
	const [avatar, setAvatar] = useState();

	useEffect(() => {
		// clean up func
		return () => {
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

	return (
		<div>
			<input type='file' onChange={handleImageChange}  />
			{avatar && <img src={avatar.preview} alt='my img' width='60%' /> }
		</div>
	)
}

export default ImagePicker;