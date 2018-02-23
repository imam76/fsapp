import React from 'react';
import ReactDOM from 'react-dom';
//import react router -------------
// eslint-disable-next-line
import {  BrowserRouter as Router,  Route,  Link} from 'react-router-dom';

//import parallax -----------------
import ParallaxWrapper from './layout/parallax';
//importcard ----------------------
import CardWrapper from './layout/card';
//importconsolesiswa ----------------------
import consoleSiswa from './layout/console_siswa';

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <div className="fstudent">
        <Route exact path="/" component={ParallaxWrapper}/>
        <Route path="/console" component={CardWrapper}  />
        <Route path="/1" component={consoleSiswa}  />
    </div>
  </Router>,
    root
);
