import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ContactDetails from "./ContactDetails";
import { fetchContacts } from "@/utils/fetchContacts";
import { deleteContact } from "@/utils/deleteContacts";
import { updateContact } from "@/utils/updateContact";
import AddContact from "./AddContact";

function Contacts() {
  const [displayContact, setDisplayContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState();
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    fetchContacts(setData);
  }, []);

  const handleDelete = async (id) => {
    await deleteContact(id);
    fetchContacts(setData);
    setDisplayContact(false);
  };

  const handleUpdate = async (id, updatedContact) => {
    await updateContact(id, updatedContact);
    const updatedData = await fetchContacts(setData);
    if (updatedData) {
      setData(updatedData);
    }
  };

  const handleAddContact = (newContact) => {
    console.log(newContact);
    setData([...data, newContact]);
  };

  const handleSearchChange = (event) => {
    setSearchPhrase(event.target.value);
  };

  const filteredContacts = data.filter((contact) =>
    contact.name.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return (
    <>
      <div className="contacts-container">
        <div className="contact-list-container">
          <div className="search-contacts">
            <input
              type="text"
              placeholder="Search contact"
              value={searchPhrase}
              onChange={handleSearchChange}
            />
            <IconButton onClick={() => handleOpenModal()}>
              <AddBoxIcon
                sx={{ color: "#252E3E", width: "50px", height: "50px" }}
              />
            </IconButton>
          </div>
          <div className="contacts">
            {filteredContacts.map((contact) => {
              return (
                <div
                  key={contact?.id}
                  onClick={() => {
                    setDisplayContact(true);
                    setSelectedContact(contact);
                  }}
                >
                  <div className="contact-list-item">
                    <Avatar />
                    <div className="contacts-text">
                      <h5>{contact?.name}</h5>
                      <p>{contact?.contact}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>

        {displayContact && (
          <ContactDetails
            setDisplayContact={setDisplayContact}
            contact={selectedContact}
            setData={setData}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </div>

      <AddContact
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        handleAddContact={handleAddContact}
        data={data}
      />
    </>
  );
}

export default Contacts;
