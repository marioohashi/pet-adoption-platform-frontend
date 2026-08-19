import { Routes, Route, Link } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export function AppRoutes() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="bg-white shadow-sm p-4 border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-bold text-xl text-emerald-600">
            AdotaPet
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-emerald-600">Início</Link>
            <Link to="/login" className="hover:text-emerald-600">Login</Link>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}