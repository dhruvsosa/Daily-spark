import React, { Component } from 'react'
import NavBar from './components/NavBar'
import { News } from './components/News'
import './App.css'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
export default class App extends Component {
  static defaultProps={
    pageSize:6,
    country:"us",
    category:"science"
  }
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
   category: PropTypes.string,
  }

  constructor(props){
    super(props);
      this.state={
        isDarkMode: false,
      }    
  }
  toggleDarkMode = () =>{
    this.setState(prevState => ({
      isDarkMode : ! prevState.isDarkMode,
    }))
  }

  render() {
    const { isDarkMode } = this.state;
    const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';
    return (
      <div>
        <Router>
        <div className={`app ${themeClass}`}>
        <NavBar isDarkMode={isDarkMode}  toggleMode={this.toggleDarkMode}/>
        <Routes>

        <Route  path='/business' element={<News key="general" pageSize={6} country={"us"} category={"business"}/>} />
        <Route  path='/entertainment' element={<News key="entertainment"pageSize={6} country={"us"} category={"entertainment"}/>} />
        <Route  path='/general' element={<News key="general"pageSize={6} country={"us"} category={"general"}/>} />
        <Route  path='/health' element={<News key="health"pageSize={6} country={"us"} category={"health"}/>} />
        <Route  path='/science' element={<News key="science"pageSize={6} country={"us"} category={"science"}/>} />
        <Route  path='/sports' element={<News key="sports"pageSize={6} country={"us"} category={"sports"}/>} />
        <Route  path='/technology' element={<News key="technology" pageSize={6} country={"us"} category={"technology"}/>} />
        <Route  path='/About us' element={<AboutUs />} />

        </Routes>
        </div>

        </Router>
        
      </div>
    )
  }
}
