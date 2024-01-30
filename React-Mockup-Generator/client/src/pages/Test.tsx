
import React, { useState } from "react";
import { ContentContainer } from "../components/ContentContainer";
import RMGHeader from "../components/RMGHeader";
import RMGText from "../components/RMGText";
import RMGInput from "../components/RMGInput";
import RMGButton from "../components/RMGButton";
import RMGImage from "../components/RMGImage";

const Test = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <ContentContainer>  
      <RMGHeader text="Test Page for Components" />
      <RMGText content="This is a sample text content." />
      <RMGInput placeholder="Type here..." value={inputValue} onChange={setInputValue} />
      <RMGButton title="Click Me" onClick={() => alert('Button clicked!')} />
      <RMGImage src="https://via.placeholder.com/150" alt="Placeholder" />
   </ContentContainer>
    </>
  );
};

export { Test };
