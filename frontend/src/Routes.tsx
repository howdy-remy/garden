import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import PlantList from './features/PlantList';
import Timing from './features/Timing';

export default function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PlantList />} />
        <Route path="plant-list" element={<PlantList />} />
        <Route path="timing" element={<Timing />} />
      </Route>
    </Routes>
  );
}
