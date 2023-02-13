'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

function Logout({user}:any) {
  const router = useRouter();

  const logout = async () => {

    try {

        const response = await fetch('/api/logout', {
            method: 'GET', 
            credentials: 'same-origin', 
        });
        console.log(response)

        if(response.status === 200)  router.push('/auth')

    } catch (e) {
        alert(e)
    }

  }

  return (
    <>
      {user && <p>Email: {user.email}</p>}
      <button type="button" onClick={logout} className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Logout</button>
    </>
  )
}

export default Logout