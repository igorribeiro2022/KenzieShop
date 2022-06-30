import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Dashboard from "../pages/Dashboard";
import Carrinho from "../pages/Cart";
import { Menu } from "../components/Menu";

export default function Router() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Menu/>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
