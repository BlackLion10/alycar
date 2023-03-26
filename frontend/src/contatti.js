import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './position.css';
import './contatti.css';
import './chisiamo.js';
import './dettagli.js';
import './form.js';
import ChiSiamo from './chisiamo.js';
import Dettagli from './dettagli.js';
import FormPage from './form.js';
import Home from './index.js';
import './animations.js';
import Animate from './animations.js';

let linkWathsapp=async function(){
  console.log("chiama")
  window.location.href ='https://api.whatsapp.com/send?phone=3490729247'
}

let linkMail=async function(){
  console.log("chiama")
  window.location.href ='mailto:info@alycarlongterm.com'
}


function Contatti() {
    return (
      
      <div className="tweet">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <MenuOver></MenuOver>
        <Whatsapp classe="fa fa-whatsapp" id="whatsHero"></Whatsapp>
        <Menu classe="fa fa-bars" id="whatsHero"></Menu>
        <Linea top="600px" color="#3e67ad"></Linea>
        <TitoloSezione top="600px" color="#3e67ad" testo="CONTATTI"></TitoloSezione>
        <Formcontatti></Formcontatti>
        <Footer></Footer>
      </div>
    );
}

function MenuOver() {
  /*      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<Home></Home>,document.querySelector('#root'));document.getElementsByClassName("menuOver")[0].style.display="initial"}}>HOME</p>*/

  return(
    <div class="menuOver">
      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<Home></Home>,document.querySelector('#root'));}}>HOME</p>
      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<ChiSiamo></ChiSiamo>,document.querySelector('#root'));}}>CHI SIAMO</p>
      <img src="images\alycar.png" class="logoMenu"></img>
    </div>
  );
}

function Formcontatti(){
  return(
<section id="contact">  
  <div class="contact-wrapper">
   
    
    <form>
       
      <div class="form-group">
        <div class="col-sm-12">
          <input class="form-control" id="name" placeholder="NOME" name="name" required></input>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input class="form-control" id="email" placeholder="EMAIL" name="email" required></input>
        </div>
      </div>

      <textarea id="testo" class="form-control" rows="10" placeholder="MESSAGGIO" name="message" required></textarea>
      <button class="buttonForm" onClick={function(){
            fetch('http://localhost:3001/dati', {
              method: 'POST',
              headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
              body: 'email='+document.getElementById("email").value+'&'+'nome='+document.getElementById("name").value+'&'+'testo='+document.getElementById("testo").value
            });
          }}>INVIA</button>
      
    </form>
    
    <Animate.ScaleIn>
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Cusano Milanino (MI),via Sormani 77</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone">(212) 555-2368</span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail">tmeventsmilano@gmail.com</span></i></li>
          
        </ul>

        <hr></hr>
        <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-envelope" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-whatsapp" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr></hr>
      </div>
      </Animate.ScaleIn>
  </div>
  
</section>  
  );
}

function Whatsapp({classe,id}) {
  return(
    <div class="Cwhatsapp">
      <i class={classe} id={id} aria-hidden="true"></i>
    </div>
  );
}

function Image({link}) {
  return(
    <img class="imgChisiamo" src={link} alt="green apple slice"/>
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
      backgroundColor:"#3e67ad",
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
      color:"#3e67ad",
      opacity:"0.8",
      textShadow:"2px 2px 2px #FFFFFF",
      marginTop:"50px"
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
        <Animate.FadeUp>
          <img class="imgFooterLogo" src="images\alycar.png"/>
          </Animate.FadeUp>

        <div class="col-xs-6 col-md-3">
            <h6>INFO</h6>
            <ul class="footer-links">
              <li><a >Aly Car Long Term s.r.l.</a></li>
              <li><a >via Achille Grandi 44 - 20017 Mazzo di Rho (MI)</a></li>
              <li><a >P.Iva 10980130966</a></li>
              <li><a >info@alycarlongterm.com</a></li>
              <li><a >3490729247</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <a href="#">Alycar</a>.
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

export default Contatti