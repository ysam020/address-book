import { contactsData } from "@/assets/data/contactsData";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(contactsData);
  } else if (req.method === "POST") {
    const { id, name, contact } = req.body;
    const newContact = { id, name, contact };
    contactsData.push(newContact);
    res.status(201).json(newContact);
  }
}
