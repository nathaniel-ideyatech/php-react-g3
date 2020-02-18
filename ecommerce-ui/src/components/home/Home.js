import React from 'react';
import { useAuth  } from '../../context/auth';


export default function Home() {
  const { setAuthTokens } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}