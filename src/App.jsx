/* import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import './styles/styles.css';
import useUser from './hooks/useUser/useUser.js'; 
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

const App = () => {
    const { isLoggedIn } = useUser();

    useEffect(() => {
        console.log('Effect triggered. isLoggedIn:', isLoggedIn);
        if (isLoggedIn) {
            localStorage.setItem('isLoggedIn', 'true');
        } else {
            localStorage.removeItem('isLoggedIn');
        }
    }, [isLoggedIn]);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} /> 
            </Routes>
        </Router>
    );
};

export default App;
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import './App.css';
import './styles/styles.css';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import useToken from './hooks/useToken/useToken.js';

const App = () => {
    const { token, setToken, removeToken } = useToken();
    
   console.log("TOKEN ", token)

    return (
        <Router>
            <Routes>
            <Route path="/login" element={<LoginPage setToken={setToken} />} />
                <Route path="/" element={token ? <HomePage /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
