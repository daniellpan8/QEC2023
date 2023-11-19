import React, { useState } from 'react';

const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const PreScreen = () => {
  // Define the headings based on the image
  const headings = [
    "SMOKING", "YELLOW_FINGERS", "ANXIETY", 
    "PEER_PRESSURE", "CHRONIC_DISEASE", "FATIGUE", "ALLERGY", 
    "WHEEZING", "ALCOHOL_CONSUMING", "COUGHING", "SHORTNESS_OF_BREATH", 
    "SWALLOWING_DIFFICULTY", "CHEST_PAIN", "LUNG_CANCER"
  ];
  
  // Initialize state to store the form data
  const [formData, setFormData] = useState({
    GENDER: '',
    AGE: '',
    ...headings.reduce((acc, heading) => ({ ...acc, [heading]: '' }), {})
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send formData to the server or process it as needed
    console.log(formData);
  };

  // Update state with the user's input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Welcome to SynthAI's Pre-Screening Form</h1>
      <p className="text-md text-center mb-6">Please list either 1 for no or 2 for yes for the following symptoms</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="GENDER" className="text-gray-700">Gender</label>
          <select
            name="GENDER"
            id="GENDER"
            value={formData.GENDER}
            onChange={handleChange}
            className="border-2 rounded px-3 py-2"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="AGE" className="text-gray-700">Age</label>
          <input
            type="number"
            name="AGE"
            id="AGE"
            value={formData.AGE}
            onChange={handleChange}
            className="border-2 rounded px-3 py-2"
            min="0" // Optionally set a minimum value
          />
        </div>
        {headings.map((heading) => (
          <div key={heading} className="flex flex-col">
            <label htmlFor={heading} className="text-gray-700">
              {heading.replace(/_/g, ' ')}
            </label>
            <select
              name={heading}
              id={heading}
              value={formData[heading]}
              onChange={handleChange}
              className="border-2 rounded px-3 py-2"
            >
              <option value="">Select Option</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        ))}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PreScreen;
