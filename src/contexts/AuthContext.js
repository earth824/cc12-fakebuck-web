import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import * as authService from '../api/authApi';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async input => {
    const res = await authService.register(input);
    // setUser
  };

  return (
    <AuthContext.Provider value={{ user, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
