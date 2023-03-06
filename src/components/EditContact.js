import { Button, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContact, updateContact, addContact } from "../api/contact";
import { showSuccess, showWarning } from "../utils/alert";

const DEFAULT_CONTACT = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  middle_initial: "",
  country_code: "",
};

export function EditContact() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  async function loadContact(id) {
    const contactData = await getContact(id);
    setContact(contactData);
  }

  useEffect(() => {
    if (id && id !== "new") {
      loadContact(id);
    } else if (id && id === "new") {
      setContact({ ...DEFAULT_CONTACT });
    }
  }, [id]);

  const handleChange = (e) => {
    contact[e.target.name] = e.target.value;
    setContact({ ...contact });
  };

  const handleSave = async () => {
    const updateData = {};

    if (contact?.phone_number) {
      updateData["phone_number"] = contact["phone_number"];
    }

    if (contact?.first_name) {
      updateData["first_name"] = contact["first_name"];
    }

    if (contact?.last_name) {
      updateData["last_name"] = contact["last_name"];
    }

    if (contact?.middle_initial) {
      updateData["middle_initial"] = contact["middle_initial"];
    }

    if (contact?.email) {
      updateData["email"] = contact["email"];
    }

    if (contact.country_code) {
      updateData["country_code"] = contact["country_code"];
    }

    if (contact.birth_date) {
      updateData["birth_date"] = moment(contact["birth_date"]).format(
        "YYYY-MM-DD"
      );
    }

    try {
      if (id === "new") {
        const addedContact = await addContact(updateData);
      } else {
        const updatedContact = await updateContact(id, updateData);
      }

      showSuccess("Successfully Updated");
    } catch (e) {
      showWarning(e.response.data.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <TextField
        label="First Name"
        variant="standard"
        name="first_name"
        value={contact?.first_name}
        onInput={handleChange}
        fullWidth
      />
      <TextField
        label="Last Name"
        variant="standard"
        name="last_name"
        value={contact?.last_name}
        onInput={handleChange}
        fullWidth
      />
      <TextField
        label="Email"
        variant="standard"
        name="email"
        value={contact?.email}
        onInput={handleChange}
        fullWidth
      />
      <TextField
        label="Middle"
        variant="standard"
        name="middle_initial"
        value={contact?.middle_initial}
        onInput={handleChange}
        fullWidth
        maxWidth={1}
      />
      <TextField
        label="Phone"
        variant="standard"
        name="phone_number"
        value={contact?.phone_number}
        onInput={handleChange}
        fullWidth
      />
      <TextField
        label="Birth"
        variant="standard"
        name="birth_date"
        value={contact?.birth_date}
        onInput={handleChange}
        fullWidth
      />
      <TextField
        label="Country Code"
        variant="standard"
        name="country_code"
        value={contact?.country_code}
        onInput={handleChange}
        fullWidth
      />
      <Button onClick={() => handleSave()}> Save</Button>
    </Container>
  );
}
