import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Table as NeetoUITable, Button } from "neetoui";

import { NOTES_TABLE_COLUMN_DATA } from "./constants";

const AlertContext = React.createContext();

const useDeletAlertContext = () => {
  const { setShowDeleteAlert } = React.useContext(AlertContext);

  if (!setShowDeleteAlert) {
    throw new Error(
      "setShowDeleteAlert is only available inside AlertContext provider"
    );
  }

  return { setShowDeleteAlert };
};

const RowSettingsIcon = () => {
  const { setShowDeleteAlert } = useDeletAlertContext();

  return (
    <Button style="text" icon={MenuHorizontal} onClick={setShowDeleteAlert} />
  );
};

const Table = ({ contacts, setShowDeleteAlert }) => (
  <AlertContext.Provider value={{ setShowDeleteAlert }}>
    <div className="notes-table-height w-full">
      <NeetoUITable
        defaultPageSize={10}
        rowData={contacts}
        columnData={NOTES_TABLE_COLUMN_DATA}
        allowRowClick={true}
      />
    </div>
  </AlertContext.Provider>
);

export default Table;
export { useDeletAlertContext, RowSettingsIcon };
