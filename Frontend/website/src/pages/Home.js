import React, { useState, useEffect } from 'react';

const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';


const Home = () => {

    const [number, getting] = useState(0);

    const incNum = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/inc`, {
                method: 'POST',
            });
            const result = await response.json();
            getting(result.value);
        } catch (error) {
            console.log('Fetch error:', error);
        } finally {
        }
    }

    const decNum = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/dec`, {
                method: 'POST',
            });
            const result = await response.json();
            getting(result.value);
        } catch (error) {
            console.log('Fetch error:', error);
        } finally {
        }
    }

    const getNum = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/getnum`, {
                method: 'POST',
            });
            const result = await response.json();
            getting(result.value);
        } catch (error) {
            console.log('Fetch error:', error);
        } finally {
        }
    }

    useEffect(() => {
        getNum();
    }, []);

    return (
        <div className='content-page'>
        <h1>Home</h1>
        <button className='button' onClick={incNum}>Increment</button>
        <button className='button' onClick={decNum}>Decrement</button>
        <h1>{number}</h1>
        <p className='c-para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className='c-para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className='c-para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className='c-para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className='c-para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className='c-para'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        </div>
    );
};

export default Home;

