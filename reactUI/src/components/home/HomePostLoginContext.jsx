import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const HomePageContext = createContext();

export const useHomePageContext = () => useContext(HomePageContext);

export const HomePostLoginContextProvider = ({ children }) => {
  const [userUniSelection, setUserUniSelection] = useState([]);
  const [userServiceSelection, setUserServiceSelection] = useState([]);
  return <HomePageContext.Provider value={{ userServiceSelection, userUniSelection, setUserServiceSelection, setUserUniSelection }}>{children}</HomePageContext.Provider>;
};

HomePostLoginContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
