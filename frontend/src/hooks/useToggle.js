import { useState } from 'react';

function useToggle() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleClick = () => {
		setIsOpen(prev => !prev);
	};

	return { isOpen, toggleClick };
}

export default useToggle;
