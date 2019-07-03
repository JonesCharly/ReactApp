import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import WelcomeForm from './components/Form'
import Cards from './components/Cards'
import HomeMenu from './components/Navbar';

const user = { 
  name:"charline", 
  city:"paris", 
  status:"single"}
class App extends Component {
  render() {
  return (
    <div className="App">

      <HomeMenu/>
      <Header {...user}/>
      <WelcomeForm/>
      <Cards/>
     
      <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous" />
    </div>
  );
}
}

export default App;
