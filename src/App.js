import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header'
import './App.css';
import signInAndSignUp from './pages/signInAndSignUpPage/signInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={signInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
