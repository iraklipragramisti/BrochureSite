import './App.scss';
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import FAQ from './components/FAQ'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Element} from "react-scroll";
import ScrollToTop from "react-scroll-to-top"
import Footer from './components/Footer'
import CopyrightAndLinks from './components/CopyrightAndLinks'


function App() {
  return (
      <div className="app">
        <ScrollToTop smooth color='white' style={{ background: 'rgb(11, 79, 88)' }} />
        <div className="header-with-image">
          <Header />
          <div className='back-pic' />
        </div>
        <div className="invis-image" />
        <Element name="home">
        <Home />
        </Element>
        <Element name="services">
        <Services />
        </Element>
        <Element name="about">
        <About />
        </Element>
        <Element name="faq">
        <FAQ />
        </Element>
        <Footer />
        <CopyrightAndLinks />
      </div>
  );
}

export default App;
