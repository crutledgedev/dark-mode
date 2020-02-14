import { useState } from 'react';

export const useLocalStorage = (key, initialState = '') => {
  const [storedValue, setStoredValue] = useState(() => {
    if (JSON.parse(window.localStorage.getItem(key))) {
      return JSON.parse(window.localStorage.getItem(key));
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialState));
      return initialState;
    }
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
//old broken code below - new code from guided project reference above

// import {useState} from 'react'

// export const useLocalStorage = (key, initialValue) => {

//     // window.localStorage.setItem(key, initialValue)

//     const [storedValue, setStoredValue] = useState(() => {
//         const item = window.localStorage.getItem(key);
//         console.log("item", item)
//         return item ? JSON.parse(item) : initialValue;
//       });


//     const setValue = value => {
//         setStoredValue(value);
//         window.localStorage.setItem(key, JSON.stringify(value))
//     };

//     return [storedValue, setValue]

// };