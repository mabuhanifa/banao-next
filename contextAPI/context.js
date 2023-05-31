const { createContext, useContext, useState } = require("react");

const Context = createContext();

const Provider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  return (
    <Context.Provider value={{ login, setLogin, signup, setSignup }}>
      {children}
    </Context.Provider>
  );
};

export const useModal = () => {
  return useContext(Context);
};

export default Provider;
