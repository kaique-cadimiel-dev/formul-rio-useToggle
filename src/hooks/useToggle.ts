import { useState } from 'react';

function useToggle() {
  const [value, setValue] = useState(false);
  function handlerValue() {
    setValue(value === false ? true : false);
  }
  return {
    value: value,
    toggleValue: handlerValue,
  };
}

export default useToggle;
