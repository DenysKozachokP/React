import React, { useState } from 'react';
import Form1 from './FormComp/Form1';
import Form2 from './FormComp/Form2';
import Form3 from './FormComp/Form3';

const App = () => {
  const [formData, setFormData] = useState({});
  const [currentForm, setCurrentForm] = useState(1);

  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const handleFinalSubmit = (data) => {
    const allData = { ...formData, ...data };
    console.log("Final Form Data: ", allData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Multi-Step Form</h1>
      {currentForm === 1 && <Form1 onSubmit={handleNext} />}
      {currentForm === 2 && <Form2 onSubmit={handleNext} />}
      {currentForm === 3 && <Form3 onSubmit={handleFinalSubmit} />}
    </div>
  );
};

export default App;