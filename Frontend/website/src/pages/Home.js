import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logoImage from './synthailogo.png'; //import company logo

//homepage that has the synthai logo as well as a button to our pre screening feature
const Home = () => {
    return (
        <div className="bg-gray-100 text-black min-h-screen flex flex-col items-center justify-center">
            <header className="w-full text-center py-4">
                <h1 className="text-4xl font-bold animate-bounce">SynthAI Consulting</h1>
                <img src={logoImage} alt="synthailogo" className="mx-auto mt-4" />
            </header>
            <main className="flex flex-col items-center justify-center flex-1">
                <section className="px-4 py-2 text-center">
                </section>
                <section className="newest-feature mt-8 px-6 py-4 border-t border-gray-300 w-full text-center">
                    <h4 className="text-xl font-bold">Our Newest Feature</h4>
                    <p className="mt-2">Here is our newest lung cancer pre-screening feature that allows all potential patients and health care providers to input symptoms, habits, and personal information to detect lung cancer at its earliest stages.</p>
                    <Link 
                        to="/prescreen"
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform hover:scale-110 transition duration-300 inline-block"
                    >
                        Explore Our Feature
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default Home;
