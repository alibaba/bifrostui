import React, { useState } from 'react';
import { Input } from '../../src/Input';

const InputView = () => {
  const [value, setValue] = useState('');

  const handleChange = (_e, data) => {
    setValue(data?.value);
  };

  return (
    <Input value={value} placeholder="请填写内容" onChange={handleChange} />
  );
};

export { InputView as Input };
