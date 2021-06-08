import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './pages';
import About from './pages/about';
import Menu from './pages/product';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle =()=>{
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
