import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './position.css';
import './chisiamo.css';
import './contatti.js';
import './dettagli.js';
import './form.js';
import Contatti from './contatti.js';
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


function ChiSiamo() {
    return (
      
      <div className="tweet">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <MenuOver></MenuOver>
        <Whatsapp classe="fa fa-whatsapp" id="whatsHero"></Whatsapp>
        <Menu classe="fa fa-bars" id="whatsHero"></Menu>
        <Linea top="600px" color="#3e67ad"></Linea>
        <TitoloSezione top="600px" color="#3e67ad" testo="CHI SIAMO"></TitoloSezione>
        <Animate.FadeUp>
        <Image link="images\alycar.png"></Image>
        </Animate.FadeUp>
        <Paragrafo testo="L'idea che ci ha spinto a creare una nuova realtà imprenditoriale nasce dalla volontà di garantire ai nostri clienti un'esperienza di mobilità completa, offrendo tutti i servizi oggi disponibili sul mercato tramite un unico mobility hub. Forniamo le più flessibili soluzioni di mobilità a noleggio, dal breve al lungo termine, totalmente integrate ad una rete di dealer e centri assistenza di nostra proprietà."></Paragrafo>
        <Footer></Footer>
      </div>
    );
}

function MenuOver() {
  /*      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<Home></Home>,document.querySelector('#root'));document.getElementsByClassName("menuOver")[0].style.display="initial"}}>HOME</p>*/

  return(
    <div class="menuOver">

      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<Home></Home>,document.querySelector('#root'));}}>HOME</p>
      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<Contatti></Contatti>,document.querySelector('#root'));}}>CONTATTI</p>
      <img src="images\alycar.png" class="logoMenu"></img>
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

function Image({link}) {
  return(
    <img class="imgChisiamo" src={link}/>
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

export default ChiSiamo