import './main.scss';
import 'aos/dist/aos.css';
import Header from '../Layout/Header.jsx';
import SectionAdmition from '../Pages/SectionAdmition';
import SectionInfoFirst from '../Pages/SectionInfoFirst';
import SectionInfoSecond from '../Pages/SectionInfoSecond';
import SectionAdvetages from '../Pages/SectionAdvetages';
import Footer from '../Layout/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <SectionAdmition />
      <SectionInfoFirst />
      <SectionInfoSecond />
      <SectionAdvetages />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
