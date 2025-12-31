import React from 'react'
import {useUser} from "../hooks/useUser.js"
const Home = () => {
  const { user, loading, error } = useUser();
  console.log(user)
  return (
    <div className='text-4xl'>
      {user && (
      <div className="">
        {user.email}
      </div>
    )}
    </div>
    
  )
}

export default Home