"use client";

import { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
type FuncType = <T>(val: T) => any;
type updateValue<K> = K extends Function ? FuncType : K;

const useLocalStorage = <T>(key: string, value?: T) => {
  const [storageVal, setStorageVal] = useState(() => {
    try {
      const val = localStorage.getItem(key);
      if (val) {
        return JSON.parse(val);
      } else {
        return value;
      }
    } catch (e) {
      return value;
    }
  });

  const updateLocalStorage = <K>(newValue: updateValue<K>): void => {
    if (newValue instanceof Function) {
      let fn: Function;
      fn = newValue;
      setStorageVal(fn(storageVal));
    } else {
      const val = newValue as K;
      setStorageVal(val);
    }
  };

  const clearStorage = () => {
    localStorage.removeItem(key);
  };

  useEffect(() => {
    const rawValue = JSON.stringify(storageVal);
    localStorage.setItem(key, rawValue);
  }, [key, storageVal]);

  return { storage: storageVal, setStorage: updateLocalStorage, clearStorage };
};

export default useLocalStorage;
