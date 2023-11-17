import React, { useState, useEffect } from 'react';

const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const Home = () => {
    const [number, setNumber] = useState(0);

    const fetchData = async (action) => {
        try {
            const response = await fetch(`${apiBaseUrl}/${action}`, {
                method: 'POST',
            });
            const result = await response.json();
            setNumber(result.value);
        } catch (error) {
            console.log('Fetch error:', error);
        }
    }

    useEffect(() => {
        fetchData('getnum');
    }, []);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4 animate-bounce">QEC WEBSITE!</h1>
            <div className="flex space-x-4 mb-4">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => fetchData('inc')}
                >
                    Increment
                </button>
                <button 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => fetchData('dec')}
                >
                    Decrement
                </button>
            </div>
            <h2 className="text-2xl mb-4">{number}</h2>
            <div className="px-4 py-2 text-center">
                {/* Your paragraphs with class 'c-para' here */}
            </div>
        </div>
    );
};

export default Home;
