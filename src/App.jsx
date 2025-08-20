import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { Home } from "../src/pages/home/Home"
import { Login } from "../src/pages/login/Login"
import { Regsiter } from "../src/pages/login/Regsiter"
import { DetailsPages } from "../src/pages/details/DetailsPages"
import { Account } from "../src/pages/account/Account"
import { Create } from "./components/create/Create"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regsiter />} />
        <Route path="/details/:id" element={<DetailsPages />} />
        <Route path="/account" element={<Account />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
