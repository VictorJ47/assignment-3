/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 1234567.89,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  async componentDidMount() {
    try {
      const creditsResponse = await fetch("https://johnnylaicode.github.io/api/credits.json");
      const credits = await creditsResponse.json();
  
      const debitsResponse = await fetch("https://johnnylaicode.github.io/api/debits.json");
      const debits = await debitsResponse.json();
  
      const totalCredits = credits.reduce((sum, item) => sum + item.amount, 0);
      const totalDebits = debits.reduce((sum, item) => sum + item.amount, 0);
      const accountBalance = parseFloat((totalCredits - totalDebits).toFixed(2));
  
      this.setState({ credits, debits, accountBalance });
    } catch (error) {
      console.error("Failed to fetch credits or debits:", error);
    }
  }

  addCredit = (newCredit) => {
    const updatedCredits = [...this.state.credits, newCredit];
    const totalCredits = updatedCredits.reduce((sum, c) => sum + c.amount, 0);
    const totalDebits = this.state.debits.reduce((sum, d) => sum + d.amount, 0);
    const accountBalance = parseFloat((totalCredits - totalDebits).toFixed(2));
    this.setState({ credits: updatedCredits, accountBalance });
  }
  
  addDebit = (newDebit) => {
    const updatedDebits = [...this.state.debits, newDebit];
    const totalCredits = this.state.credits.reduce((sum, c) => sum + c.amount, 0);
    const totalDebits = updatedDebits.reduce((sum, d) => sum + d.amount, 0);
    const accountBalance = parseFloat((totalCredits - totalDebits).toFixed(2));
    this.setState({ debits: updatedDebits, accountBalance });
  }
  

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)

    const CreditsComponent = () => (
      <Credits 
        credits={this.state.credits} 
        addCredit={this.addCredit}
        accountBalance={this.state.accountBalance}
      />
    );


    const DebitsComponent = () => (
      <Debits 
        debits={this.state.debits} 
        addDebit={this.addDebit}
        accountBalance={this.state.accountBalance}
      />
    );

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/bank-of-react-starter-code">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;