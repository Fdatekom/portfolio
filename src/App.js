import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import createBrowseristory from 'history/createBrowserHistory';
import Navbar from './components/Navbar/Navbar'
import Avia from './components/avia'
import Todo from './components/todo';
import Json from './components/Json'
const history = createBrowseristory()
class App extends React.Component {
  render (){
    return(
      <BrowserRouter history={history}>
        <Navbar />



        <Route path='/avia' component={Avia} />
        <Route path='/todo' component={Todo} />
        <Route path='/json' component={Json} />
      </BrowserRouter>
    )
   
  }
 
 
}

export default App;
