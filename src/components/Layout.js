import { Button } from "@mui/material";
import { Outlet, Link, useNavigate } from "react-router-dom";

export function Layout() {
  const navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <hr />

      <Button onClick={() => navigate("/contact/new")}>Add New Contact</Button>
      <Outlet />
    </div>
  );
}
