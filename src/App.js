import React from 'react';

import HomePage from './pages/homePage/homepage.component';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component'
import {Switch, Route} from 'react-router-dom';
import {auth} from './firebase/firebase.util';
import './App.css';



class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentUser:null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInSignUpPage}></Route>
        </Switch>
      </div>
    )
  }
  
}

export default App;
