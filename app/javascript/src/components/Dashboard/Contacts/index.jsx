import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { MOCK_CONTACTS } from "./constants";
import SideMenu from "./ContactsMenu";
import NewContactPane from "./Pane/Create";
import Table from "./Table";
import { createMockArray } from "./utils";

const contacts = createMockArray(200, MOCK_CONTACTS);

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewContactPane, setShowNewContactPane] = useState(false);

  return (
    <>
      <SideMenu showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          menuBarToggle={() => setShowMenu(!showMenu)}
          actionBlock={
            <Button
              onClick={() => setShowNewContactPane(true)}
              label="Add New Note"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {contacts.length ? (
          <Table contacts={contacts} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any contacts!"
            subtitle="Add your contacts to send customized emails to them."
            primaryActionLabel="Add New Contact"
            primaryAction={() => {}}
          />
        )}
        <NewContactPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
        />
      </Container>
    </>
  );
};

export default Contacts;
