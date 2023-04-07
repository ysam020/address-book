import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddContactForm from "@/forms/AddContactForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AddContact(props) {
  return (
    <div>
      <Modal
        open={props.openModal}
        onClose={props.handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddContactForm
            handleCloseModal={props.handleCloseModal}
            handleAddContact={props.handleAddContact}
            data={props.data}
          />
        </Box>
      </Modal>
    </div>
  );
}
