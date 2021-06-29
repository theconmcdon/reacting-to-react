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
                <button class='offset-5 col-2 btn btn-primary primary' onClick={() => setLoaded(true)}>Quick Load</button>
            </div>
        )
    } 
    else {
        return (
            <div>
                <div>
                    <Greeter phrase='Hello there' name='Connor' />
                    <Greeter phrase='What up' name='Sir' />
                    <Greeter phrase="How's it goin'" name='Chuck' />
                </div>
                <div class='pt-5'>
                    <div class='row justify-content-md-center'>
                        <input placeholder='Username' class='form-control col-md-3' value={username} onChange={e => setUsername(e.target.value)} />
                        <input placeholder='Log In' type='submit' class='btn btn-primary primary col-1' onClick={() => alert('No internet connection.')} />
                    </div>
                    <p class='offset-4'>You are logging in as: {username}</p>
                </div>
                
            </div>
        )
    }
};

export default App;