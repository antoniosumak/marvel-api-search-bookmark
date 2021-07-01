import React from 'react';

import { SearchbarWrapper, SearchbarInput } from './SearchbarStyles';

const Searchbar = ({ onValueChange, placeholder }) => {
  return (
    <SearchbarWrapper>
      <SearchbarInput
        onChange={(input) => onValueChange(input.target.value)}
        placeholder={placeholder}
      />
    </SearchbarWrapper>
  );
};

export default Searchbar;
