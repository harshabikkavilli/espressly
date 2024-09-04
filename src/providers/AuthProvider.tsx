'use client';

import { Hub } from 'aws-amplify/utils';
import React, { useContext, createContext } from 'react';
import { getCurrentUser, fetchAuthSession, fetchUserAttributes } from 'aws-amplify/auth';

type AuthData = {
  isAuthenticated: boolean;
  userLoading: boolean;
  userFullName?: string;
  username?: string;
  picture?: string;
  idToken?: string;
};

type AuthContextType = {
  authData: AuthData;
  setAuthData: (value: AuthData) => void;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

type Props = {
  children?: React.ReactNode;
};

const AuthListener = async (data: any, setAuthData: (value: AuthData) => void) => {
  switch (data.payload.event) {
    case 'signOut':
      setAuthData({
        isAuthenticated: false,
        userLoading: false,
        userFullName: '',
        username: '',
        picture: '',
        idToken: '',
      });
      break;
    case 'signIn_failure':
      console.log('user sign in failed');
			break;
		default:
			break;
  }
};

export const AuthProvider = ({ children }: Props) => {
  const [authData, setAuthData] = React.useState<AuthData>({
    isAuthenticated: false,
    userLoading: true,
    userFullName: '',
    username: '',
    idToken: '',
  });

  const getCurrentUserData = async (): Promise<void> => {
    try {
      const currentUser = await getCurrentUser();
      const attributes = await fetchUserAttributes();
      const signInSessionData = await fetchAuthSession();
      console.log('currentUser --- ', currentUser);

      setAuthData({
        isAuthenticated: true,
        userLoading: false,
        userFullName: attributes.name,
        username: currentUser.username,
        picture: attributes.picture,
        idToken: signInSessionData.tokens?.idToken?.toString(),
      });
    } catch (error) {
      setAuthData({
        isAuthenticated: false,
        userLoading: false,
        userFullName: '',
        username: '',
        picture: '',
        idToken: '',
      });
    }
  };

  React.useEffect(() => {
    Hub.listen('auth', (data) => AuthListener(data, setAuthData));
    getCurrentUserData();
  }, []);

	const value = React.useMemo(() => ({ authData, setAuthData }), [authData]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
