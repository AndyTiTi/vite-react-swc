import { useState } from "react";

type UseLocalStorage<T> = [T, (value: T) => void];

// type UseLocalStorage<T> = (
//   key: string,
//   initialValue: T
// ) => [T, (value: T) => void];

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): UseLocalStorage<T> => {
  // 使用正确的类型T来初始化useState
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      // 如果项存在，尝试解析为T类型，否则返回初始值
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      // 在发生错误时，返回初始值
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      // 更新状态和localStorage
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  // 返回一个元组，包含当前值和更新函数
  return [storedValue, setValue];
};

export default useLocalStorage;
