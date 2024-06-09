import React, { createContext, useState, useEffect } from 'react';
import keycloak from '../utils/keycloak';

interface AuthContextProps {
  isAuthenticated: boolean;
  keycloak: Keycloak.KeycloakInstance | null;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  keycloak: null,
});

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      setIsAuthenticated(authenticated);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, keycloak }}>
      {children}
    </AuthContext.Provider>
  );
};
