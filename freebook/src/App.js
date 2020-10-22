import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app_body">
                <Feed />
            </div>
        </div>
    );
}

export default App;
