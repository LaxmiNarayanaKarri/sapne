import "./index.css";
import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import home from  './components/home'
import about from  './components/about'
import ourimpact from "./components/ourimpact";
import NAVBAR from './components/NAVBAR'
import Footer from './components/Footer'
import joins from './components/join us'
import contact from  './components/contact'
import vip from './components/vip'
import numbers from './components/numbers'
import donate from './components/donate'
import shakti from  './components/shakti';
class App extends Component{
             
          

  render()
  {
    
    return(
      
        <BrowserRouter>
          <NAVBAR />
          <Route exact path='/' component={home} />
          <Route path='/about' component={about} />
          <Route path='/ourimpact' component={ourimpact} />
          <Route path='/contact' component={contact} />
          <Route path='/join' component={joins} />
          <Route path='/shakti' component={shakti} />
          <Route path='/vip' component={vip} />
          <Route path='/donate' component={donate} />
          <Route path='/numbers' component={numbers} />
          <Footer />
        </BrowserRouter>
        
            )
  }
}

export default App
