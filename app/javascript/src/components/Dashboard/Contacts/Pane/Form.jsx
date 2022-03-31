import React, { useState } from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Button, Pane, Select, Toastr } from "neetoui";
import { Input } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA } from "../constants";

export default function NoteForm({ onClose, refetch, contact }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    try {
      Toastr.success("Contact added successfully!!");
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full justify-between gap-4">
              <Input
                required
                label="First Name"
                name="first_name"
                className="w-6/12 flex-grow-0"
                placeholder="Enter first name"
              />
              <Input
                required
                label="Last Name"
                name="last_name"
                className="w-6/12 flex-grow-0"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              label="Email Address"
              name="email"
              className="w-full flex-grow-0"
              placeholder="Enter your email address"
            />
            <Select
              required
              isClearable
              isSearchable
              label="Role"
              name="role"
              size="large"
              className="w-full flex-grow-0"
              placeholder="Select Role"
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
              label={"Save Changes"}
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
