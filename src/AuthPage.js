import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage(props) {
  // you'll need to track the form state of the email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
      
    // sign the user in using the form state
    const user = await signIn(email, password);
    props.setUser(user);
    console.log('||user: ', user);
    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
    
  }
    
  async function handleSignUp(e) {
    e.preventDefault(e);
    // sign the user up using the form state
    const user = await signUp(email, password);
    props.setUser(user);
    console.log('||user: ', user);

    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
  }

  return (
    <div className='auth'>
      <h1><em>Boardzo</em></h1>
      {/* on submit, sign the user in using the function defined above */}
      <form onSubmit={handleSignIn}>
        <label>
            Email
          {/* on change, update the form state for email */}
          <input onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email" 
            name="email"
            required /> 
        </label>
        <label>
            Password
          {/* on change, update the form state for password */}
          <input onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password" 
            name="password" 
            required />
        </label>
        {/* on clicking sign up, sign the user up using the function defined above */}
        <button>Sign In</button>
        <button type='button' onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}
