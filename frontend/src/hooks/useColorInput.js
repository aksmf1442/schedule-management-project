import { useState } from 'react';

function useColorInput() {
	const [value, setValue] = useState('');

	const handleButtonClick = color => {
		setValue(color);
	};

	return { value, setValue, handleButtonClick };
}

export default useColorInput;
