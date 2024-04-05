import React from 'react';

import { cnColorControl } from './ColorControl.classname';
import { ColorInput } from './ColorInput/ColorInput';
import type { ChangeEvent, FC } from 'react';

import './ColorControl.css';

export type ColorControlProps = {
  assignments: string;
  red: string;
  green: string;
  blue: string;
  opacity: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ColorControl: FC<ColorControlProps> = ({ assignments, red, green, blue, opacity, onChange }) => {
  return (
    <div className={cnColorControl()}>
      <p>{assignments}</p>
      <ColorInput name="red" id="red" max="255" value={red} onChange={onChange} />
      <ColorInput name="green" id="green" max="255" value={green} onChange={onChange} />
      <ColorInput name="blue" id="blue" max="255" value={blue} onChange={onChange} />
      <ColorInput name="opacity" id="opacity" max="1000" value={opacity} onChange={onChange} />
    </div>
  );
};

export { ColorControl };
