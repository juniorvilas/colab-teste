import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserDetails } from "./pages/UserDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
}
