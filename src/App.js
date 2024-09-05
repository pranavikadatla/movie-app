
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import appStore from './utilis/appStore';

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
        <Body/>
      </Provider>
    </div>
  );
}

export default App;
