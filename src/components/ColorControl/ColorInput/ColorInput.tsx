import React, { FC } from 'react';
import type { ChangeEvent } from 'react';

import { cnColorInput } from './ColorInput.classname';

import './ColorInput.css';

export type ColorInputProps = {
  name: string;
  id: string;
  max: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ColorInput: FC<ColorInputProps> = ({ name, id, max, value, onChange }) => {
  return (
    <div className={cnColorInput()}>
      <input type="range" name={name} id={id} min='0' max={max} value={value} onChange={onChange}/>
      <label htmlFor={id}>{name}</label>
    </div>
  );
};

export { ColorInput };
