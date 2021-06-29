import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter';
import Loader from './components/Loader';

const App = () => {

    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 3000);
    }, [loaded]);
    
    if (loaded === false) {
        return (
            <div>
                <Loader />
                <button onClick={() => setLoaded(true)}>Finish loading page</button>
            </div>
        )
    } 
    else {
        return (
            <div>
                <Greeter phrase='Hello there' name='Connor' />
                <Greeter phrase='What up' name='Sir' />
                <Greeter phrase="How's it goin'" name='Chuck' />
                <input value={username} onChange={e => setUsername(e.target.value)} />
                <p>You are logging in as: {username}</p>
            </div>
        )
    }
};

export default App;