import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Example icon
import { Textarea } from './textarea';
import { cn } from '@/lib/utils';

const TextareaWithEnterPrompt = ({className, ...props}: any) => {
  const [showIcon, setShowIcon] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setShowIcon(inputValue !== "");
  };

  const handleBlur = () => {
    setShowIcon(false);
  };

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
        setShowIcon(false); // Hide icon when Enter is pressed
    }
    else {
        setShowIcon(inputValue !== "");
    }
    props.onKeyDown(e);
  };

  return (
    <div className="relative">
      <Textarea
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={cn("p-2 border", className)}
        placeholder={props.placeholder}
      />
      {showIcon && (
        <div className="absolute right-2 bottom-2">
            <span className='text-xs text-gray-500'><FaArrowRight/></span>
        </div>
      )}
    </div>
  );
};

export default TextareaWithEnterPrompt;
