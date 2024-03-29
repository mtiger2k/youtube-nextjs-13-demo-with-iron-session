import React from 'react';
import Login from './Login';
import { getRequestCookie } from "../../../lib/getRequestCookie";

async function LoginPage() {
  
  const user = await getRequestCookie();

  return (
    <div>
      {/* @ts-ignore */}
      <Login user={user} />
    </div>
  )
}

export default LoginPage