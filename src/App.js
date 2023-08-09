import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';
import Login from './Pages/Login';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"

    });
  };

  return (
    <Router>

      <nav>
        <Link to="/"> Home </Link>

        {!isAuth ? (
          <Link to="/login"> Login </Link>
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}

      </nav>

      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>

    </Router>
  );
}

export default App;
