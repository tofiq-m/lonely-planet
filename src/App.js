import './styles.css';
import Part1 from './Part1/Part1.js';
import Part2 from './Part2/Part2.js';
import Part3 from './Part3/Part3.js';
import MyData from './Cards/MyData.js'
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
        <Part1 />
        <Part2 />
        <MyData />
        <Part3 />
        <Footer />
    </div>
  );
}

export default App;