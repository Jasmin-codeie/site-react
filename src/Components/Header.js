import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import logo from "./logo192.png";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="nd" bg="light" variant="light">
        <Container>
          <Navbar.brand href="/">
            <img
              src={}
              heigth="30"
              width="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav classname="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="/contacts">Contacts</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
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
    );
  }
}
