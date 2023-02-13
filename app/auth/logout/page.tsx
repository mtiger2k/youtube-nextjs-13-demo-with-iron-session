import React from 'react';
import Logout from './Logout';
import { getRequestCookie } from "../../../lib/getRequestCookie";

async function LoginPage() {
  
  const user = await getRequestCookie();

  if (user)
  return (
    <Logout user={user} />
  )
  else return (
    <p>Not logged in, login first</p>
  )
}

export default LoginPage