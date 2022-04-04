import React from "react";

import { Avatar, Typography } from "neetoui";
import * as yup from "yup";

import { RowSettingsIcon } from "./Table";

export const noop = () => {};

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().email().required("Email is requires"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Name and Role",
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: name => (
      <div className="flex gap-3">
        <Avatar user={{ name }} />
        <div>
          <Typography style="h5">{name}</Typography>
          <Typography style="body3" className="neeto-ui-text-gray-600">
            Owner
          </Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "25%",
  },
  {
    title: "Created At",
    dataIndex: "created",
    key: "created",
    width: "25%",
  },
  {
    title: "settings",
    render: RowSettingsIcon,
    dataIndex: "settings",
    key: "settings",
    width: "20%",
  },
];

export const MOCK_CONTACTS = [
  {
    name: "Mohit Srivastava",
    email: "mohit.srivastava@bigbinary.com",
    created: "March 22, 2022",
  },
  {
    name: "Ronald Richards",
    email: "ronald@bigbinary.com",
    created: "Feb 5, 2021",
  },
];
