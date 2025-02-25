import './styles/App.css'
import Header from './components/Header';
import About from './pages/About';
import Experience from './pages/Experience';
import Courses from './pages/Courses';
import ContactBar from './components/ContactBar'

function App() {
  return (
    <div id="app">
        <Header></Header>
        <ContactBar/>
        <div className="pages">
          <About/>
          <Experience/>
          <Courses/>
        </div>
    </div>
  );
}

export default App;
