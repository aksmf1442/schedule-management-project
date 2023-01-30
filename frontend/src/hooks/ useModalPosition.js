import { useState } from 'react';

import useToggle from './useToggle';

function useModalPosition() {
	const [modalPos, setModalPos] = useState();

	const { isOpen: isModalOpen, toggleClick: toggleModalOpen } = useToggle();

	const handleClickOpen = e => {
		setModalPos(calculateModalPos(e.clientX, e.clientY));
		toggleModalOpen();
	};

	const calculateModalPos = (clickX, clickY) => {
		const position = { top: clickY, right: 0, bottom: 0, left: clickX };

		return position;
	};

	return { isModalOpen, toggleModalOpen, handleClickOpen, modalPos };
}

export default useModalPosition;
