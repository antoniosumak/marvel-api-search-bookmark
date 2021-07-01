import React, { useState, createContext } from 'react';

const BookmarkContext = createContext();

const BookmarkProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <BookmarkContext.Provider value={{ items, setItems }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export { BookmarkContext, BookmarkProvider };
