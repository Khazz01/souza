import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiTrello,
  SiJira,
  SiCanva ,
  SiAsana ,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { GrPersonalComputer } from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <GrPersonalComputer  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAsana  />
      </Col>
    </Row>
  );
}

export default Techstack;
