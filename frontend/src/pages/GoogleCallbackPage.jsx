import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { TOKEN } from '../constants/login';
import userState from '../recoil/userState';

function GoogleCallbackPage() {
	const navigate = useNavigate();
	const setUserState = useSetRecoilState(userState);

	const { search } = useLocation();
	const code = new URLSearchParams(search).get('code');

	useEffect(() => {
		const accessToken = 'token';
		window.localStorage.setItem(TOKEN.ACCESS_TOKEN, accessToken);
		//todo: 나중에 변경해야함.
		setUserState(prev => !prev);
		navigate('/');
	}, []);

	return null;
}

export default GoogleCallbackPage;
