import ReactDOM from 'react-dom';

import styled from 'styled-components';

const Container = styled.div`
	${({ theme }) => theme.flex.row}

	position: fixed;
	top: 0;
	left: 0;
	z-index: 30;

	width: 100%;
	height: 100%;

	background: ${({ theme, dimmerBackground, isOpen }) =>
		dimmerBackground !== undefined
			? dimmerBackground
			: isOpen
			? `${theme.colors.BLACK}bb`
			: theme.TRANSPARENT};
`;

function ModalPortal({ isOpen, closeModal, dimmerBackground, children }) {
	const modalElement = document.getElementById('modal');

	const handleClickDimmer = e => {
		if (e.target !== e.currentTarget) {
			return;
		}

		closeModal();
	};

	const element = isOpen && (
		<Container isOpen={isOpen} onClick={handleClickDimmer} dimmerBackground={dimmerBackground}>
			{children}
		</Container>
	);

	return ReactDOM.createPortal(element, modalElement);
}

export default ModalPortal;
