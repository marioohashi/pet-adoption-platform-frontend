// src/components/Header.tsx
export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">PetAdopt ❤️</h1>

        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600 transition">Início</a>
          <a href="/pets" className="hover:text-blue-600 transition">Pets</a>
          <a href="/sobre" className="hover:text-blue-600 transition">Sobre</a>
          <a href="/login" className="hover:text-blue-600 transition">Entrar</a>
        </nav>
      </div>
    </header>
  );
}
