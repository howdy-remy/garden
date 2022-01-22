import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import { Account, Calendar, GardenBeds, Pantry, SeedCatalog } from './features';

export default function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<SeedCatalog />} />
        <Route path="account" element={<Account />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="garden-beds" element={<GardenBeds />} />
        <Route path="Pantry" element={<Pantry />} />
        <Route path="seed-catalog" element={<SeedCatalog />} />
      </Route>
    </Routes>
  );
}
