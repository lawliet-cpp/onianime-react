import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchScreen from "./screens/WatchScreen";
import SearchScreen from "./screens/SearchScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Navbar />
        
          
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/details/:id" element={<DetailsScreen />} />
            <Route path="/watch/:name/:episode" element={<WatchScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
          </Routes>
       
      </BrowserRouter>
    );
  }
}

export default App;
