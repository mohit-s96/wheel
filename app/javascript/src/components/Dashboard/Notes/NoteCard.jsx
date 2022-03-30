import React from "react";

import { Clock, MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Avatar, Tag, Dropdown } from "neetoui";

const NoteCard = ({
  note: { title, description, tags = [{ tag: "Getting Started" }], id },
  note,
  setSelectedNoteIds,
  setShowDeleteAlert,
  setShowEditPane,
  setSelectedNote,
}) => {
  const handleDeleteNote = () => {
    setShowDeleteAlert(true);
    setSelectedNoteIds([id]);
  };
  const handleEditNote = () => {
    setShowEditPane(true);
    setSelectedNote(note);
  };
  return (
    <div className="neeto-ui-border-gray-300 my-4 flex flex-col border-2 px-1">
      <div className="p-2">
        <div className="mt-2 flex justify-between px-2">
          <Typography className="" style="h3">
            {title}
          </Typography>
          <Dropdown icon={MenuVertical} buttonStyle="text" position="auto-end">
            <li className="my-1" onClick={handleEditNote}>
              Edit
            </li>
            <li className="my-1" onClick={handleDeleteNote}>
              Delete
            </li>
          </Dropdown>
        </div>
        <Typography className="neeto-ui-text-gray-600 p-2" style="body2">
          {description}
        </Typography>
        <div className="mt-1 px-2">
          <div className="neeto-ui-border-gray-200 border-b-2 p-1"></div>
        </div>
      </div>
      <div className="flex justify-between p-4">
        {tags.map(({ tag }) => (
          <Tag label={tag} key={tag} />
        ))}
        <div className="neeto-ui-text-gray-600 flex items-center gap-3">
          <Clock size={18} />
          <Typography style="body2">Created 2 hours ago</Typography>
          <Avatar
            size="small"
            user={{
              name: "mohit srivastava",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
