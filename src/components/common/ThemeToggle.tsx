import { useAtom } from 'jotai';
import React, { ChangeEvent } from 'react';
import { FiSun } from 'react-icons/fi';
import { FiMoon } from 'react-icons/fi';

import Toggle from '@/components/common/Toggle';
import { themeAtom } from '@/states';
import { Theme } from '@/types';

const ThemeToggle = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const isSelected = theme === Theme.Dark;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setTheme(checked ? Theme.Dark : Theme.Light);
  };

  return (
    <Toggle
      size="lg"
      isSelected={isSelected}
      icon={isSelected ? <FiMoon></FiMoon> : <FiSun></FiSun>}
      onChange={handleChange}
    ></Toggle>
  );
};

export default ThemeToggle;
