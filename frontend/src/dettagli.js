import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './position.css';
import './dettagli.css';
import './chisiamo.css';
import './chisiamo.js';
import './contatti.js';
import './form.js';
import ChiSiamo from './chisiamo.js';
import Contatti from './contatti.js';
import FormPage from './form.js';
import Home from './index.js';

let linkWathsapp=async function(){
  console.log("chiama")
  window.location.href ='https://api.whatsapp.com/send?phone=3490729247'
}

let linkMail=async function(){
  console.log("chiama")
  window.location.href ='mailto:info@alycarlongterm.com'
}


function Dettagli({nomeCar}) {
    return (
      
      <div className="tweet">
        <a class="topPageAnchor"></a>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <MenuOver></MenuOver>
        <Whatsapp classe="fa fa-whatsapp" id="whatsHero"></Whatsapp>
        <Menu classe="fa fa-bars" id="whatsHero"></Menu>
        <Linea top="600px" color="#ffd700"></Linea>
        <TitoloSezione top="600px" color="#ffd700" testo={nomeCar}></TitoloSezione>
        <Card
          linkImg1="images\dettagli\lambo\lambo1.jfif"
          linkImg2="images\dettagli\lambo\lambo2.jfif"
          linkImg3="images\dettagli\lambo\lambo3.jfif"
          linkImg4="images\dettagli\lambo\lambo4.jfif"
          linkImg5="images\dettagli\lambo\lambo5.jfif"
        ></Card>
        <Footer></Footer>
      </div>
    );
}

function MenuOver() {
  /*      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<Home></Home>,document.querySelector('#root'));document.getElementsByClassName("menuOver")[0].style.display="initial"}}>HOME</p>*/

  return(
    <div class="menuOver">
      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<Home></Home>,document.querySelector('#root'));document.getElementsByClassName("menuOver")[0].style.display="initial"}}>HOME</p>
      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<ChiSiamo></ChiSiamo>,document.querySelector('#root'));}}>CHI SIAMO</p>
      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<Contatti></Contatti>,document.querySelector('#root'));}}>CONTATTI</p>
      <img src="images\LogoTMCar.png" alt="green apple slice" class="logoMenu"></img>
    </div>
  );
}

function Whatsapp({classe,id}) {
  return(
    <div class="Cwhatsapp">
      <i class={classe} id={id} aria-hidden="true"></i>
    </div>
  );
}

function Card({linkImg1,linkImg2,linkImg3,linkImg4,linkImg5}) {
  return(
<div class="carousel-container">
  <ul class="carousel my-carousel">
    <input class="carousel__activator" type="radio" id="A" name="activator" defaultChecked/>
    <input class="carousel__activator" type="radio" id="B" name="activator" />
    <input class="carousel__activator" type="radio" id="C" name="activator" />
    <input class="carousel__activator" type="radio" id="D" name="activator" />
    <input class="carousel__activator" type="radio" id="E" name="activator" />
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="E"></label>
      <label class="carousel__control carousel__control--forward" for="B"></label>
    </div>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="A"></label>
      <label class="carousel__control carousel__control--forward" for="C"></label>
    </div>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="B"></label>
      <label class="carousel__control carousel__control--forward" for="D"></label>
    </div>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="C"></label>
      <label class="carousel__control carousel__control--forward" for="E"></label>
    </div>
    <div class="carousel__controls">
      <label class="carousel__control carousel__control--backward" for="D"></label>
      <label class="carousel__control carousel__control--forward" for="A"></label>
    </div>
    <img class="carousel__slide" src={linkImg1}>

    </img>
    <img class="carousel__slide" src={linkImg2}>

    </img>
    <img class="carousel__slide" src={linkImg3}>

    </img>
    <img class="carousel__slide" src={linkImg4}>

    </img>
    <img class="carousel__slide" src={linkImg5}>

    </img>
    <div class="carousel__indicators">
      <label class="carousel__indicator" for="A"></label>
      <label class="carousel__indicator" for="B"></label>
      <label class="carousel__indicator" for="C"></label>
      <label class="carousel__indicator" for="D"></label>
      <label class="carousel__indicator" for="E"></label>
    </div>
  </ul>
</div>

  );
}

function Menu({classe,id}) {
  return(
    <div class="Cmenu" onClick={function(){document.getElementsByClassName("menuOver")[0].style.display="initial"}}>
      <i class={classe} id={id} aria-hidden="true"></i>
    </div>
  );
}

function Linea(){
  return (
    <div style={{
      height:"1px",
      width:"100%",
      backgroundColor:"#ffd700",
      opacity:"0.6",
      boxShadow:"-12px 5px 15px 2px #FFFFFF"
    }}>      
    </div>
    );  
}

function TitoloSezione({testo}){
  return (
    <h3 style={{
      width:"100%",
      textAlign:"center",
      fontSize:"40px",
      color:"#ffd700",
      opacity:"0.8",
      textShadow:"2px 2px 2px #FFFFFF"
    }}>
      {testo}      
    </h3>
    );  
}

function Paragrafo({testo}){
  return(
    <p class="chisiamo">
      {testo}
    </p>
  );
}


function Footer({footerTop}) {
  return (
    <div class="footerSite">
    <footer class="site-footer" style={{top:footerTop}}>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About us</h6>
            <p class="text-justify">Siamo una realtà emergente nel mondo del noleggio auto di lusso. Collaboriamo con grandi Players di questo mercato e puntiamo ad offrire ai nostri clienti il miglior servizio. Questo consiste nell'assistenza continua e personalizzata al cliente, nell'efficienza delle nostre vetture, nei prezzi competitivi e nella cura delle questioni burocratiche e dei dettagli. </p>
          </div>

          <img class="imgFooterLogo" src="images\LogoTMCar.png" alt="green apple slice"/>

          <div class="col-xs-6 col-md-3">
            <h6>INFO</h6>
            <ul class="footer-links">
              <li><a >TmCar s.r.l.</a></li>
              <li><a >via Sormani 77 - 20095 Cusano Milanino (MI)</a></li>
              <li><a >P.Iva 12654820963</a></li>
              <li><a >tmcar@info.it</a></li>
              <li><a >320126683</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <a href="#">TmCar</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook"><i class="fa fa-instagram"></i></a></li>
              <li><a class="twitter"><i class="fa fa-facebook"></i></a></li>
              <li><a class="dribbble"><i class="fa fa-envelope" onClick={linkMail}></i></a></li>
              <li><a class="linkedin"><i class="fa fa-whatsapp" onClick={linkWathsapp}></i></a></li>  
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  
  );
}

export default Dettagli