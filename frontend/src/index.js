import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './position.css';
//import './indexFunctions.js';
import './chisiamo.js';
import './contatti.js';
import './dettagli.js';
import './form.js';
import ChiSiamo from './chisiamo.js';
import Contatti from './contatti.js';
import Dettagli from './dettagli.js';
import FormPage from './form.js';
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

let infoAuto={
  auto1:{
    imgAuto:"images/500.jpg",
    nomeAuto:"FIAT 500",
    modelloAuto:"1.0 Hybrid",
    prezzo:"249",
    deposito:"2050",
    kmInclusi:"48 mesi / 8000 km anno",
    kmExtra:"ibrida/benzina",
    colore:"manuale"
  },
  auto2:{
    imgAuto:"images/CupraFormentor01.jpg",
    nomeAuto:"CUPRA FORMENTOR",
    modelloAuto:"1.5 TSI",
    prezzo:"349",
    deposito:"3500",
    kmInclusi:"48 mesi / 12500 km anno",
    kmExtra:"benzina",
    colore:"manuale"
  },
  auto3:{
    imgAuto:"images/stelvio.jpeg",
    nomeAuto:"ALFA ROMEO STELVIO",
    modelloAuto:"2.2 T SUPER BUSINESS Q4 190CV",
    prezzo:"489",
    deposito:"5000",
    kmInclusi:"36 mesi / 20000 km anno",
    kmExtra:"diesel",
    colore:"automatico"
  },
  auto4:{
    imgAuto:"images/jeepavenger.jpeg",
    nomeAuto:"JEEP AVENGER",
    modelloAuto:"1.2 TURBO",
    prezzo:"349",
    deposito:"3500",
    kmInclusi:"36 mesi / 10000 km anno",
    kmExtra:"benzina",
    colore:"manuale"
  },
  auto5:{
    imgAuto:"images/tonale.jpg",
    nomeAuto:"ALFA ROMEO TONALE",
    modelloAuto:"1.5 SUPER 130CV TCT6",
    prezzo:"409",
    deposito:"4000",
    kmInclusi:"36 mesi / 15000 km anno",
    kmExtra:"ibrida/benzina",
    colore:"automatico / sequenziale"
  },
  auto6:{
    imgAuto:"images/panda.jpeg",
    nomeAuto:"FIAT PANDA III",
    modelloAuto:"1.0 Hybrid 70CV",
    prezzo:"239",
    deposito:"2500",
    kmInclusi:"48 mesi / 10000 km anno",
    kmExtra:"ibrida/benzina",
    colore:"manuale"
  },
  auto7:{
    imgAuto:"images/golf.jpeg",
    nomeAuto:"WOLKSWAGEN GOLF VIII",
    modelloAuto:"1.0 TSI EVO LIFE 110CV",
    prezzo:"219",
    deposito:"4500",
    kmInclusi:"36 mesi / 10000 km anno",
    kmExtra:"ibrida/benzina",
    colore:"automatico / sequenziale"
  },
  auto8:{
    imgAuto:"images/sportage.jpg",
    nomeAuto:"KIA SPORTAGE V",
    modelloAuto:"1.6 CRDI MHEV BUSINESS MT",
    prezzo:"339",
    deposito:"4000",
    kmInclusi:"36 mesi / 15000 km anno",
    kmExtra:"ibrida/diesel",
    colore:"manuale"
  },
  auto9:{
    imgAuto:"images/peugeot.jpeg",
    nomeAuto:"PEUGEOT 3008 II",
    modelloAuto:"1.5 BLUE HDI 130CV",
    prezzo:"365",
    deposito:"6500",
    kmInclusi:"36 mesi / 15000 km anno",
    kmExtra:"diesel",
    colore:"automatico"
  }
}

let infoServizio={
  servizio1:{
    servizio:"PERCHE' NOLEGGIARE?",
    desc:String.raw` 
    ALLA GUIDA DEL TUO BUSINESS

    Offriamo un ventaglio di soluzioni che rispondono alle diverse esigenze di ogni libero professionista: auto in pronta consegna, test drive, offerte del momento, proposte personalizzate per chi desidera i servizi premium Horizon e un modello specifico. Tutto questo assieme ad una consulenza commerciale professionale con un'attenzione particolare agli aspetti fiscali, fondamentali per la scelta giusta di un professionista o di una partita iva.    
    
    STOP A BUROCRAZIA E SCADENZE

    Il tuo consulente dedicato saprà guidarti nel mondo del noleggio a lungo termine, con proposte che ti faranno dimenticare gli oneri di gestione della tua auto. Concentrati sul tuo business, alla tua auto ci pensiamo noi.    
    
    COSTI CERTI E FISCALITA'

    Il noleggio a lungo termine permette di avere la certezza di quello che sarà il costo di gestione della tua auto. Grazie alla presenza di un team di esperti all'interno del gruppo, il consulente Horizon saprà consigliarti sulle questioni fiscali e legali legate all'utilizzo della tua auto.
    
    VALORIZZA IL TUO TEMPO

    Grazie alla struttura del nostro gruppo, sarà possibile ottimizzare i tempi morti relativi al noleggio della tua auto. Che si tratti di ritardi nella consegna, o di interventi tecnici, avrai sempre il supporto necessario così da garantire continuità al tuo business
    `,
    img:""
  },
  servizio2:{
    servizio:"FAQ",
    desc:`
    COME FUNZIONA IL NOLEGGIO?
        
    Le nostre offerte godono di una copertura assicurativa totale (RC Auto, Furto e Incendio, Kasko), manutenzione ordinaria e straordinaria, assistenza stradale, gomme e veicolo sostitutivo opzionali, dovrai soltanto:
    * Scegliere l'auto.
    * Decidere la durata del noleggio e il chilometraggio.
    * Valutare la proposta ideale per te.
    * Guidare l'auto senza pensare ad altro.
    
    
    QUALI SONO I VANTAGGI DEL NOLEGGIO A LUNGO TERMINE RISPETTO ALL'ACQUISTO E AL LEASING DI UN VEICOLO?
    
    Copertura assicurativa
    Manutenzione ordinaria e straordinaria
    Bollo
    Assistenza stradale
    Possibilità di cambiare veicolo con una certa frequenza&
    Consulenti a tua disposizione
    Zero anticipo
    Azzeramento rischio per mancato possesso di auto
    Inserimento di tutti gli incentivi statali all'interno del canone
    Maxi rata finale
    
    
    QUAL E' LA DURATA MINIMA DEL CONTRATTO DI NOLEGGIO?
    
    Puoi noleggiare la tua auto per un minimo di 24 mesi, fino ad un massimo di 60.
    
    
    QUALI SONO I DOCUMENTI NECESSARI PER POTER NOLEGGIARE UNA VETTURA?
    
    Se sei un privato:
    * Documento d'identità e codice fiscale.
    * Ultimo CUD e ricevuta modello unico.
    * Ultime due buste paga.

    Se sei un libero professionista:
    * Documento d'identità e codice fiscale.
    * Tessera di iscrizione all'albo.
    * Ultimo CUD con ricevuta dell'avvenuta presentazione telematica.
    * Certificato di attribuzione di Partita IVA.
    
    Se sei un'azienda:
    * Documento d'identità e codice fiscale del firmatario.
    * Visura camerale.
    * Ultimo bilancio.
    
    
    QUALI SONO LE OPZIONI AL TERMINE DEL NOLEGGIO?
    
    Le opzioni sono tre:
    Posso restituire il veicolo e stipulare un nuovo contratto di noleggio
    Posso restituire il veicolo senza necessità di proseguire il rapporto
    Posso decidere di acquistare il veicolo
    
    
    E' PREVISTA UNA MAXI RATA FINALE?
    
    No, non è mai prevista.
    `,
    img:""
  },
  servizio3:{
    servizio:"CONSEGNA A DOMICILIO",
    desc:"Non hai tempo per venire da noi in concessionaria a ritirare l'auto? Non ti preoccupare! Il servizio Delivery at Home è stato pensato per te per la consegna a domicilio della nuova vettura con la spiegazione di tutte le sue funzionalità. Servizio disponibile su tutto il territorio nazionale, sia per i privati che per le aziende.",
    img:""
  },
  servizio4:{
    servizio:"LAVAGGIO A DOMICILIO",
    desc:"Ti piace avere l'auto sempre pulita e perfetta? Scegli il servizio di lavaggio: un incaricato ritirerà l’auto, la laverà ed effettuerà la riconsegna, a intervento ultimato, presso il tuo domicilio. Il servizio viene eseguito su tutte le superfici della vettura, sia interne che esterne.",
    img:""
  },
}

function Home() {
    return (
      
      <div className="tweet">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <MenuOver></MenuOver>
        <Whatsapp classe="fa fa-whatsapp" id="whatsHero"></Whatsapp>
        <Menu classe="fa fa-bars" id="whatsHero"></Menu>
        <Hero></Hero>
        <div class="Cservizio">
          <Servizio
            servizio1={infoServizio.servizio1.servizio}
            desc1={infoServizio.servizio1.desc}
            img1=""
            servizio2={infoServizio.servizio2.servizio}
            desc2={infoServizio.servizio2.desc}
            img2=""
            servizio3={infoServizio.servizio3.servizio}
            desc3={infoServizio.servizio3.desc}
            img3=""
            servizio4={infoServizio.servizio4.servizio}
            desc4={infoServizio.servizio4.desc}
            img4=""
          ></Servizio>
        </div>
        <Linea top="1500px" left="0px" skew="0deg" color="#3e67ad"></Linea>
        <TitoloSezione top="1500px" left="0px" skew="0deg" color="#3e67ad" testo="OFFERTE"></TitoloSezione>
        <div class="Cauto">
          <CardAuto 
            scale="0.5" top="1750px" left="-80px"
            imgAuto={infoAuto.auto1.imgAuto}
            nomeAuto={infoAuto.auto1.nomeAuto}
            modelloAuto={infoAuto.auto1.modelloAuto}
            prezzo={infoAuto.auto1.prezzo}
            deposito={infoAuto.auto1.deposito}
            kmInclusi={infoAuto.auto1.kmInclusi}
            kmExtra={infoAuto.auto1.kmExtra}
            colore={infoAuto.auto1.colore}
            fontSizeLi="14px"
            autoScelta={infoAuto.auto1}
          />
          <CardAuto 
            scale="0.5" top="2000px" left="-80px"
            imgAuto={infoAuto.auto2.imgAuto}
            nomeAuto={infoAuto.auto2.nomeAuto}
            modelloAuto={infoAuto.auto2.modelloAuto}
            prezzo={infoAuto.auto2.prezzo}
            deposito={infoAuto.auto2.deposito}
            kmInclusi={infoAuto.auto2.kmInclusi}
            kmExtra={infoAuto.auto2.kmExtra}
            colore={infoAuto.auto2.colore}
            fontSizeLi="14px"
            autoScelta={infoAuto.auto2}
          />

          <CardAuto 
            scale="0.5" top="2250px" left="-80px"
            imgAuto={infoAuto.auto3.imgAuto}
            nomeAuto={infoAuto.auto3.nomeAuto}
            modelloAuto={infoAuto.auto3.modelloAuto}
            prezzo={infoAuto.auto3.prezzo}
            deposito={infoAuto.auto3.deposito}
            kmInclusi={infoAuto.auto3.kmInclusi}
            kmExtra={infoAuto.auto3.kmExtra}
            colore={infoAuto.auto3.colore}
            fontSizeLi="14px"
            autoScelta={infoAuto.auto3}
          />
          
          <CardAuto 
            scale="0.5" top="2500px" left="-80px"
            imgAuto={infoAuto.auto4.imgAuto}
            nomeAuto={infoAuto.auto4.nomeAuto}
            modelloAuto={infoAuto.auto4.modelloAuto}
            prezzo={infoAuto.auto4.prezzo}
            deposito={infoAuto.auto4.deposito}
            kmInclusi={infoAuto.auto4.kmInclusi}
            kmExtra={infoAuto.auto4.kmExtra}
            colore={infoAuto.auto4.colore}
            fontSizeLi="14px"
            autoScelta={infoAuto.auto4}
          />
          
          <CardAuto 
            scale="0.5" top="2750px" left="-80px"
            imgAuto={infoAuto.auto5.imgAuto}
            nomeAuto={infoAuto.auto5.nomeAuto}
            modelloAuto={infoAuto.auto5.modelloAuto}
            prezzo={infoAuto.auto5.prezzo}
            deposito={infoAuto.auto5.deposito}
            kmInclusi={infoAuto.auto5.kmInclusi}
            kmExtra={infoAuto.auto5.kmExtra}
            colore={infoAuto.auto5.colore}
            fontSizeLi="14px"
            autoScelta={infoAuto.auto5}
          />
          
          <CardAuto 
            scale="0.5" top="2990px" left="-80px"
            imgAuto={infoAuto.auto6.imgAuto}
            nomeAuto={infoAuto.auto6.nomeAuto}
            modelloAuto={infoAuto.auto6.modelloAuto}
            prezzo={infoAuto.auto6.prezzo}
            deposito={infoAuto.auto6.deposito}
            kmInclusi={infoAuto.auto6.kmInclusi}
            kmExtra={infoAuto.auto6.kmExtra}
            colore={infoAuto.auto6.colore}
            fontSizeLi="14px"
            autoScelta={infoAuto.auto6}
          />
          
          <CardAuto 
            scale="0.5" top="3230px" left="-80px"
            imgAuto={infoAuto.auto7.imgAuto}
            nomeAuto={infoAuto.auto7.nomeAuto}
            modelloAuto={infoAuto.auto7.modelloAuto}
            prezzo={infoAuto.auto7.prezzo}
            deposito={infoAuto.auto7.deposito}
            kmInclusi={infoAuto.auto7.kmInclusi}
            kmExtra={infoAuto.auto7.kmExtra}
            colore={infoAuto.auto7.colore}
            fontSizeLi="14px"
            autoScelta={infoAuto.auto7}
          />
          
          <CardAuto 
            scale="0.5" top="3470px" left="-80px"
            imgAuto={infoAuto.auto8.imgAuto}
            nomeAuto={infoAuto.auto8.nomeAuto}
            modelloAuto={infoAuto.auto8.modelloAuto}
            prezzo={infoAuto.auto8.prezzo}
            deposito={infoAuto.auto8.deposito}
            kmInclusi={infoAuto.auto8.kmInclusi}
            kmExtra={infoAuto.auto8.kmExtra}
            colore={infoAuto.auto8.colore}
            fontSizeLi="14px"
            autoScelta={infoAuto.auto8}
          />
          
          <CardAuto 
            scale="0.5" top="3750px" left="-80px"
            imgAuto={infoAuto.auto9.imgAuto}
            nomeAuto={infoAuto.auto9.nomeAuto}
            modelloAuto={infoAuto.auto9.modelloAuto}
            prezzo={infoAuto.auto9.prezzo}
            deposito={infoAuto.auto9.deposito}
            kmInclusi={infoAuto.auto9.kmInclusi}
            kmExtra={infoAuto.auto9.kmExtra}
            colore={infoAuto.auto9.colore}
            fontSizeLi="14px"
            autoScelta={infoAuto.auto9}
          />
        </div>
        <Animate.FadeIn>
        <Furgoni></Furgoni>
        </Animate.FadeIn>
        <Carosello></Carosello>
        <Footer></Footer>
      </div>
    );
  
}

function MenuOver() {
  /*      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<Home></Home>,document.querySelector('#root'));document.getElementsByClassName("menuOver")[0].style.display="initial"}}>HOME</p>*/

  return(
    <div class="menuOver">

      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<ChiSiamo></ChiSiamo>,document.querySelector('#root'));}}>CHI SIAMO</p>
      <p class="menuVoce" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<Contatti></Contatti>,document.querySelector('#root'));}}>CONTATTI</p>
      <img src="images\alycar.png" class="logoMenu"></img>
    </div>
  );
}

function Whatsapp({classe,id}) {
  return(
    <div class="Cwhatsapp">
      <i class={classe} id={id} aria-hidden="true" onClick={linkWathsapp}></i>
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

function Carosello({top,left,transform}) {
  return (
      <a></a>
  );
}

function IconaSocial({classe,id,location}){
  return (
      <i class={classe} id={id} aria-hidden="true" onClick={location}></i>
    );  
}

function Linea(){
  return (
    <div style={{
      height:"1px",
      width:"100%",
      backgroundColor:"#3e67ad",
      opacity:"0.3",
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
      textShadow:"1px 1px 1px #FFFFFF"
    }}>
      {testo}      
    </h3>
    );  
}

function Servizio({top,left,width,servizio1,desc1,img1,servizio2,desc2,img2,servizio3,desc3,img3,servizio4,desc4,img4}){
  return (
    <div
      className="servizio"
      style={{
        left:left,
        maxWidth:width,
        top:top
      }}
      >
      <div class="row1-container">
      <div class="box red">
        <h2>{servizio1}</h2>
        <Animate.FadeIn><p>{desc1}</p></Animate.FadeIn>
        <img src={img1} alt=""/>
      </div>
      
      <div class="box red">
        <h2>{servizio2}</h2>
        <Animate.FadeIn><p>{desc2}</p></Animate.FadeIn>
        <img src={img2} alt=""/>
      </div>
      
      </div>
    </div>
    );  
}

function CardAuto({imgAuto,nomeAuto,modelloAuto,prezzo,deposito,kmInclusi,kmExtra,colore,fontSizeLi,autoScelta}){
  return (
  <div class="cardAuto">
    <div class="product">
      <div class="product__photo">
        <div class="photo-container">
          <div class="photo-main">
            <img class="imgAuto" src={imgAuto}/>
          </div>
        </div>
      </div>
      <div class="product__info">
        <div class="title">
          <h1>{nomeAuto}</h1>
          <span>{modelloAuto}</span>
        </div>
        <div class="price">
        <Animate.ScaleIn>  € <span>{prezzo}</span> MESE (iva inclusa)</Animate.ScaleIn>
        </div>
        <div class="description">
          <ul>
            <li style={{fontSize:fontSizeLi}}> anticipo: {deposito} €</li>
            <li style={{fontSize:fontSizeLi}}> durata: {kmInclusi}</li>
            <li style={{fontSize:fontSizeLi}}> alimentazione: {kmExtra}</li>
            <li style={{fontSize:fontSizeLi}}> cambio: {colore}</li>
          </ul>
        </div>
        <Animate.FadeIn>
        <button class="buy--btn" onClick={function(){
          /*fetch('http://localhost:3001/datiUtente', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
            body: 'nomeAuto='+nomeAuto+'&'+'modelloAuto='+modelloAuto+'&'+'prezzo='+prezzo+'&'+'deposito='+deposito+'&'+'kmInclusi='+kmInclusi+'&'+'kmExtra='+kmExtra+'&'+'colore='+colore+''
          });*/
        window.scrollTo(0, 0); ReactDOM.render(<FormPage autoScelta={autoScelta}></FormPage>,document.querySelector('#root'));}}>PRENOTA</button>
        </Animate.FadeIn>
      </div>
    </div>
  </div>
    );  
}

function Logo({top,left,width,opacity}) {
  return (
      <img class="imgHeroLogo"
      src="images\alycar.png" alt="green apple slice"/>
  );
}


function Furgoni() {
  return (
    <div class="furgoniContainer">
      <div class="banner">
        <h3 class="titoloFurgoni">NOLEGGIO FURGONI</h3>
          <p class="descrizioneBanner">
            Possibilità di noleggio furgoni per privati ed aziende
          </p>
          <button class="bottoneFurgoni" onClick={function(){window.scrollTo(0, 0); ReactDOM.render(<Contatti></Contatti>,document.querySelector('#root'));}}>CHIEDI INFORMAZIONI</button>
      </div>
    </div>
  );
}

function Hero() {
  /*
    <div class="CbuttonHero">
    <button class="bottoneHero">CHI SIAMO</button>
  </div>
  */
  return (
  <div class="hero">
  <div id="stripes">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="CimgHeroLogo">
    <Logo></Logo>
  </div>

  <div class="CiconsHero">
    <IconaSocial classe="fa fa-instagram" id="instaHero"></IconaSocial>
    <IconaSocial classe="fa fa-facebook" id="facebookHero"></IconaSocial>
    <IconaSocial classe="fa fa-whatsapp" id="whatsHero" location={linkWathsapp}></IconaSocial>
    <IconaSocial classe="fa fa-envelope" id="envHero" location={linkMail}></IconaSocial>
  </div>
  </div>
  );
}

function Footer({footerTop,top,left,width,opacity}) {
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

//componentPage=<FormPage/>


ReactDOM.render(<Home/>,
document.querySelector('#root'));

export default Home