import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

function LoadingContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider
      value={{
        loading,
        startLoading: () => setLoading(true),
        stopLoading: () => setLoading(false)
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => {
  return useContext(LoadingContext);
};

export default LoadingContextProvider;
