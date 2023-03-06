import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getContacts } from "../api/contact";

export function Home() {
  const navigate = useNavigate();
  const [contactList, setContactList] = useState([]);

  async function loadContacts() {
    const contacts = await getContacts();
    setContactList(contacts);
  }

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <Container maxWidth="sm">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactList.map((row) => (
            <TableRow
              key={row.id}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/contact/${row.id}`)}
            >
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.last_name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
