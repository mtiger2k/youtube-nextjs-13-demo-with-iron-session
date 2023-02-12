'use client'

import { useRouter } from 'next/navigation';
import { userAgent } from 'next/server';
import React from 'react';

function Logout({user}: any) {
  const router = useRouter();

  const logout = async () => {

    try {

        const response = await fetch('/api/logout', {
            method: 'GET', 
            credentials: 'same-origin', 
        });
        console.log(response)

        if(response.status === 200)  router.push('/')

    } catch (e) {
        alert(e)
    }

  }

  return (
    <>
      <p>email: {user.email}</p>
      <button onClick={logout} className='mx-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg'>Logout</button>
    </>
  )
}

export default Logout