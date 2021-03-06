import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/">Company Light</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/contacts">Contacts</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </Router>
      </>
    );
  }
}
