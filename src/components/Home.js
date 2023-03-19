import React from 'react';
import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Bunglow from './Bunglow';
import Bunglo from './Bunglow';
import Design from './Design';
import Interior from './Interior';
import front from './front.png';




 class Home extends React.Component{
     constructor(){
         super();
     }
    render(){
        return(
            
            
                <div className='container col-xl-8 text-center bg-warning'>
                    <div id="carouselExampleIndicators" class="carousel slide">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src={front} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={front} class="d-block w-100" alt="..."/>
                          </div>
                          <div class="carousel-item">
                            <img src={front} class="d-block w-100" alt="..."/>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
              

            
        )
    }
}
export default Home