// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function AppRoutes() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}
