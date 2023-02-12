
import React from 'react';
import { getRequestCookie } from "../../../lib/getRequestCookie";
import Login from './Login';
import Logout from './Logout';

async function LoginPage() {
  const user = await getRequestCookie();

  return (
    <>
    
    {!user && <Login />}
    {user && <Logout user={user} />}

    </>
  )
}

export default LoginPage