'use client'

import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';

import { postData } from '../../../lib/request';

function Login() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [loading, setLoading] = useState('')
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsername(''); 
    setPassword('');
    setLoading("login...")
    if(username && password) {
        postData('/api/login', {email: username, password}).then(data => {
  
          if (data.status === "success") {
            router.push('/')  
          } else {
            alert("error")
            setLoading("Login failed")
          }
          setLoading("Login Successful Redirecting")
        }, err => {
          alert(err)
          setLoading("Login failed")
        });
      }
  }

  return (
    <>
    <form onSubmit={handleLogin}>
      <input type="text" value={username} placeholder="Enter the username" onChange={(e) => setUsername(e.target.value)} />
      <input type="text" value={password} placeholder="Enter the password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg'>
        Login
      </button>
    </form>
    
    <p>
      status: {loading} 
    </p>
    

    </>
  )
}

export default Login