import AppRouter from './AppRouter';
import './styles/App.css'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header></Header>
        <div className="pages">
          <AppRouter/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
