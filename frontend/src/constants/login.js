const GOOGLE_LOGIN_URI = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_LOGIN_REDIRECT_URL}&scope=profile&response_type=code`;

const TOKEN = {
	ACCESS_TOKEN: 'accessToken',
};

export { GOOGLE_LOGIN_URI, TOKEN };
