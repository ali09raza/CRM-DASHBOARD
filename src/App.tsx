import React from "react";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/sidebar components/Products";
import Orders from "./components/sidebar components/Orders";
import Customer from "./components/sidebar components/Customer";
import Transactions from "./components/sidebar components/Transactions";
import Messages from "./components/sidebar components/Messages";
import Settings from "./components/sidebarBottomComponents/Settings";
import Support from "./components/sidebarBottomComponents/Support";
import Logout from "./components/sidebarBottomComponents/Logout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customer />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="message" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
