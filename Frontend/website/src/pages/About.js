import React from 'react';


function About() {
    return (
        <div className='content-page'>
            <h1 class=' mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'> About Us - <span class="text-blue-500">QEC Group #</span> </h1>
            <p className='c-para'> 
                <span class = "font-bold underline lg:text-2xl">Team Members: </span><br /> 
                Luke Hunker<br />  
                Avedis Boudakian <br /> 
                Daniell Pan <br /> 
                Nikola Zupancic
            </p>

            
        </div>
    );
}

export default About;
