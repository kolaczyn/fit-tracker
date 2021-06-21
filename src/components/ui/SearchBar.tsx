import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Input,
  InputRightElement,
  IconButton,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

interface SearchBarProps {
  handleSearch: (inputValue: string) => void;
}

/** It runs `handleSearch` function every 300ms it the values has changed */
export const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [value, setInputValue] = useState('');
  // I'm using ref to get the latest data
  //upmostly.com/tutorials/settimeout-in-react-components-using-hooks
  const valueRef = useRef(value);
  https: valueRef.current = value;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  useEffect(() => {
    let prevValue = valueRef.current;
    const interval = setInterval(() => {
      if (prevValue !== valueRef.current) {
        handleSearch(valueRef.current), 1000;
        prevValue = valueRef.current;
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.500" />}
      />
      <Input
        value={value}
        onChange={handleChange}
        aria-label="Search for food"
        placeholder="Search"
      />
      {value !== '' ? (
        <InputRightElement
          onClick={() => setInputValue('')}
          children={
            <IconButton
              aria-label="Clear input"
              variant="ghost"
              icon={<CloseIcon color="gray.500" />}
            />
          }
        />
      ) : null}
    </InputGroup>
  );
};
