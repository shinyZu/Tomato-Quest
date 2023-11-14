// import './App.css';
import React, {useState,useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Game from './pages/Game/Game';
import Home from './pages/Home/Home';
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Login from './pages/Login/Login';
import Register from "./pages/Register/Register";
import NotFound from "./pages/Session/NotFound";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const player = localStorage.getItem("loggedPlayer");
        if (player) {
          return true;
        }  else {
            return false;
        }
      });

    useEffect(() => {
        if (isLoggedIn) {
            handleLogin(isLoggedIn);
        } else {
            handleLogin(isLoggedIn);
        }
    }, [isLoggedIn]);

    const handleLogin = (isLogged) => {
        console.log("isLogged : ", isLogged)
        setIsLoggedIn(isLogged);
    }

    return (
        < Router >
            < Routes >
                < Route
                    exact
                    path = "/"
                    element = { < Login />}
                />
                < Route
                    exact
                    path = "/register"
                    element = { < Register />}
                />
                < Route
                    exact
                    path = "/home"
                    element={isLoggedIn ? (< Home handleLogin={handleLogin} />) : (< Login />)}
                />
                < Route
                    path = "/game"
                    element = {isLoggedIn ? < Game handleLogin={handleLogin} /> : (<Login />)}
                />
                < Route
                    path = "/leaderboard"
                    element = {isLoggedIn ? < Leaderboard handleLogin={handleLogin} /> : (<Login />)}
                />

                <Route path="*" element={<NotFound />} />

            </ Routes>
        </ Router>
    );

}

export default App;
