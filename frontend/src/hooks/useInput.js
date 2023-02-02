import { useState } from 'react';

function useInput(initialInputValue) {
	const [inputValue, setInputValue] = useState(initialInputValue ?? '');

	const onChangeValue = ({ target }) => {
		setInputValue(target.value);
	};

	return { inputValue, setInputValue, onChangeValue };
}

export default useInput;
