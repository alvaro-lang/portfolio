import './styles/App.css'
import Header from './components/Header';
import About from './pages/About';
import Experience from './pages/Experience';
import Courses from './pages/Courses';

function App() {
  return (
    <div id="app">
        <Header></Header>
        <div className="pages">
          <About/>
          <Experience/>
          <Courses/>
        </div>
    </div>
  );
}

export default App;
