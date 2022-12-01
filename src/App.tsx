import './App.css';
import { Battleground } from './pages';
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Battleground />
    </Provider>
  );
}

export default App;
