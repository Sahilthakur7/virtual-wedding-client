import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import queryString from 'query-string';

import { fetchGoogleUserToken } from '../services/google';

import { GOOGLE_AUTH_URL } from '../constants';
interface urlParams {
  code: string
}

const googleAuthHref = `${GOOGLE_AUTH_URL}?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&scope=openid%20profile&include_granted_scopes=true&response_type=code&redirect_uri=${process.env.REACT_APP_AUTH_REDIRECT}`
const Register = () => {

  useEffect(() => {
    const queryParams = queryString.parse(window.location.search);
    const { code }: { code: string } = queryParams as unknown as urlParams;
    if (code) {
      fetchGoogleUserToken(code);
    }
  }, []);

  return (
    <div>
      <Button variant="contained" color="primary" href={googleAuthHref}>Register with google</Button>
    </div>
  )
}

export default Register;