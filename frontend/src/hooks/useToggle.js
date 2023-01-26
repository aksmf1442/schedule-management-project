import { useState } from 'react';

function useToggle(state) {
	const [isOpen, setIsOpen] = useState(state === undefined ? false : state);

	const toggleClick = () => {
		setIsOpen(prev => !prev);
	};

	return { isOpen, toggleClick };
}

export default useToggle;
