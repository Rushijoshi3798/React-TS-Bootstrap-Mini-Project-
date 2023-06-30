import * as React from "react";
import { Container, Navbar } from "react-bootstrap";

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" className="pt-3 pb-3">
        <Container>
          <Navbar.Brand>React + TS + Bootstrap Project</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
