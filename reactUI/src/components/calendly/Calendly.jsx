import React from 'react';
import { PopupWidget } from 'react-calendly';

const Calendly = () => {
  return (
    <PopupWidget
      iframeTitle="Calendly Scheduling Page"
      rootElement={document.getElementById('root')}
      text="Click here to schedule a free visa counseling call!"
      url="https://calendly.com/nepinusa/"
      pageSettings={{
        hideEventTypeDetails: true,
        primaryColor: 'primary.main',
        textColor: '#000000',
        backgroundColor: '#FFFFFF',
      }}
      textColor="#ffffff"
      color="#00a2ff"
    />
  );
};

export default Calendly;
