import { atom } from 'recoil';

const searchBarState = atom({
	key: 'searchBarState',
	default: false,
});

export default searchBarState;
