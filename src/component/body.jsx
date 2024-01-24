import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Head from "./images/Head1.jpg";
// import {Document, page, pdf, pdfjs} from react-pdf;

import pdf from "./images/Trekkle.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// import homeLogo from "../../Assets/home-main.svg";
import Particle from "./paticles";
// import Home2 from "./Home2";
// import Type from "./Type";


function Body(){

  const [width, setWidth] = useState(1200)

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

    return(
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row className="body-1">
          <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src ={Head}
                alt="home pic"
                className="img-fluid body-img"
                style={{ maxHeight: "450px"}}
              />
              
            </Col>


            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 5, paddingTop: 40}} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name purple"> DA-SOUZA AYOMIDE</strong>
              </h1>

              <div style={{ paddingTop: 10}}>
              <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
              </div>
            </Col>

          </Row>


          <Row className="body-2">
          <Col md={5} className="home-about-description">
            <h1 className="home-about-header" style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            As a Food science and technology student, i gained a keen interest in product and project management 
              <br />
              <br />As a Product Manager,
              <i>
                <b className="purple">I define the product's vision. </b>
              </i>
              <br />
              <br />
              My role involves a combination of &nbsp;
              <i>
                <b className="purple">strategic planning,cross-functional collaboration </b> and
                {" "}
                <b className="purple">
                customer-centric decision-making.
                </b>
              </i>
              <br />
              <br />
              I believe i am a work in progress, and this page is a window into my journey of balancing a promising career with a life filled with passion and exploration. So, buckle up and join the ride there's always something new to discover! 
            </p>
          
          </Col> 


         <Col md={6} className='body-cert'>
         <h1 style={{ fontSize: "1.3em" }}>
              LINK TO A <span className="purple"> PROJECT </span> I WORKED ON
            </h1>
            <p><a style={{textDecoration: "none"}} href="https://docs.google.com/document/d/1bV7KuiASlNOEKKzb4hhJd0qQoHrNEYYEamsFQju8cf8/edit?usp=sharing&amp%3Busp=embed_facebook">TREKKLE PANTHEON CHALLENGE</a></p>
        <Document file={pdf} className="d-flex justify-content-center ">
        <Page pageNumber={1} scale={width>993?0.5:0.4}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        customTextRenderer={false} />
          </Document>
    

          </Col>
        </Row>
        </Container>
      </Container>
  
    </section>
  );
}

export default Body;
