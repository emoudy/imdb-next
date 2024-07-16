'use client';

import React from 'react';
import {MdLightMode, MdDarkMode} from 'react-icons/md';
import { useTheme } from 'next-themes';

const DarkModeSwitch = () => {
  const {theme, setTheme, systemTheme} = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div 
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className='text-xl cursor hover:text-amber-500'
    >
      {currentTheme === 'dark' ? <MdDarkMode /> : <MdLightMode />}
    </div>
  );
};

export default DarkModeSwitch;