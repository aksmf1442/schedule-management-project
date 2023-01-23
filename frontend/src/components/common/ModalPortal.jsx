import ReactDOM from 'react-dom';

import styled from 'styled-components';

const ModalPortalContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	position: relative;
	top: 0;
	left: 0;
	z-index: 30;

	width: 100%;
	height: 100%;

	background: ${({ isOpen, dimmerBackground, theme }) =>
		dimmerBackground !== undefined
			? dimmerBackground
			: isOpen
			? `${theme.colors.BLACK}bb`
			: 'transparent'};
`;

function ModalPortal({ isOpen, closeModal, children, dimmerBackground }) {
	const modalElement = document.getElementById('modal');

	if (!(modalElement instanceof HTMLElement)) {
		return <></>;
	}

	const handleClickDimmer = e => {
		if (e.target !== e.currentTarget) {
			return;
		}

		closeModal();
	};

	const element = isOpen && (
		<ModalPortalContainer
			isOpen={isOpen}
			dimmerBackground={dimmerBackground}
			onClick={handleClickDimmer}
		>
			{children}
		</ModalPortalContainer>
	);

	return ReactDOM.createPortal(element, modalElement);
}

export default ModalPortal;
