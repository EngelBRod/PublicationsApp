import React from 'react';
import { Provider } from 'react-redux';
import ConfigureStore from './redux/configureStore';
import Main from './components/main';

function App() {
  const store = ConfigureStore;
  return (
    <Provider store={store()}>
      <Main />
    </Provider>
  );
}

export default App;
