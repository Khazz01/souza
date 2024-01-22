import react from "react"
import { Container, ContainerFluid, Row, Col, Carousel } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Extensive from "./extensive";
import Cert1 from "../../component/images/cert1.png"
import Cert2 from "../../component/images/cert2.png"
import Head5 from "../../component/images/Head5.PNG"

function About(){
    return(
        <Container fluid className="about-section">
        <Container>
          <Row className="about-row" style={{ justifyContent: "center", padding: "10px"}}>
            <Col
              md={12}
              lg={6}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Who </strong> I'm I?
              </h1>
              <Aboutcard />
            </Col>

            {/* <Col
              md={6}
              lg={6}
              className="About-col">
    <Carousel className="About-carousel" indicators={false} controls={false}>
      <Carousel.Item className="Carousel-image">
      <img
                src ={AboutHead}
                alt="about" className="img-fluid img-carousel " 
                height="450px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carousel-image">
      <img
                src ={AboutHead}
                alt="about" className="img-fluid "
                height="450px"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Carousel-image">
      <img
                src ={AboutHead}
                alt="about" className="img-fluid 
                "height="450px"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col> */}
            <Col
              md={12}
              lg={6}
              className="About-col">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators" style={{color: "green"}}>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" style={{color: "green"}} aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
              <img
                src ={Head5}
                alt="about" className="img-fluid carousel-image
                "height="450px"/>
              </div>

              <div class="carousel-item imgEdit">
                <img
                src ={Cert1}
                alt="about" className="img-fluid carousel-image
                "height="450px"/>
              </div>
              
              <div class="carousel-item imgEdit">
                <img
                src ={Cert2}
                alt="about" className="img-fluid carousel-image
                "height="450px"/>
              </div>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button> */}
          </div>
          </Col>
          </Row>


          <h1 className="project-heading">
          <strong className="purple">What </strong> I Do?
          </h1>
  
            <Extensive/>
          
  
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Techstack/>
        
          </Container>
          </Container>
          )

    }

    export default About;