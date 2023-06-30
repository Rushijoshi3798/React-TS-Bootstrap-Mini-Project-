import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import CreateNotes from "./components/CreateNotes";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Note } from "./models/note.model";

function App() {
  const [toggleText, setToggleText] = useState<string>(
    "Click to See Your Notes"
  );
  const [toggle, setToggle] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings (Default Note)",
      text: "Schedule Meeting with team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  const handleToggle = () => {
    if (toggle === false) {
      setToggleText("Click to See Your Notes");
      setToggle(true);
    } else {
      setToggleText("Click to Create New Note");
      setToggle(false);
    }
  };

  return (
    <>
      <Header />
      <Container className="mt-5 mb-3 center">
        <Row>
          <Col>
            <Button
              id="toggleButton"
              onClick={() => handleToggle()}
              className="mt-5 mb-3 btn-lg d-grid gap-2 col-6 mx-auto"
              variant="warning">
              {toggleText}
            </Button>
          </Col>
        </Row>
      </Container>
      <Container>
        {toggle === false ? (
          <Row>
            <Col>
              <NotesList notes={notes} setNotes={setNotes} />
            </Col>
          </Row>
        ) : (
          <Row>
            <Col>
              <CreateNotes notes={notes} setNotes={setNotes} />
            </Col>
          </Row>
        )}
      </Container>
      {/* <PracticeBootstrap /> */}
    </>
  );
}

export default App;
