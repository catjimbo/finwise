import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Lessons from "./components/Lessons";
import StockList from "./components/StockList";
import Forum from "./components/Forum";
import Profile from "./components/Profile";



function App() {
    return (
        <Router>
            <div className="App">
            <Header />
                <Routes>
                    <Route path="/lessons" element={<Lessons />} />
                    <Route path="/stocks" element={<StockList />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
