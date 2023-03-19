
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Bunglow from './Bunglow';
import Design from './Design';
import Interior from './Interior';
import logo from './LOGO-preview.png';
import front from './front.png';
import './css/style.css'
import Home from "./Home";
function Header(){
    return(
      <section>
        <div className='container top-section '>
            <div className='row'>
              <div class="col-xl-3 logo bg-body-secondary">
                  <img src={logo} alt="Logo" width="120" height="100" classname="d-inline-block align-text-top"/>
                 <h4><b>CONSTRUCTION</b></h4>
              </div>
              <div class="col-xl-9 logo text-center  bg-body-secondary">
                <div className="head">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                      <Link class="navbar-brand" to="/">Home</Link>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/bunglow">BUNGLO</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="interior">INTERIOR</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="2D-design">2D DESIGN</Link>
                                </li>
                          
                        </ul>
                        <form class="d-flex">
                           <Link to="/contact" class="btn btn-outline-info " tabindex="-1" role="button" aria-disabled="true">CONTACT US</Link>
                        
                        </form>
                      </div>
                    </div>
                  </nav>
                  </div>

              </div>
            </div>
            <hr ></hr>
            
            
        </div> 
        
       

        </section>
     
    )
}

export default Header
