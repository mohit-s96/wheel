import React from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Modal, Typography, Button, Toastr } from "neetoui";

const DeleteAlert = ({ refetch, onClose }) => {
  const handleDelete = () => {
    try {
      Toastr.success("Contact deleted successfully!!");
      onClose();
      refetch();
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <Modal isOpen onClose={onClose} size="md" closeButton={false}>
      <Modal.Header>
        <Typography style="h2">Delete Contact</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography style="body2" lineHeight="normal">
          Are you sure you want to delete this contact? These changes cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button
          size="large"
          label="Continue"
          iconPosition="right"
          icon={Check}
          onClick={handleDelete}
        />
        <Button style="text" size="large" label="Cancel" onClick={onClose} />
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteAlert;
