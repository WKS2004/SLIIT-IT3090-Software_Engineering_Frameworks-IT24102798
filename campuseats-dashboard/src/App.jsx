import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import MenuPage from './features/menu/pages/MenuPage'
import DishDetailPage from './features/menu/pages/DishDetailPage'
import OrderPage from './features/menu/pages/Order'

export default function App() {
  return (
    <div>
      <h1>CampusEats</h1>
      <nav>
        <NavLink to="/">Menu</NavLink> {" | "}
        <NavLink to="/order">Place Order</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/dish/:id" element={<DishDetailPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<p>404 - Page Not Found!</p>} />
      </Routes>
    </div>
  )
}
