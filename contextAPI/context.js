const { createContext, useContext, useState } = require("react");

const Context = createContext();

const Provider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [user, setUser] = useState({});
  return (
    <Context.Provider
      value={{ login, setLogin, signup, setSignup, user, setUser }}
    >
      {children}
    </Context.Provider>
  );
};

export const useModal = () => {
  return useContext(Context);
};

export default Provider;
