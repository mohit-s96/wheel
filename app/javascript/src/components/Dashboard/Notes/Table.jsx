import React, { useState } from "react";

import NoteCard from "./NoteCard";
import EditNotePane from "./Pane/Edit";

const Table = ({
  notes = [],
  fetchNotes,
  setSelectedNoteIds,
  setShowDeleteAlert,
}) => {
  const [showEditNote, setShowEditNote] = useState(false);
  return (
    <>
      <div className="notes-table-height w-full">
        {notes.map(note => (
          <NoteCard
            setSelectedNoteIds={setSelectedNoteIds}
            setShowDeleteAlert={setShowDeleteAlert}
            key={note.id}
            title={note.title}
            createdAt="2"
            body={note.description}
            id={note.id}
          />
        ))}
      </div>
      <EditNotePane
        showPane={showEditNote}
        setShowPane={setShowEditNote}
        fetchNotes={fetchNotes}
        note={[]}
      />
    </>
  );
};

export default Table;
