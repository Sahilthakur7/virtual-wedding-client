import axios from 'axios';

import { createUserObj } from '../interfaces/createUserObj';

const signupOrLoginUser = async (userObj: createUserObj) => {
  const userResponse = await axios.post(
    `${process.env.REACT_APP_API_SERVER}/api/users`,
    {
      userObj,
    }
  );
};

export { signupOrLoginUser };
