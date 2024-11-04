import React from 'react';
import useWindowSize from './useWindowSize';
import './WSC.css'

const WindowSizeComponent = () => {
    const { width, height } = useWindowSize();
  
    return (
      <div className="window-size">
        <h1>Розмір вікна браузера</h1>
        <p>Ширина: {width}px</p>
        <p>Висота: {height}px</p>
      </div>
    );
  };
  
export default WindowSizeComponent;


