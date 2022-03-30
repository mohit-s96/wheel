import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import NotesMenu from "./MenuBar";
import NewNotePane from "./Pane/Create";
import Table from "./Table";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <NotesMenu showMenu={showMenu} />
      <Container>
        <Header
          title="All Notes"
          menuBarToggle={() => setShowMenu(!showMenu)}
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add New Note"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          <Table
            notes={notes}
            fetchNotes={fetchNotes}
            setSelectedNoteIds={setSelectedNoteIds}
            setShowDeleteAlert={setShowDeleteAlert}
          />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={fetchNotes}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteIds={selectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
            refetch={fetchNotes}
            setSelectedNoteIds={setSelectedNoteIds}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
