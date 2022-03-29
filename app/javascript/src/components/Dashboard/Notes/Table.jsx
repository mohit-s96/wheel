import React, { useState } from "react";

import NoteCard from "./NoteCard";
import EditNotePane from "./Pane/Edit";

const Table = ({ notes = [], fetchNotes }) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote] = useState({});
  return (
    <>
      <div className="notes-table-height w-full">
        {notes.map(note => (
          <NoteCard
            key={note.id}
            title={note.title}
            createdAt="2"
            body={note.description}
          />
        ))}
      </div>
      <EditNotePane
        showPane={showEditNote}
        setShowPane={setShowEditNote}
        fetchNotes={fetchNotes}
        note={selectedNote}
      />
    </>
  );
};

export default Table;
