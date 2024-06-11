import './App.css';
import { Fragment } from 'react';
import Navs from './component/Navs/Navs';
import Home from './component/Home/Home';

function App() {
  return (
    <Fragment>
      <Navs/>
      <Home/>
    </Fragment>
  );
}

export default App;
