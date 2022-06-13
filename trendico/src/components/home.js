import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

import './style/navbar.css'
import logo_white from "../images/logo/logo-white.png";
import '../App.css';
import Video from '../videos/trendico_home.mp4';
import Atleet from '../images/logo/Atleet-Gris.svg';
import Foot_On_Mars from "../images/logo/FootOnMars-Gris.svg";
import Torres2 from "../images/torres2.jpg";
import Trendico_Logo from "../images/logo/trendico_logo.svg";

import { AiOutlineClockCircle, AiFillTrophy, AiOutlineDesktop } from "react-icons/ai"
import { IoLocationOutline } from "react-icons/io5";
import {IoIosArrowUp } from "react-icons/io";
import { FaUserCheck } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { FiSmile } from "react-icons/fi";

function Home() {
  return (
    <div className="App">
    <body class="stretched" id="trendico">
    <div id="wrapper" class="clearfix">
    <section id="slider" class="slider-element slider-parallax swiper_wrapper min-vh-60 min-vh-md-100 include-header">            
    <div class="slider-inner">
    <div class="swiper-container swiper-parent">
    <div class="swiper-wrapper">
        <Navbar className="navBg" variant="dark" expand="lg">
            
            <Container>
                <div id='inicio'>
                    <Navbar.Brand  className="navbar-brand" as={Link} to="/" >
                        <div id="logo" >
                            <a href="/" class="standard-logo" data-dark-logo={logo_white}><img src={logo_white} alt="Canvas Logo" /></a>
                            <a href="/" class="retina-logo" data-dark-logo={logo_white}><img src={logo_white} alt="Canvas Logo" /></a>
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
                            <nav className="primary-menu">
                                <ul className="menu-container">
                                    <li className="menu-item menu-nuestrasm">
                                        <a  href="">
                                            <div className="menu-nm" >NUESTRAS MARCAS</div>
                                        </a>
                                        <ul className="sub-menu-container">
                                            <li class="menu-item">
                                                <a class="menu-link fom" href="https://footonmars.com/">
                                                    <div className='footonmarsmenu'>Foot On Mars</div>
                                                </a>
                                            </li>
                                            <li class="menu-item">
                                                <a class="menu-link" href="https://atleet.store/">
                                                    <div className="atleetmenu">Atleet</div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>  
                                </ul>
                            </nav>
                        </Nav.Link>
                        <Nav.Link className="menu-link" as={Link} to="/contact">Contact</Nav.Link>   
                        <Nav.Link className="menu-link"  href="https://trendico.net/#/login">areasocios</Nav.Link>        
                    </Nav>
                    </Navbar.Collapse>
                </div>

            </Container>
        </Navbar>  


        <section>
            <Outlet></Outlet>
        </section> 
                  <div>
                      <div class="container">
                        <div class="slider-caption slider-caption-center">
                          <h1 data-animate="fadeInUp">Tréndico Group</h1>
                          <p class="d-none d-sm-block" data-animate="fadeInUp" data-delay="200" />          
                        </div>
                      </div>
                      <div class="video-wrap no-placeholder">
                        <video id="slide-video" preload="auto" loop="" autoplay="" muted="" playsinline="">
                          <source src={Video} type='video/mp4' />
                        </video>
                        <div class="video-overlay" ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#content" data-scrollto="#content" data-offset="100" class="one-page-arrow dark"><i class="icon-angle-down infinite animated fadeInDown"></i></a>
              </div>
          </section>
          <section id="content">
            <div class="content-wrap">
              <div class="heading-block topmargin-lg center">
                <h2>La Evolución es la Clave del Éxito</h2>
                <span class="mx-auto" >Después de 15 años de andadura, la evolución que ha experimentado 
                    la compañía en los últimos años ha dependido de: 
                  <br />El nacimiento de tres nuevas enseñas, el crecimiento del número de tiendas y la 
                  firme apuesta por la verticalización y digitalización de los modelos y formatos como valor competitivo.
					      </span>
                </div>
            </div>
            <div class="divider divider-center"><i class="icon-lightbulb"></i></div>

            <ul class="testimonials-grid grid-1 grid-md-2">
                <li class="grid-item">
                    <div class="testimonial">
                        <div class="testi-image">
                          <i class="fa-thin fa-user-check i-plain color i-large icon-line2-user-following inline-block "><FaUserCheck /></i>
                        </div>
                        <div class="testi-content">
                            <h3>GENDER</h3>
                            <p>Arquitectura basada en GÉNERO. Relevancia en comunicación, punto de venta y producto de las categorías WOMEN y JUNIOR. Sección de producto unisex.</p>
                        </div>
                    </div>
                </li>
                <li class="grid-item">
                    <div class="testimonial">
                        <div class="testi-image">
                            <i class="i-plain color i-large icon-line2-list inline-block"><TbMenu2 /></i>
                        </div>
                        <div class="testi-content">
                            <h3>VERTICALIZACIÓN</h3>
                            <p>La verticalización como un axioma. Objetivo: Optimización del PdV y máxima eficacia acciones digitales/marketing. Estrategia sostenibilidad.</p>
                        </div>
                    </div>
                </li>
                <li class="grid-item">
                    <div class="testimonial">
                        <div class="testi-image">
                            <i class="i-plain color i-large icon-desktop1 inline-block"><AiOutlineDesktop /></i>
                        </div>
                        <div class="testi-content">
                            <h3>DIGITALIZACIÓN</h3>
                            <p>Más inversión en tecnología. Análisis de datos. Conocimiento.
                            </p>
                        </div>
                    </div>
                </li>
                <li class="grid-item">
                    <div class="testimonial">
                        <div class="testi-image">
                            <i class="i-plain color i-large icon-line-smile inline-block" ><FiSmile /></i>
                        </div>
                        <div class="testi-content">
                            <h3>EXPERIENCIA DE USUARIO</h3>
                            <p>Comercio 24/7 en digital. Click & Collect en local. Eventos locales.</p>
                        </div>
                    </div>
                </li>
            </ul>

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
                            <div class="heading-block border-bottom-0">
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
            </div><br /><br />


            <section id="page-title" class="fluid include-header min-vh-75 dark" >
                <div class="shape-divider" data-shape="valley-3" data-height="150" ></div>
                <div class="container" >
                    <div class="col-lg-6 bottommargin" >
                      <img src={ Torres2 } alt="Torres2.jpg" ></img>
                    </div>
                </div>
                <div class="swiper-slide-bg lazy"  data-bg="images/torres2.jpg"></div>
                <div class="shape-divider" data-shape="valley" data-position="bottom" data-height="120" data-flip="true" data-flip-vertical="true" data-fill="#FFF"></div>
            </section>


            <div class="container clearfix">
                <ul id="oc-clients" class='brand-list'>
                    <li class="brand">
                        <a href="https://atleet.store/" ><img src={ Atleet } alt="Clients"  /></a>
                    </li>
                    <li class="brand">
                        <a href="https://footonmars.com/" ><img src={Foot_On_Mars} alt="Clients"  /></a>
                    </li>
                </ul>
            </div>
            </section>
        </div>


      </body>
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
        <div ><a href="#trendico"><i id="gotoTop"><IoIosArrowUp /></i></a></div>

    </div>
  );
}

export default Home;