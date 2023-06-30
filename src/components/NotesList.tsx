import * as React from "react";
import { Note } from "../models/note.model";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    //console.log("The Note has to be Deleted", id);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return (
        <Notes key={note.id} note={note} handleDelete={handleDelete}></Notes>
      );
    });
  };
  return (
    <div>
      <h2>Your Notes</h2>
      {renderNotes()}
    </div>
  );
};

export default NotesList;
