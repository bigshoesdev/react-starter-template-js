import "./App.scss";
import { Layout } from "./components/Layout";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { EditContact } from "./components/EditContact";

const routes = (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="contact/:id" element={<EditContact />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default function App() {
  return (
    <div>
      <h1>Test</h1>
      <p>I am ready for the test</p>
      {routes}
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
