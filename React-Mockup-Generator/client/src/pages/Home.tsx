import React, { useState } from 'react';
import axios from 'axios';
import RMGHeader from '../components/RMGHeader';
import RMGInput from '../components/RMGInput';
import RMGButton from '../components/RMGButton';
import { ContentContainer } from '../components/ContentContainer';

const AIMockupGeneratorPage: React.FC = () => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = async () => {
    // Replace with the actual server endpoint
    const serverEndpoint = 'http://lochalhost:3000/generate-mockup';

    try {
      const response = await axios.post(serverEndpoint, { description: inputText });
      // Handle the server response here
      console.log(response.data);
    } catch (error) {
      // Handle any errors here
      console.error('There was an error sending the text to the server:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <RMGHeader text="AI Mockup Generator" />
      <div className="my-4">
        <RMGInput value={inputText} onChange={setInputText} placeholder="Type here..." />
      </div>
      <RMGButton title="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default AIMockupGeneratorPage;
