import { useState, useEffect } from 'react';

type UseAuth = () => boolean;

const useAuth: UseAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // 假设从某个API获取认证状态
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};

export default useAuth;