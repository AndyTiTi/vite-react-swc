import { useEffect } from 'react';

type UseLogging = () => void;

// 这个自定义Hook会在使用它的组件渲染时打印日志信息。
const useLogging: UseLogging = () => {
  useEffect(() => {
    console.log('Component using useLogging is rendering');
  }, []);
};

export default useLogging;