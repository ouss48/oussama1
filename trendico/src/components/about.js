import React from 'react';
import '../App.css';
import './style/navbar.css'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo_white from "../images/logo/logo-white.png";
import Trendico_Logo from "../images/logo/trendico_logo.svg";
import portada_trendico from "../images/oficina_trendico2.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineClockCircle, AiFillTrophy} from "react-icons/ai";
import fom_fabicon from "../images/icons/play2.png";
import play2red from "../images/icons/play2-red.png";
import gps from "../images/icons/gps.png";
import shop from	"../images/icons/shop.png";
import apartements from	"../images/icons/apartments.png";
import atleet from	"../images/icons/atleet.png";
import point from 	"../images/icons/point.png";
import flag_red from 	"../images/icons/flag-red.png";
import book_red from	"../images/icons/book-red.png";
import flag_blue from	"../images/icons/flag-blue.png";
import gps_blue from	"../images/icons/gps-blue.png";
import shop_blue from	"../images/icons/shop-blue.png";
import facebook_red from	"../images/icons/facebook-red.png" ;
import facebook_blue from	"../images/icons/facebook-blue.png";
import flag from	"../images/icons/flag.png";
import facebook  from	"../images/icons/facebook.png";
import gps2 from	"../images/icons/gps2.png";
import shops from	"../images/icons/shops.png";
import gps_black from	"../images/icons/gps-black.png";
import pc from	"../images/icons/pc.png";



import play2 from "../images/icons/play2.png";

function About() {
  return (
    <div className="App">
            <section id="slider" class="slider-element slider-parallax swiper_wrapper min-vh-60 min-vh-md-60 include-header" >
            <div class="slider-inner">
                <div class="swiper-container swiper-parent">
                    <div class="swiper-wrapper">
        <Navbar className="navBg" variant="dark" expand="lg">
            
          <Container>
              <div>
                  <Navbar.Brand  className="navbar-brand" as={Link} to="/" >
                      <div id="logo" >
                          <a href="index.html" class="standard-logo" data-dark-logo={logo_white}><img src={logo_white} alt="Canvas Logo" /></a>
                          <a href="index.html" class="retina-logo" data-dark-logo={logo_white}><img src={logo_white} alt="Canvas Logo" /></a>
                      </div>
                  </Navbar.Brand>
              </div>
              <div>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link className="menu-link" as={Link} to="/" >Inicio</Nav.Link>
                      <Nav.Link className="menu-link" as={Link} to="/about">Compañia</Nav.Link> 
                      <Nav.Link className="menu-link">
                        <nav class="primary-menu">
                            <ul class="menu-container">
                                <li class="menu-item">
                                    <a  href="">
                                        <div className="menu-nm">NUESTRAS MARCAS</div>
                                    </a>
                                    <ul class="sub-menu-container">
                                        <li class="menu-item">
                                            <a class="menu-link fom" href="https://footonmars.com/">
                                                <div>Foot On Mars</div>
                                            </a>
                                        </li>
                                        <li class="menu-item">
                                            <a class="menu-link" href="https://atleet.store/">
                                                <div>Atleet</div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>  
                            </ul>
                        </nav>
                    </Nav.Link>    
                      <Nav.Link className="menu-link" as={Link} to="/contact">Contact</Nav.Link>
                      <Nav.Link className="menu-link"  href="https://trendico.net/#/login">Area socios</Nav.Link>           
                  </Nav>
                  </Navbar.Collapse>
              </div>

            </Container>
        </Navbar>  


        <section>
            <Outlet></Outlet>
        </section> 

                        <div class="swiper-slide dark">
                          
                        </div>
                    </div>
                </div>
                <a href="/" data-scrollto="#content" data-offset="100" class="one-page-arrow dark"><i class="icon-angle-down infinite animated fadeInDown"></i></a>
            </div>
            <div id='imagen-de-portada'>
              <img src={portada_trendico} alt="portada-trendico"/>
            </div>
      </section>

      <section id="content">
        <div class="content-wrap">
          <div class="section my-0">
            <div class="container">
              <div class="row mt-4 col-mb-50">
                <div class="col-lg-4">
                <i class="i-plain color i-large fa-light fa-clock inline-block "><AiOutlineClockCircle /></i>
                <div class="heading-block border-bottom-0" >
                <span class="before-heading">Años de Experiencia</span>
                <h4>15 AÑOS DE EXPERIENCIA</h4>
              </div>
              <p>15 años de experiencia en el sector del deporte nos avalan.</p>
            </div>
            <div class="col-lg-4">
              <i class="i-plain color i-large icon-location inline-block"><IoLocationOutline /></i>
              <div class="heading-block border-bottom-0" >
                <span class="before-heading">Puntos de Venta</span>
                  <h4>465 PUNTOS DE VENTA</h4>
              </div>
              <p>465 puntos de venta en toda España, Portugal y Gibraltar.</p>
            </div>
            <div class="col-lg-4">
            <i class="i-plain color i-large icon-line2-trophy inline-block" ><AiFillTrophy /></i>
              <div class="heading-block border-bottom-0">
              <span class="before-heading">Cadena Multideporte</span>
              <h4>1º EN ESPAÑA</h4>
              </div>
              <p>Primera cadena multideporte con más puntos de venta en España.</p>
            </div>
          </div>
        </div>
        </div>
        </div>
      <div class="container">
        <h3 class="center" >Somos Tréndico Group</h3>
        <p>Después de 15 años de andadura, somos Tréndico Group. La evolución que ha experimentado la compañía en los últimos años: el nacimiento de tres nuevas
            enseñas de orientación vertical (Foot on Mars, Sötkatt y Atleet), el crecimiento del número de tiendas y la firme apuesta por la verticalización y digitalización de los
            modelos y formatos como valor competitivo.<br /><br /> Apertura de una nueva sede tecnológica del grupo en Zaragoza, enclave estratégico por su proximidad a Madrid y Barcelona. Desde
            esta sede, situada en el emblemático edificio World Trade Center, continuará el proceso de digitalización de la compañía –un pilar clave en esta nueva etapa–, así como la gestión de la venta online. Este nuevo ‘cuartel general’
            viene a acompañar a los ya existentes: la sede administrativa y financiera de Ejea de los Caballeros, que continúa siendo el centro logístico de la compañía; y la de Ciudad Real, que, además de contar con las flagships del grupo,
            acoge al equipo de branding y creatividad.<br /><br /> En esta nueva etapa, Tréndico espera continuar con su liderazgo en el sector retail del deporte y la moda. Hoy el grupo cuenta con más de 400 tiendas en España y Andorra, siendo
            la cadena multideporte con más puntos de venta en España. A corto plazo, la compañía tiene prevista una fase de internacionalización: en la actualidad se están llevando a cabo estudios en plazas fuera del territorio nacional.</p>

        <div class="divider divider-center"><i class="icon-line2-book-open"><HiOutlineBookOpen /></i></div>
      </div>

      <div class="content-wrap">
                    <div class="container clearfix">

                        <h3 class="center">Nuestra Historia</h3>

                        <div id="oc-testi" class="owl-carousel testimonials-carousel carousel-widget" data-margin="25" data-items-sm="1" data-items-md="2" data-items-xl="3">


                            <div class="oc-item">
                                <div class="testimonial">

                                    <div id='div-2014' >
                                        <p><b>2014</b>
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={play2} alt="Customer Testimonails" />
                                    </div>
                                    <div id='nacimiento'>
                                        <p><b>NACIMIENTO</b> <br />Apuesta por un modelo de negocio especializado en sneakers:
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={fom_fabicon} alt="Customer Testimonails"   />
                                    </div>
                                    <div id='Nace' >
                                        <p>Nace <b>Foot on Mars</b>
                                        </p>
                                    </div>

                                </div>
                            </div>

   
                            <div class="oc-item">
                                <div class="testimonial">

                                    <div id='div-2017' >
                                        <p><b>2017</b>
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={gps} alt="Customer Testimonails" />
                                    </div>
                                    <div id='apertura'>
                                        <p><b>APERTURA</b> <br />Foot on Mars Andorra.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={play2red} alt="Customer Testimonails" />
                                    </div>
                                    <div id='REDISEÑO' >
                                        <p><b>REDISEÑO</b> <br />Del punto de venta Foot on Mars.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={play2red} alt="Customer Testimonails" />
                                    </div>
                                    <div id='puesta-de-marcha'>
                                        <p>Puesta en marcha de estrategias de visual merchandising.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={play2red} alt="Customer Testimonails" />
                                    </div>
                                    <div id="apuestas" >
                                        <p>Apuesta sólida por el marketing y el branding.
                                        </p>
                                    </div>

                                </div>
                            </div>


                            <div class="oc-item">
                                <div class="testimonial">

                                    <div id="div-2018" >
                                        <p><b>2018</b>
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={shop} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>TIENDA ONLINE</b> <br />Foot on Mars.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={apartements} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>NUEVA SEDE</b> <br />World Trade Center Zaragoza.
                                            <br /><br /> Creación de una insignia vertical para el sector multideporte:
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={atleet} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p>Nace <b>Atleet.</b>
                                        </p>
                                    </div>

                                </div>
                            </div>


                            <div class="oc-item">
                                <div class="testimonial">

                                    <div id='div-2019'>
                                        <p><b>2019</b>
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={point} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>NUEVA ETAPA</b> <br />Tréndico Group.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={flag_red} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>APERTURA FLAGSHIP</b> <br />Foot on Mars Zaragoza.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={book_red} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p>La revista NEO2 publica: <br /><br />
                                            <i>“Foot on Mars la cadena española más importante de sneakers”.
                                            </i>
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={gps} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>APERTURA</b> <br />Foot on Mars Gibraltar.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={flag_blue} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>ATLEET</b> alcanza los 10 putos de venta.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div class="oc-item">
                                <div class="testimonial">

                                    <div id='div-2020' >
                                        <p><b>2020</b>
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={gps_blue} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>APERTURA</b> <br />Atleet Gibraltar.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={flag_blue} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>ATLEET</b> <br />Alcanza los 25 putos de venta.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={flag_red} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>FOOT ON MARS</b> <br />Alcanza los 77 putos de venta.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={shop_blue} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>TIENDA ONLINE</b> <br />Atleet.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={facebook_red}alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>FOOT ON MARS</b> <br />Alcanza 100.000 seguidores en redes.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={facebook_blue} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>ATLEET</b> <br />Alcanza 25.000 seguidores en redes.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="container clearfix">

                        <h3 class="center" >Planes de Futuro</h3>

                        <div id="oc-testi" class="owl-carousel testimonials-carousel carousel-widget"  data-margin="25" data-items-sm="1" data-items-md="2" data-items-xl="2">

                            <div class="oc-item">
                                <div class="testimonial">

                                    <div id='div-2021' >
                                        <p><b>2021</b>
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={shops} alt="Customer Testimonails"  />
                                    </div>
                                    <div>
                                        <p><b>E-COMMERCE</b> <br />Foot on Mars 15%.<br />Atleet 8%
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={flag} alt="Customer Testimonails"  />
                                    </div>
                                    <div >
                                        <p><b>PUNTOS DE VENTA</b> <br />Foot on Mars 90.<br />Atleet 80.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={facebook} alt="Customer Testimonails"  />
                                    </div>
                                    <div >
                                        <p><b>SEGUIDORES</b> <br />Foot on Mars 150.000.<br />Atleet 50.000.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={gps2} alt="Customer Testimonails"  />
                                    </div>
                                    <div >
                                        <p><b>INTERNACIONALIZACIÓN</b> <br />Portugal.<br />Italia.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="oc-item">
                                <div class="testimonial">

                                    <div id='div-2022' >
                                        <p><b>2022</b>
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={shops} alt="Customer Testimonails"  />
                                    </div>
                                    <div >
                                        <p><b>E-COMMERCE</b> <br />Foot on Mars 22%.<br />Atleet 15%.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={flag} alt="Customer Testimonails"  />
                                    </div>
                                    <div >
                                        <p><b>PUNTOS DE VENTA</b> <br />Foot on Mars 105.<br />Atleet 200.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={facebook} alt="Customer Testimonails"  />
                                    </div>
                                    <div >
                                        <p><b>SEGUIDORES</b> <br />Foot on Mars 200.000.<br />Atleet 100.000.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={gps_black} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>INTERNACIONALIZACIÓN</b> <br />Francia.
                                        </p>
                                    </div>
                                    <div class="testi-image">
                                        <img src={pc} alt="Customer Testimonails" />
                                    </div>
                                    <div >
                                        <p><b>DIGITALIZACIÓN 360º</b> <br />Tratamiento del dato. <br />Control.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
        </section>
        <footer id="footer" class="dark">
            <div id="copyrights">
                <div class="container">
                    <div class="row justify-content-between col-mb-30">
                        <div class="col-12 col-lg-auto text-center text-lg-left order-last order-lg-first">
                            <img src={ Trendico_Logo} alt="Image" class="mb-4" width="50%" /><br />
                            COPYRIGHTS &copy; 2021 TRENDICO GROUP S.L.
                        </div>

                        <div class="col-12 col-lg-auto text-center text-lg-right">

                            <div class="copyrights-menu copyright-links">
                                <a href="../">Inicio</a>/
								<a href="/contact">Contacto</a>/
								<a href="/about">Compañía</a>/
								<a href="https://footonmars.com">Foot on Mars</a>/
								<a href="https://atleet.store">Atleet</a>
                            </div>

                            <div class="widget">
                                <div class="row col-mb-30 mb-0">

                                    <div class="col-lg-6">
                                        <div class="footer-big-contacts">
                                            <span><b>LLAMANOS</b></span><br />
                                            +34 976 660 356
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="footer-big-contacts">
                                            <span><b>ENVÍA UN CORREO</b></span><br />
                                            contacto@trendico.es
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default About;
