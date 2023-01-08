import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Interests from './components/Interests';
import './style.css';

function App() {
  return (
    <div className="App">
      <Info />
      <About/>
      <Interests/>
      <Footer />
    </div>
  );
}

export default App;
