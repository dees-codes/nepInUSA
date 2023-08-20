import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    //make api call to get userData
    const user = {
      firstName: 'Ashim',
      lastName: 'Gautam',
      id: 1, // falsy value indicates not logged in, values other than falsy indicates loggedin user
      photo: null,
      isAdmin: 1,
      hasFilledApplication: 1,
      appliedUniversityIds: ['1', '2', '3'],
    };
    setUserData(user);
  }, []);
  return <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>;
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
