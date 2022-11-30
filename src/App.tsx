import './App.css';
import { Battleground } from './pages/battleground/battleground';
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Battleground />
    </Provider>
  );
}

export default App;
