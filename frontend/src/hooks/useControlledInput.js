import { useEffect, useState } from 'react';

function useControlledInput(initialInputValue) {
	const [inputValue, setInputValue] = useState(initialInputValue ?? '');

	const onChangeValue = ({ target }) => {
		if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) {
			setInputValue(target.value);
		}
	};

	useEffect(() => {
		setInputValue(initialInputValue ?? '');
	}, [initialInputValue]);

	return { inputValue, setInputValue, onChangeValue };
}

export default useControlledInput;
