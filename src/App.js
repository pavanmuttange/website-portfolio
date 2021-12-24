import React,{useContext} from "react";
import './App.css';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Edu from "./components/education/Edu";
import Home from "./components/Home";
import ProjectList from "./components/projectlist/ProjectList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import {Route,Switch,Redirect} from 'react-router-dom';
import Navigation from "./components/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Skill from "./components/Skills/Skill";


const App = ()=>{

  const theme= useContext(ThemeContext)
  const darkMode=theme.state.darkMode;

  return(
  <div style={{backgroundColor:darkMode? "#222":'white', color:darkMode &&'white',} }>
  <Toggle />
  <Navigation />
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/about' component={About}/>
  <Route path='/projects' component={ProjectList}/>
  <Route path='/edu' component={Edu}/>
  <Route path='/skills' component={Skill}/>
  <Route path='/contact' component={Contact}/>

  <Redirect to="/"/>
  </Switch>
  </div>
  );
}
export default App;
