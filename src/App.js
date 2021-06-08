import { Route, Switch } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './pages';
import About from './pages/about';
import Menu from './pages/product';

function App() {
  return (
    <>
      <Navbar />
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
