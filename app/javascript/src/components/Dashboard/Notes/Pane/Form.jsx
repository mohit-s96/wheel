import React, { useState } from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Button, Pane, Select } from "neetoui";
import { Input, Textarea } from "neetoui/formik";

import notesApi from "apis/notes";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../constants";

export default function NoteForm({ onClose, refetch, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              className="w-full flex-grow-0"
              placeholder="Enter a title"
              required
            />
            <Textarea
              required
              rows={2}
              label="Description"
              name="description"
              className="w-full flex-grow-0"
              placeholder="Enter note description"
            />
            <Select
              required
              isClearable
              isSearchable
              label="Assigned Contacts"
              name="ContactList"
              size="large"
              className="w-full flex-grow-0"
              placeholder="Select a role"
              options={[
                {
                  label: "Mohit Srivastava",
                  value: "mohit-s96",
                },
                {
                  label: "Mohit Srivastava",
                  value: "mohit-s96",
                },
                {
                  label: "Mohit Srivastava",
                  value: "mohit-s96",
                },
              ]}
            />
            <Select
              required
              isClearable
              isSearchable
              label="Tags"
              name="tags"
              size="large"
              className="w-full flex-grow-0"
              placeholder="Select a tag"
              options={[
                {
                  label: "Getting Started",
                  value: "gettingStarted",
                },
                {
                  label: "Urgent",
                  value: "urgent",
                },
                {
                  label: "Website",
                  value: "website",
                },
              ]}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              size="large"
              style="primary"
              className="mr-3"
              icon={Check}
              iconPosition="right"
              label={isEdit ? "Update" : "Save Changes"}
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
