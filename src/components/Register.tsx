import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import queryString from 'query-string';
import { fetchAccessToken } from '../services/slack';
interface urlParams {
  code: string
}

const Register = () => {
  const slackOauthURL = `https://slack.com/oauth/authorize?scope=identity.basic,identity.email&client_id=${process.env.REACT_APP_SLACK_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SLACK_REDIRECT}`

  useEffect(() => {
    const queryParams = queryString.parse(window.location.search);
    const { code }: { code: string } = queryParams as unknown as urlParams;
    if (code) {
      console.log("here is the code: ->", queryParams.code);
      fetchAccessToken(code);
    }
  }, []);

  return (
    <div>
      <Button variant="contained" color="primary" href={slackOauthURL}>Register with slack</Button>
    </div>
  )
}

export default Register;