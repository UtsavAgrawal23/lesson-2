import React from 'react';

import HomePage from './pages/homePage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import './App.css';

const HatsPage = ()=>(
  <div><h1>Hats Page</h1></div>
)

// class App extends React.Component {
//   render() {
//     return (
//       <div className='App'>
//         <HomePage />
//       </div>
//     );
//   }
// }

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  )
}

export default App;
