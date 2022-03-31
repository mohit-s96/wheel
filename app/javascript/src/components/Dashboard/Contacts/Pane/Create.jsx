import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import {
  CONTACTS_FORM_INITIAL_FORM_VALUES,
  NO_OP_FUNCTION,
} from "../constants";

export default function NewContactPane({ showPane, setShowPane }) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add a New Contact
        </Typography>
      </Pane.Header>
      <Form
        onClose={onClose}
        refetch={NO_OP_FUNCTION}
        contact={CONTACTS_FORM_INITIAL_FORM_VALUES}
      />
    </Pane>
  );
}
