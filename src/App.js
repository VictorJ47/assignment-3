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
      const creditsResponse = await fetch("https://moj-api.herokuapp.com/credits");
      const debitsResponse = await fetch("https://moj-api.herokuapp.com/debits");
  
      const creditList = await creditsResponse.json();
      const debitList = await debitsResponse.json();
  
      const creditTotal = creditList.reduce((sum, item) => sum + item.amount, 0);
      const debitTotal = debitList.reduce((sum, item) => sum + item.amount, 0);
      const accountBalance = creditTotal - debitTotal;
  
      this.setState({ creditList, debitList, accountBalance });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  addCredit = (credit) => {
    const updatedCredits = [...this.state.creditList, credit];
    const newBalance = this.state.accountBalance + credit.amount;
    this.setState({ creditList: updatedCredits, accountBalance: newBalance });
  }
  
  addDebit = (debit) => {
    const updatedDebits = [...this.state.debitList, debit];
    const newBalance = this.state.accountBalance - debit.amount;
    this.setState({ debitList: updatedDebits, accountBalance: newBalance });
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
        credits={this.state.creditList} 
        addCredit={this.addCredit}
        accountBalance={this.state.accountBalance}
      />
    );


    const DebitsComponent = () => (
      <Debits 
        debits={this.state.debitList} 
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