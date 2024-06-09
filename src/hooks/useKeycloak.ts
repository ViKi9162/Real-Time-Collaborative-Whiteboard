import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useKeycloak = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useKeycloak must be used within an AuthProvider');
  }
  return context;
};

export default useKeycloak;
