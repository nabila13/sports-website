import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Reviews from './components/Reviews/Reviews';
import Notfound from './components/Notfound/Notfound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
<Route exact path='/'>
  <Home></Home>
</Route>
<Route path='/home'>
  <Home></Home>
</Route>
<Route path='/about'>
  <About></About>
</Route>
<Route path='/courses'>
  <Courses></Courses>
</Route>
<Route path='/reviews'>
  <Reviews></Reviews>
</Route>
<Route path='*'>
  <Notfound></Notfound>
</Route>

     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
