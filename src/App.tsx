import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Launches_page from './Component/Launches_page'
import Launch_Details from './Component/Launch_Details'
import Navbar from './Component/Navbar'
import Rockets_page from './Component/Rockets_page'
import Rocket_Details from './Component/Rocket_Details'
import Ships_page from './Component/Ships_page'
import Ship_Details from './Component/Ship_Details'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path='/ships' component={Ships_page} exact></Route>
      <Route path='/ship/:id' component={Ship_Details} exact></Route>
      <Route path='/rockets' component={Rockets_page} exact></Route>
      <Route path='/rocket/:id' component={Rocket_Details} exact></Route>
      <Route path='/launches' component={Launches_page} exact></Route>
      <Route path='/launch/:id' component={Launch_Details} exact></Route>
    </Router>
  )
}

export default App
