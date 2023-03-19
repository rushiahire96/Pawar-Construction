//import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";



import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';
import Bunglow from './components/Bunglow';
import Interior from './components/Interior';
import Design from './components/Design';
import Contact from './components/Contact';



var record = (
    <BrowserRouter>
        <div className='container bg-secondary'>
            <div className='container bg-body-secondary'>

                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bunglow" element={<Bunglow />} />
                    <Route path="/interior" element={<Interior />} />
                    <Route path="/2D-design" element={<Design />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>

                <Footer />
            </div>
        </div>
    </BrowserRouter>
)
//ReactDOM.render(record,document.getElementById('root'));

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(record)


/* SPA(Single - page application)
 An SPA(Single - page application) is a web app implementation that loads only a single web document, and then updates
  the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content 
  is to be shown.

 This therefore allows users to use websites without loading whole new pages from the server, which can result in
  performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required
   to maintain state, implement navigation, and do meaningful performance monitoring.*/