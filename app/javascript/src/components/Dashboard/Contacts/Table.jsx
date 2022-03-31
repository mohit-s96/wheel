import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { NOTES_TABLE_COLUMN_DATA } from "./constants";

const Table = ({ contacts }) => (
  <div className="notes-table-height w-full">
    <NeetoUITable
      defaultPageSize={10}
      rowData={contacts}
      columnData={NOTES_TABLE_COLUMN_DATA}
      allowRowClick={true}
    />
  </div>
);

export default Table;
