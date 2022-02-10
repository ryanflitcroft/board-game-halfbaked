import { useState, useEffect } from 'react';
import { getUser } from './services/fetch-utils';
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route,
  Redirect,
} from 'react-router-dom';
import AuthPage from './AuthPage';
import DetailPage from './DetailPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';

import './App.css';
import { logout } from './services/fetch-utils';

export default function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    const user = getUser();
    setUser(user);
  }, []);

  async function handleLogout() {
    logout();
    setUser('');
  }

  return (
    <Router>
      <div className='App'>
        <header>
          {
            user &&
            <>
              <button onClick={handleLogout}>Logout</button>
              <NavLink to='/board-games'>Games List</NavLink>
              <NavLink to='/create'>Create Game</NavLink>
            </>
          }

        </header>
        <main>
          <Switch>
            <Route exact path="/">
              {
                user 
                  ? <ListPage /> 
                  : <AuthPage setUser={setUser} />
              }
            </Route>
            <Route exact path="/board-games">
              {
                user 
                  ? <ListPage /> 
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path="/board-games/:id">
              {
                user 
                  ? <DetailPage /> 
                  : <Redirect to='/' />
              }
            </Route>
            <Route exact path="/create">
              {
                user
                  ? <CreatePage />
                  : <Redirect to='/' />
              }
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}