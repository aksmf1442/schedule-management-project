import { atom } from 'recoil';

const sideBarState = atom({
	key: 'sideBarState',
	default: true,
});

export default sideBarState;
