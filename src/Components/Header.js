import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./logo192.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="md"
          bg="light"
          variant="light"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                heigth="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
              React site
            </Navbar.Brand>
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
                  className="mr-sm-1"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
