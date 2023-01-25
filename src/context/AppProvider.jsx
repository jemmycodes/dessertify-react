import AppContext from "./AppContext";

function AppProvider(props) {
  const appContext = { data: {} };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
