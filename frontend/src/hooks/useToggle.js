import { useState } from 'react';

function useToggle() {
	const [isOpen, setIsOpen] = useState(true);

	const toggleClick = () => {
		setIsOpen(prev => !prev);
	};

	return { isOpen, toggleClick };
}

export default useToggle;
