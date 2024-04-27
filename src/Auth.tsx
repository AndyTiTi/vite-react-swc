import useAuth from "./hooks/useAuth";


// 使用自定义Hook的组件
const AuthStatus = () => {
  const isAuthenticated = useAuth();
  return <div>{isAuthenticated ? 'You are authenticated.' : 'You are not authenticated.'}</div>;
};

export default AuthStatus;