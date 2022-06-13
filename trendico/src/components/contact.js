import React ,{ Component}from "react";
import "./style/contact.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import logo_grey from "../images/logo/grey.png";


   


const Contact = () => {
    
    return(
        <div>
            <body class="stretched">
                <div id="wrapper" class="clearfix">

                <Navbar className="navBg" variant="dark" expand="lg">
            
            <Container>
                <div>
                    <Navbar.Brand  className="navbar-brand" as={Link} to="/" >
                        <div id="black-logo" >
                            <a href="/" class="standard-logo" data-dark-logo={logo_grey}><img src={logo_grey} alt="Canvas Logo" /></a>

                        </div>
                    </Navbar.Brand>
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="menu-link-contact" as={Link} to="/" >Inicio</Nav.Link>
                        <Nav.Link className="menu-link-contact" as={Link} to="/about">Compañia</Nav.Link>     
                        <Nav.Link className="menu-link-contact" as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link className="menu-link">
                            <nav class="primary-menu">
                                <ul class="menu-container">
                                    <li class="menu-item">
                                        <a  href="">
                                            <div id="menu-nm">NUESTRAS MARCAS</div>
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
                        <Nav.Link className="menu-link-contact"  href="https://trendico.net/#/login">Area socios</Nav.Link>           
                    </Nav>
                    </Navbar.Collapse>
                </div>
  
              </Container>
          </Navbar>  
  
  
            <section>
                <Outlet></Outlet>
            </section> 
                    <section id="page-title">
                        <div class="container clearfix">
                            <h1>Contacto</h1>
                            <span>Ponte en Contacto con Nosotros</span>
                        </div>
                    </section>
                    <section class="gmap slider-parallax vh-80" id="googlemap"></section>
                    <div id="page-menu">
                    <div id="page-menu-wrap">
                        <div class="container">
                            <div class="page-menu-row">
                                <div class="page-menu-title" >
                                    Contacta con <span>Nosotros</span>
                                </div>
                                <div id="page-menu-trigger">
                                    <i class="icon-reorder"></i>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div><br />
                </div>

            <section id="content">
                <div class="content-wrap">
                    <div class="container">
                        <div class="row gutter-40 col-mb-80">
                            <div class="postcontent col-lg-9">
                                <h3>Envíanos un Correo</h3>
                                <div class="form-widget">
                                    <div class="form-result"></div>

                                    <form class="mb-0" id="contacto" onsubmit="submitForm(); return false;" enctype="multipart/form-data">
                                        <div class="row">

                                            <div class="col-md-4 form-group">
                                                <label for="template-contactform-name">Nombre <small>*</small></label>
                                                <input type="text" id="nombre" name="nombre" class="sm-form-control required" />
                                            </div>

                                            <div class="col-md-4 form-group">
                                                <label for="template-contactform-email">Email <small>*</small></label>
                                                <input type="email" id="email" name="email" class="required email sm-form-control" />
                                            </div>

                                            <div class="col-md-4 form-group">
                                                <label for="template-contactform-phone">Teléfono</label>
                                                <input type="text" id="telefono" name="telefono" class="sm-form-control" />
                                            </div>

                                            <div class="w-100"></div>

                                            <div class="col-md-12 form-group">
                                                <label for="template-contactform-subject">Asunto<small>*</small></label>
                                                <input type="text" id="asunto" name="asunto" class="required sm-form-control" />
                                            </div>

                                            <div class="w-100"></div>

                                            <div class="col-12 form-group">
                                                <label for="template-contactform-message">Mensaje <small>*</small></label>
                                                <textarea class="required sm-form-control" id="mensaje" name="mensaje" rows="6" cols="30"></textarea><br />
                                                <input class="button button-3d m-0" type="submit" id="contacto" value="Enviar Mensaje" />
                                            </div>

                                            <div class="col-12 form-group">
                                                <label for="template-contactform-message">O Manda un <small></small></label>
                                                <a href="mailto:contacto@trendico.es">CORREO</a>
                                            </div>

                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>
                </div>
                </div>
            </section>
            
        </body>
        
    </div>
    )
}
export default Contact ;