import './styles/App.css'
import FallingPixels from './components/FallingPixels';
import Header from './components/Header';
import ContactBar from './components/ContactBar';

import Presentation from './sections/Presentation';
import About from './sections/About';
import Experience from './sections/Experience';
import Education from './sections/Education';

function App() {
  return (
    <div id="app">
        <FallingPixels/>
        <Header></Header>
        <ContactBar/>
        <div className="sections">
          <Presentation/>
          <About/>
          <Experience/>
          <Education/>
        </div>
    </div>
  );
}

export default App;
