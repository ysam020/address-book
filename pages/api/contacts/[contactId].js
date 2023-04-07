import { contactsData } from "@/assets/data/contactsData";

export default function handle(req, res) {
  const { contactId } = req.query;
  const index = contactsData.findIndex((contact) => contact.id === +contactId);

  if (req.method === "GET") {
    const contact = contactsData.find((contact) => contact.id === +contactId);
    res.status(200).json(contact);
  } else if (req.method === "DELETE") {
    const deletedContact = contactsData.find(
      (contact) => contact.id === +contactId
    );
    contactsData.splice(index, 1);
    res.status(200).json(deletedContact);
  } else if (req.method === "PUT") {
    const updatedContact = req.body;
    if (index === -1) {
      res.status(404).json({ error: "Contact not found" });
    } else {
      contactsData[index] = updatedContact;
      res.status(200).json(updatedContact);
    }
  }
}
