import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
      
    const user = await signIn(email, password);
    props.setUser(user); 
  }
    
  async function handleSignUp() {
    const user = await signUp(email, password);
    props.setUser(user);
  }

  return (
    <div className='auth'>
      <h1><em>Boardzo</em></h1>
      <form onSubmit={handleSignIn}>
        <label>
            Email
          <input onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email" 
            name="email"
            required /> 
        </label>
        <label>
            Password
          <input onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password" 
            name="password" 
            required />
        </label>
        <button>Sign In</button>
        <button type='button' onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}