import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">News</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Projects</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    width={900}
                    height={400}
                    src="https://i.pinimg.com/originals/d5/ce/7c/d5ce7c4ba78cac419901a8e18dae238a.jpg"
                  />
                  <p>
                    Веб-дизайн — отрасль веб-разработки и разновидность дизайна,
                    в задачи которой входит проектирование пользовательских
                    веб-интерфейсов для сайтов или веб-приложений.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    width={900}
                    height={400}
                    src="https://redokun.imgix.net/wp/assets/2020/01/16052946/vintage-newspaper-templates-004.jpg"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    width={900}
                    height={400}
                    src="https://archello.s3.eu-central-1.amazonaws.com/images/2020/07/10/Untitled-2.1594390617.4937.jpg"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
