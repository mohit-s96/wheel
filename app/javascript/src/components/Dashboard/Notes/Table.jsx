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
  const [selectedNote, setSelectedNote] = useState({});
  return (
    <>
      <div className="notes-table-height w-full">
        {notes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            setSelectedNoteIds={setSelectedNoteIds}
            setShowDeleteAlert={setShowDeleteAlert}
            setShowEditPane={setShowEditNote}
            setSelectedNote={setSelectedNote}
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
