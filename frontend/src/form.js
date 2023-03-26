import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './position.css';
import './form.css';
import './chisiamo.js';
//import './contatti.js';
import './dettagli.js';
import ChiSiamo from './chisiamo.js';
import Contatti from './contatti.js';
import Dettagli from './dettagli.js';
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

let autoSceltaNoleggio

function FormPage({autoScelta}) {
  autoSceltaNoleggio=autoScelta;
    return (     
      <div className="tweet">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <MenuOver></MenuOver>
        <Whatsapp classe="fa fa-whatsapp" id="whatsHero"></Whatsapp>
        <Menu classe="fa fa-bars" id="whatsHero"></Menu>
        <Linea top="600px" color="#3e67ad"></Linea>
        <TitoloSezione top="600px" color="#3e67ad" testo="IL TUO ORDINE"></TitoloSezione>
        <Paragrafo testo="Compila il form sottostante. Verrai contattato al più presto da un nostro collaboratore per maggiori dettagli e per concretizzare il tuo ordine. Grazie per averci scelto!"></Paragrafo>
        <Form></Form>
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
      <img src="images\alycar.png" class="logoMenu"></img>
    </div>
  );
}

function Form(){
  let durataMesi
  let anticipo
  let persona
  function check24(){
    if(document.getElementById("24").checked=true){
      document.getElementById("48").checked=false
      document.getElementById("60").checked=false
      document.getElementById("36").checked=false
      durataMesi="24"
    }
  }
  function check36(){
  if(document.getElementById("36").checked=true){
      document.getElementById("48").checked=false
      document.getElementById("60").checked=false
      document.getElementById("24").checked=false
      durataMesi="36"
    }
  }
  function check48(){
    if(document.getElementById("48").checked=true){
        document.getElementById("24").checked=false
        document.getElementById("36").checked=false
        document.getElementById("60").checked=false
        durataMesi="48"
      }
  }
  function check60(){
    if(document.getElementById("60").checked=true){
        document.getElementById("24").checked=false
        document.getElementById("36").checked=false
        document.getElementById("48").checked=false
        durataMesi="60"
      }
  }
  function checkPrivato(){
    if(document.getElementById("privato").checked=true){
        document.getElementById("azienda").checked=false
        persona="privato"
      }
  }
  function checkAzienda(){
    if(document.getElementById("azienda").checked=true){
        document.getElementById("privato").checked=false
        persona="azienda"
      }
  }
  function checkAnticipo(){
    if(document.getElementById("gender-male").checked=true){
        document.getElementById("gender-female").checked=false
        anticipo="con anticipo"
      }
  }
  function checkSenzaAnticipo(){
    if(document.getElementById("gender-female").checked=true){
        document.getElementById("gender-male").checked=false
        anticipo="senza anticipo"
      }
  }
  return(
  <div class="containerForm">
    <form>
      <div class="row">
        <h4>I tuoi dati</h4>
        <div class="input-group input-group-icon">
          <input id="nomeCognome" type="text" placeholder="Nome e Cognome" required/>
          <div class="input-icon"><i class="fa fa-user"></i></div>
        </div>
        <div class="input-group input-group-icon">
          <input id="emailForm" type="text" placeholder="Email" required/>
          <div class="input-icon"><i class="fa fa-envelope"></i></div>
        </div>
        <div class="input-group input-group-icon">
          <input id="telefono" type="text" placeholder="Telefono" required/>
          <div class="input-icon"><i class="fa fa-phone"></i></div>
        </div>
      </div>
      <div class="row">
        <div class="col-half_persona">
          <h4>Durata mesi</h4>
          <div class="input-group">
            <div class="col-four">
              <input type="radio" id="24" onClick={check24} required/>
              <label for="24">24</label>
            </div>
            <div class="col-four">
              <input type="radio" id="36" onClick={check36} required/>
              <label for="36">36</label>
            </div>
            <div class="col-four">
              <input type="radio" id="48" onClick={check48} required/>
              <label for="48">48</label>
            </div>
            <div class="col-four">
              <input type="radio" id="60" onClick={check60}required/>
              <label for="60">60</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">  
        <div class="col-half_persona">
          <h4>Anticipo</h4>
          <div class="input-group">
            <input class="anticipo1" id="gender-male" type="radio" name="gender" value="male" onClick={checkAnticipo} required/>
            <label for="gender-male">Con anticipo</label>
            <input class="anticipo1" id="gender-female" type="radio" name="gender" value="female" onClick={checkSenzaAnticipo} required/>
            <label for="gender-female">Senza anticipo</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-half_persona">
          <h4>Persona</h4>
          <div class="input-group">
            <input class="persona1" id="privato" type="radio" onClick={checkPrivato} required/>
            <label for="privato">Privato</label>
            <input class="persona1" id="azienda" type="radio" onClick={checkAzienda} required/>
            <label for="azienda">Azienda</label>
          </div>
        </div>
      </div>
      <div class="row">
        <h4>Budget per la rata (espresso in euro)</h4>
        <div class="input-group input-group-icon">
          <input id="budget" type="number" placeholder="Budget (es.200)" required/>
          <div class="input-icon"><i class="fa fa-credit-card"></i></div>
        </div>
      </div>
      <button class="buttonForm" onClick={function(){
            fetch('http://localhost:3001/datiUtente', {
              method: 'POST',
              headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
              body: 'nomeAuto='+autoSceltaNoleggio.nomeAuto+'&'+'modelloAuto='+autoSceltaNoleggio.modelloAuto+'&'+'prezzo='+autoSceltaNoleggio.prezzo+'&'+'deposito='+autoSceltaNoleggio.deposito+'&'+'kmInclusi='+autoSceltaNoleggio.kmInclusi+'&'+'kmExtra='+autoSceltaNoleggio.kmExtra+'&'+'cambio='+autoSceltaNoleggio.colore+'&'+'persona='+persona+'&'+'anticipo='+anticipo+'&'+'durataMesi='+durataMesi+'&'+'budget='+document.getElementById("budget").value+'&'+'nomeCognome='+document.getElementById("nomeCognome").value+'&'+'email='+document.getElementById("emailForm").value+'&'+'telefono='+document.getElementById("telefono").value
            });
          }}>INVIA</button>
    </form>
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
      marginTop:"100px"
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

export default FormPage