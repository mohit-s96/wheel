import React, { useState } from "react";

import { Modal, Typography, Button } from "neetoui";

import notesApi from "apis/notes";

const DeleteAlert = ({
  refetch,
  onClose,
  selectedNoteIds,
  setSelectedNoteIds,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy({ ids: selectedNoteIds });
      onClose();
      setSelectedNoteIds([]);
      refetch();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Modal
      isOpen
      onClose={onClose}
      size="md"
      closeButton={false}
      loading={deleting}
    >
      <Modal.Header>
        <Typography style="h2">Delete Note</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete this note? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button size="large" label="Continue" onClick={handleDelete} />
        <Button style="text" size="large" label="Cancel" onClick={onClose} />
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteAlert;
