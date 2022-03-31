import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Avatar, Typography } from "neetoui";

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
    render: () => <MenuHorizontal color="#68737d" size="24" />,
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
