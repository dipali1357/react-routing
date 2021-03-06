import React from 'react';
//provider to provide store to component
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import IceCreamContainer from './components/IceCreamContainer';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import NewIceCreamContainer from './components/NewIceCreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/*<ItemContainer cake/>
        <ItemContainer />
        <HooksCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
        <NewIceCreamContainer/>
        */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
