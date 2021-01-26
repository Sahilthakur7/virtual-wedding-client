import axios from 'axios';
import { GOOGLE_TOKEN_URL, GOOGLE_USER_INFO_ENDPOINT } from '../constants';
import { signupOrLoginUser } from '../services/users';

const fetchGoogleUserToken = async (code: string) => {
  try {
    const res = await axios.post(GOOGLE_TOKEN_URL, {
      code,
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.REACT_APP_AUTH_REDIRECT,
      grant_type: 'authorization_code',
    });

    if (res && res.status === 200) {
      const userInfo = await fetchUserInfo(
        res && res.data && res.data.access_token
      );

      const userObj = {
        email: userInfo.data.email,
        name: userInfo.data.name,
        auth: 'google',
      };

      const userResponse = await signupOrLoginUser(userObj);
    }
  } catch (error) {
    console.log('error', error);
  }
};

const fetchUserInfo = async (access_token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${access_token}` },
  };
  const res = await axios.post(`${GOOGLE_USER_INFO_ENDPOINT}`, {}, config);

  return res;
};

export { fetchGoogleUserToken };
