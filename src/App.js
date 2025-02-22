import AppRouter from './AppRouter';
import './styles/App.css'
import Header from './components/Header';

function App() {
  return (
    <div id="app">
        <Header></Header>
        <AppRouter/>
    </div>
  );
}

export default App;
