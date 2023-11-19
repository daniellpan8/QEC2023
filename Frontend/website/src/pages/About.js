import React from 'react';


function About() {
    return (
        <div className='content-page'>
            <h1 class='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'> About <span class=" text-blue-600 underline underline-offset-3 decoration-8 decoration-bg-blue-500 dark:decoration-bg-blue-500">SythnAI</span></h1>
            <p className='c-para'>SynthAI is a engineering consulting firm specializing in developing predictive AI models for companies in various high impact sectors.
            We develop highly effective and accurate Machine Learning models that predict and detect issues before they have the chance to grow.</p>
            <h2 class= 'text-4xl font-bold dark:text-white'>Our Mission</h2>
            <p className = 'c-para'>
                SynthAI Consulting's mission is to implement Machine Learning and Artificial Intelligence models that can predict and prevent issues
                that impact our world on a daily basis. SynthAI has previously built models related to sports, stock performance, and business revenue,
                but is now trnasitioning into the healthcare markets.    
            </p>
            <h2 class= 'text-4xl font-bold dark:text-white'>Our Founders</h2>
            <p className = 'c-para'>
                Avedis Boudakian <br />
                Nikola Zupancic <br />
                Daniell Pan <br />
                Luke Hunker <br />
            </p>            
        </div>
    );
}

export default About;
