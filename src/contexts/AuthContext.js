import { createContext, useContext, useEffect, useState } from 'react';
import * as authService from '../api/authApi';
import Spinner from '../components/ui/Spinner';
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken
} from '../utils/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        await getMe();
      } catch (err) {
      } finally {
        setInitialLoading(false);
      }
    };
    if (getAccessToken()) {
      fetch();
    } else {
      setInitialLoading(false);
    }
  }, []);

  const getMe = async () => {
    const res = await authService.getMe();
    setUser(res.data.user);
  };

  const register = async input => {
    const res = await authService.register(input);
    setTimeout(() => setUser(true), 1);
    addAccessToken(res.data.token);
  };

  const login = async input => {
    const res = await authService.login(input);
    setUser(true);
    addAccessToken(res.data.token);
  };

  const logout = () => {
    setUser(null);
    removeAccessToken();
  };

  if (initialLoading) return <Spinner />;
  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, initialLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
