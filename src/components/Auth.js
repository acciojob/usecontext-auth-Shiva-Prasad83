import React, { useContext } from 'react'
import AuthContext from './AuthContext';

function Auth() {
    const {updateStatus,checked}=useContext(AuthContext);
  return (
    <div>
        <p>{checked?"You are now authenticated, you can proceed":"you are not authenticated"}</p>
        <input type='checkbox' onChange={updateStatus}/> <label>I'm not a robot</label>
    </div>
  )
}

export default Auth;