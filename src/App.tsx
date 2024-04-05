import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

import { ColorControl } from './components/ColorControl/ColorControl';
import { Article } from './components/Article/Article';

import './App.css';

type Colors = {
  [key: string]: string;
};

const initialValue: Colors = {
  red: '0',
  green: '0',
  blue: '0',
  opacity: '1000',
};

const App = () => {
  const [textColor, setTextColor] = useState<Colors>(initialValue);
  const [bgColor, setBgColor] = useState<Colors>(initialValue);

  const handleTextColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextColor((prev) => {
      prev[event.target.id] = event.target.value;
      return { ...prev };
    });
  };

  const handleBgColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBgColor((prev) => {
      prev[event.target.id] = event.target.value;
      return { ...prev };
    });
  };

  return (
    <div className="App">
      <ColorControl
        assignments="Changer text color"
        red={textColor.red}
        green={textColor.green}
        blue={textColor.blue}
        opacity={textColor.opacity}
        onChange={handleTextColorChange}
      />
      <ColorControl
        assignments="Changer background color"
        red={bgColor.red}
        green={bgColor.green}
        blue={bgColor.blue}
        opacity={bgColor.opacity}
        onChange={handleBgColorChange}
      />

      <Article
        textColor={`rgba(${textColor.red}, ${textColor.green}, ${textColor.blue}, ${
          Number(textColor.opacity) / 1000
        })`}
        bgColor={`rgba(${bgColor.red}, ${bgColor.green}, ${bgColor.blue}, ${
          Number(bgColor.opacity) / 1000
        })`}
      />
    </div>
  );
};

export { App };
