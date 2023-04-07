import React from "react";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { validationSchema } from "../schema/AddContactSchema";
import { checkContactExists } from "@/utils/checkContactExists";

const AddContactForm = (props) => {
  const formik = useFormik({
    initialValues: {
      id: props.data.length + 1,
      name: "",
      contact: "",
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const contactExists = await checkContactExists(values.contact);
      if (contactExists) {
        alert("The phone number already exists.");
        return;
      }

      const response = await fetch("/api/contacts/", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newContact = await response.json();

      props.handleAddContact(newContact);
      props.handleCloseModal();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        type="contact"
        size="small"
        margin="dense"
        variant="filled"
        fullWidth
        id="contact"
        name="contact"
        label="Contact"
        value={formik.values.contact}
        onChange={formik.handleChange}
        error={formik.touched.contact && Boolean(formik.errors.contact)}
        helperText={formik.touched.contact && formik.errors.contact}
      />

      <Button fullWidth type="submit" className="submit-form-btn">
        Add
      </Button>
    </form>
  );
};

export default AddContactForm;
