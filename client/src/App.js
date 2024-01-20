import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/header_logic/Header";
import StockList from "./components/stocks_logic/StockList";
import Forum from "./components/Forum";
import Profile from "./components/profile_logic/Profile";
import LessonManager from "./components/lessons_logic/LessonManager";



function App() {
    return (
        <Router>
            <div className="App">
            <Header />
                <Routes>
                    <Route path="/lessons" element={<LessonManager />} />
                    <Route path="/stocks" element={<StockList />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
