import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => { // this effect runs once, when the component is mounted & this section is for when the user is navigating back and forth in the browser
    const handler = () => {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return <NavigationContext.Provider value={{ currentPath, navigate }}>
    {children}
  </NavigationContext.Provider>
};

export { NavigationProvider };
export default NavigationContext;