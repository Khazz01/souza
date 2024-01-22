import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Row, Col } from "react-bootstrap";
import { AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

function footer(){

    const currentYear = new Date().getFullYear()
    return(
        <div className="footer" >
            <div  className="link-container">
            <div className="connect-with-me">
           <h1 className="connect">GET IN <strong className="purple">TOUCH </strong> </h1> 
           <p className="connect-p">Feel free to connect with me on</p>
           </div>
           
           <div className="connects">
            <ul className="connect-link">
                <li className="social-icons">
                    <a
                    href="https://www.instagram.com/thebigsouza?igsh=MTV2OGpuOGM0b20wbA%3D%3D&utm_source=qr"
                    target="_blank"
                    className="link-icons">
                    <AiFillInstagram  size=""/>
                    </a>
                </li>

                <li className="social-icons">
                    <a
                    href="https://x.com/deji_souza?s=21"
                    target="_blank"
                    className="link-icons">
                    <AiFillTwitterCircle/>
                    </a>
                </li>

                <li className="social-icons">
                    <a
                    href=""
                    target="_blank"
                    className="link-icons">
                    <AiFillLinkedin/>
                    </a>
                </li>

                <li className="social-icons">
                    <a
                    href="mauriziodasouza02@gmail.com"
                    target="_blank"
                    className="link-icons">
                    <IoMdMail/>
                    </a>
                </li>
            </ul>
           </div>
           </div>
           

            <div className='copywright'>
                <h6 className='developedBy'>Ayomide Da-Souza</h6>
                <p className="footer-copywright">Copyright © {currentYear} </p>
  
        </div>
        </div>
    )
}

export default footer