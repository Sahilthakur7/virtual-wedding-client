import React from 'react';
import { Button } from '@material-ui/core';

const Register = () => {
  const slackOauthURL = `https://slack.com/oauth/authorize?scope=channels:read,channels:write,chat:write:bot,bot,users:read,files:write:user&client_id=${process.env.REACT_APP_SLACK_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SLACK_REDIRECT}`

  return (
    <div>
      <Button variant="contained" color="primary" href={slackOauthURL}>Register with slack</Button>
    </div>
  )
}

export default Register;