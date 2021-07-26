import { useState } from 'react';

export const Search = ({ cb = Function.prototype }) => {
  const [value, setValue] = useState('');

  const handleKey = e => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    cb(value);
  };
  return (
    <div style={{ width: '100%' }} className='row'>
      <div className='input-field col s12'>
        <input type='search' id='search-field' placeholder='Search' onKeyDown={handleKey} onChange={e => setValue(e.target.value)} value={value} />
        <button
          className='btn'
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
};
