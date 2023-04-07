import { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import {
  CloseRounded,
  DeleteForeverRounded,
  ModeEditOutlineRounded,
} from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";

function ContactDetails(props) {
  const [editContact, setEditContact] = useState(false);
  const { id } = props.contact;
  const [data, setData] = useState();
  const [nameField, setNameField] = useState(data?.name);
  const [contactField, setContactField] = useState(data?.contact);

  const handleSubmit = () => {
    const updatedContact = {
      id,
      ...data,
      name: nameField === undefined ? data?.name : nameField,
      contact: contactField === undefined ? data.contact : contactField,
    };
    props.handleUpdate(id, updatedContact);
    setEditContact(false);
  };

  useEffect(() => {
    const fetchContact = async () => {
      const response = await fetch(`/api/contacts/${id}`);
      const apiData = await response.json();
      setData(apiData);
    };

    fetchContact();
  }, [handleSubmit]);

  return (
    <>
      <div className="contact-details">
        <div className="contact-details-header">
          <IconButton onClick={() => props.setDisplayContact(false)}>
            <CloseRounded sx={{ color: "#fff" }} />
          </IconButton>
        </div>
        <div className="contact-details-body">
          <div className="contact-info">
            <Avatar
              sx={{ width: "80px !important", height: "80px !important" }}
              alt="photo"
            />
            <div className="contact-info-text">
              {editContact ? (
                <>
                  <input
                    type="text"
                    defaultValue={data.name}
                    style={{
                      borderBottom: editContact ? "2px solid #252E3E" : "",
                    }}
                    className="edit-name-input"
                    onChange={(e) => setNameField(e.target.value)}
                  />
                  <input
                    type="text"
                    defaultValue={data.contact}
                    style={{
                      borderBottom: editContact ? "2px solid #252E3E" : "",
                    }}
                    className="edit-contact-input"
                    onChange={(e) => setContactField(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <h3>{data?.name}</h3>
                  <p>{data?.contact}</p>
                </>
              )}
            </div>
            {editContact ? (
              <IconButton
                onClick={() => {
                  setEditContact(false);
                  handleSubmit();
                }}
              >
                <DoneIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  setEditContact(true);
                }}
              >
                <ModeEditOutlineRounded />
              </IconButton>
            )}
          </div>

          <div
            className="delete-contact"
            style={{ display: "flex", alignItems: "center", color: "red" }}
          >
            <DeleteForeverRounded sx={{ color: "red" }} />
            <h5
              style={{ cursor: "pointer" }}
              onClick={() => props.handleDelete(id, props.setData)}
            >
              Delete Contact
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
