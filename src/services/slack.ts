import axios from "axios";

interface configObj {
  method: string;
  url: string;
  body: {};
}

const fetchAccessToken = async (code: string) => {
  const url = "https://slack.com/api/oauth.access";

  const response = await axios.get(url, {
    params: {
      client_id: process.env.REACT_APP_SLACK_CLIENT_ID,
      client_secret: process.env.REACT_APP_SLACK_SECRET,
      code,
      redirect_uri: process.env.REACT_APP_SLACK_REDIRECT,
    },
  });

  console.log("response----", response);
};

export { fetchAccessToken };
